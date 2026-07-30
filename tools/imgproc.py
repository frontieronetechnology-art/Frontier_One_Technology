#!/usr/bin/env python3
"""Frontier One image pipeline: raw ChatGPT PNG -> site-ready webp (+ optional sky cutout)."""
import sys, os
from PIL import Image, ImageFilter
import numpy as np

def to_webp(src, dst, maxw=2400, q=84):
    im = Image.open(src).convert("RGB")
    if im.width > maxw:
        im = im.resize((maxw, round(im.height*maxw/im.width)), Image.LANCZOS)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    im.save(dst, "WEBP", quality=q, method=6)
    return im.size

def cutout(src, dst, feather=0.8):
    """Remove the sky above the roofline. Auto-detects whether the sky is
    brighter or darker than the buildings, so it works at dusk and blue hour."""
    im = Image.open(src).convert("RGB")
    a = np.array(im).astype(float); H, W, _ = a.shape
    lum = 0.299*a[:,:,0] + 0.587*a[:,:,1] + 0.114*a[:,:,2]
    sky = np.median(lum[:int(H*0.05), :])
    body = np.median(lum[int(H*0.35):int(H*0.8), :])
    bright_sky = sky > body
    thr = sky*0.62 if bright_sky else sky + max(14, (body-sky)*0.45)
    roof = np.full(W, H, dtype=float)
    for x in range(W):
        col = lum[:, x]
        hit = np.where(col < thr)[0] if bright_sky else np.where(col > thr)[0]
        if len(hit): roof[x] = hit[0]
    k = 5
    pad = np.pad(roof, k, mode="edge")
    roof = np.array([pad[i:i+2*k+1].min() for i in range(W)])
    Y = np.arange(H)[:, None].repeat(W, 1)
    alpha = (Y >= roof[None, :]).astype(np.uint8)*255
    alpha = np.array(Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(feather)))/255.0
    out = Image.fromarray(np.dstack([a.astype(np.uint8), (alpha*255).astype(np.uint8)]), "RGBA")
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    out.save(dst)
    return dict(sky=round(sky,1), body=round(body,1), bright_sky=bool(bright_sky),
                thr=round(thr,1), coverage=round(float(alpha.mean())*100,1))

if __name__ == "__main__":
    cmd = sys.argv[1]
    if cmd == "plate":
        print(to_webp(sys.argv[2], sys.argv[3], int(sys.argv[4]) if len(sys.argv)>4 else 2400))
    elif cmd == "cutout":
        print(cutout(sys.argv[2], sys.argv[3]))
