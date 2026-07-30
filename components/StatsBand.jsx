import NumbersBoard from "./NumbersBoard";
import SectionHeading from "./SectionHeading";
import GlobeLines from "./GlobeLines";
import { STATS } from "@/lib/data";

/**
 * Site-wide statistics band — one of the sanctioned dark feature sections
 * (§05.2 L3). A wireframe globe turns behind the readouts so the panel has
 * depth without resorting to a photograph or a glow.
 */
export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 sm:py-28">
      <div className="mesh-glow mesh-glow-invert" aria-hidden />
      <GlobeLines className="absolute -right-24 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 opacity-70 sm:-right-16 lg:right-[-6rem]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="By the Numbers"
          title={
            <>
              Proof, <em>Not Promises</em>
            </>
          }
          invert
        />
        <NumbersBoard stats={STATS} />
      </div>
    </section>
  );
}
