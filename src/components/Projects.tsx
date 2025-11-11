import tiles from "@/assets/images/half-tiles.png";
import swork from "@/assets/images/swork-dish.png"

const Projects = () => {
  return (
    <section className="w-full bg-[linear-gradient(to_bottom,rgba(241,241,28,0.15),rgba(241,241,28,0.20))]">
      <div className="flex flex-row justify-between pt-12">
        <img src={tiles} className="w-[30%]" />
        <div className="flex flex-row gap-4 items-center justify-between">
          <img src={swork} className="size-24"/>
          <div className="text-center text-accent">
            <h1 className="text-6xl font-bold font-serif">Main Dishes</h1>
            <h1 className="text-2xl font-light ">Hand-picked featured projects</h1>
          </div>
        </div>
        <img src={tiles} className="w-[30%]" />
      </div>
    </section>
  );
};

export default Projects;
