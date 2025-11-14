import header from "@/assets/images/landing-tiles-half.png";
import swork from "@/assets/images/swork-kenaif.png";

const Skills = () => {
  return (
    <section className="bg-[linear-gradient(to_bottom,#f1f11c33_10%,#f1f11c66_30%,#f0e491_70%)] flex flex-col justify-center min-h-screen w-full py-12 gap-4">
      <img src={header} className="w-full" />
      <div className="flex flex-row gap-4 items-center justify-center py-12">
        <img src={swork} className="size-24" />
        <div className="text-center text-accent">
          <h1 className="text-6xl font-bold font-serif">Chef's Skills</h1>
          <h1 className="text-2xl font-light ">Skillset over the years</h1>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-5 gap-4 h-[80vh] px-12">
        <div className="col-span-3 row-span-2 bg-primary rounded-2xl">1</div>
        <div className="col-span-2 row-span-2 col-start-4 bg-secondary rounded-2xl">4</div>
        <div className="col-span-2 row-span-2 row-start-3 bg-primary rounded-2xl">5</div>
        <div className="col-span-3 row-span-2 col-start-3 row-start-3 bg-secondary rounded-2xl">6</div>
      </div>
    </section>
  );
};

export default Skills;
