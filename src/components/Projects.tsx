import tiles from "@/assets/images/half-tiles.png";
import swork from "@/assets/images/swork-dish.png"
import Lensz from "./projects/Lensz";
import Maxima from "./projects/Maxima";
import Frugalwatt from "./projects/Frugalwatt";


const Projects = () => {
  return (
    <section id="projects" className="w-full bg-[linear-gradient(to_bottom,rgba(241,241,28,0.15),rgba(241,241,28,0.20))]">
      <div className="flex flex-row items-center justify-between pt-12">
        <img src={tiles} className="w-[20%] md:w-[30%] h-full" />
        <div className="flex flex-row gap-4 px-2 items-center justify-between">
          <img src={swork} className="size-10 md:size-24"/>
          <div className="text-center text-accent">
            <h1 className="text-2xl md:text-6xl font-bold font-serif">Main Dishes</h1>
            <h1 className="text-sm md:text-2xl font-light ">Hand-picked featured projects</h1>
          </div>
        </div>
        <img src={tiles} className="w-[20%] md:w-[30%] h-full" />
      </div>
      <div className="md:py-10">
        <Lensz/>
        <Maxima/>
        <Frugalwatt/>
      </div>
    </section>
  );
};

export default Projects;
