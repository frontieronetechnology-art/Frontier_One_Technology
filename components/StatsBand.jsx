import NumbersBoard from "./NumbersBoard";
import SectionHeading from "./SectionHeading";
import { STATS } from "@/lib/data";

/** Site-wide statistics band — ink panel, odometer readout board (SRS §5.1.8). */
export default function StatsBand({ index = "06" }) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div className="mesh-glow mesh-glow-invert" aria-hidden />
      <div className="container-x relative">
        <SectionHeading
          index={index}
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
