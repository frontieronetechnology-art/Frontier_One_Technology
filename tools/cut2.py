"""Sky removal by local texture, not brightness.

Brightness thresholding breaks at blue hour, where the sky and the building
masses sit in the same tonal band. Sky is however always the smoothest region
in the frame, so we cut on local variance instead: for each column, walk down
until the local standard deviation stays above threshold for several rows —
that row is the roofline.
"""
import sys, os
import numpy as np
from PIL import Image, ImageFilter

def boxmean(a, r):
    p = np.pad(a, r, mode="edge")
    c = p.cumsum(0).cumsum(1)
    c = np.pad(c, ((1,0),(1,0)))
    H, W = a.shape; s = 2*r+1
    return (c[s:s+H, s:s+W] - c[0:H, s:s+W] - c[s:s+H, 0:W] + c[0:H, 0:W]) / (s*s)

def cutout(src, dst, r=4, run=6, feather=1.0, max_sky_frac=0.92):
    im = Image.open(src).convert("RGB")
    a = np.array(im).astype(float); H, W, _ = a.shape
    g = 0.299*a[:,:,0] + 0.587*a[:,:,1] + 0.114*a[:,:,2]
    std = np.sqrt(np.maximum(boxmean(g*g, r) - boxmean(g, r)**2, 0))

    sky_std = np.percentile(std[:int(H*0.05), :], 80)
    thr = max(sky_std*2.6, 1.8)

    tex = std > thr
    # a row only counts as roofline if the texture persists below it
    keep = tex.copy()
    for i in range(1, run):
        keep[:-i] &= tex[i:]

    roof = np.full(W, H, dtype=float)
    for x in range(W):
        hit = np.where(keep[:, x])[0]
        if len(hit): roof[x] = hit[0]
    roof = np.minimum(roof, H*max_sky_frac)

    k = 6
    p = np.pad(roof, k, mode="edge")
    roof = np.array([p[i:i+2*k+1].min() for i in range(W)]) + 2.0  # bite 2px into the
    # building rather than leaving a rim of sky, which shows as a halo on dark grounds

    Y = np.arange(H)[:, None].repeat(W, 1)
    alpha = (Y >= roof[None, :]).astype(np.uint8)*255
    alpha = np.array(Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(feather)))/255.0
    out = Image.fromarray(np.dstack([a.astype(np.uint8), (alpha*255).astype(np.uint8)]), "RGBA")
    os.makedirs(os.path.dirname(dst) or ".", exist_ok=True)
    out.save(dst)
    return dict(sky_std=round(float(sky_std),2), thr=round(float(thr),2),
                coverage=round(float(alpha.mean())*100,1),
                roof_min=int(roof.min()), roof_max=int(roof.max()))

if __name__ == "__main__":
    print(cutout(sys.argv[1], sys.argv[2]))
