import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import Scramble from "@/components/Scramble";
import Magnetic from "@/components/Magnetic";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="grid-paper grid-paper-fade absolute inset-0" aria-hidden />
      <div className="container-x relative py-32 text-center">
        <Reveal>
          <p className="ghost-num animate-drift mx-auto text-[9rem] sm:text-[14rem]">404</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display mt-2 text-3xl sm:text-5xl">
            <Scramble text="Page Not Found" delay={0.4} speed={40} />
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-md text-[0.95rem] leading-relaxed text-n700">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
            Let&rsquo;s get you back on track.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Magnetic>
            <Link href="/" className="btn btn-ink mt-10">
              <span className="flex items-center gap-2.5">
                Back to Homepage <Icon name="arrow" />
              </span>
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
