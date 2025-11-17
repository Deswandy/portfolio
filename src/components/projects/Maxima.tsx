import maximaCollage from "@/assets/images/maxima.png";
import { Button } from "../ui/button";

const Maxima = () => {
  return (
    <section className="my-32 relative">
      <div
        className="
          relative flex flex-row items-center gap-10 w-full 
          py-12 pl-8 pr-20 
          bg-linear-to-r
          from-0%
          from-primary/30
          to-50%
          to-secondary/70
          overflow-visible
        "
      >
        {/* Collage Image – overflowing */}
        <img
          src={maximaCollage}
          className="
            w-[42%] 
            object-contain 
            drop-shadow-md
            absolute -left-10 top-1/2 -translate-y-1/2
          "
        />

        {/* Right Content Block */}
        <div className="flex flex-col gap-3 ml-[40%] max-w-[680px] pl-6">
          <a href="https://maximaumn.id" target="_blank">
            <h1 className="text-5xl font-bold hover:text-green-900 transition-all">
              MAXIMA 2025
            </h1>
          </a>

          <h2 className="text-2xl font-semibold">
            2000 freshmen, 50+ activities, 1 system.
          </h2>

          <p className="text-lg leading-relaxed">
            Made a ticketing and attendance system for MAXIMA 2025, where
            freshmen year students have the chance to experience UMN’s student
            activity units, ranging from arts and culture, sciences, to social
            responsibilities.
          </p>

          <Button variant="default" className="bg-white text-accent hover:bg-gray-200 w-fit mt-2">View projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Maxima;
