import maximaCollage from "@/assets/images/maxima.png";
import { Button } from "../ui/button";

const Maxima = () => {
  return (
    <div className="my-20">
      <div className="bg-primary/30 flex flex-row py-10">
        <div className="relative w-full">
          <img src={maximaCollage} className="md:-ml-30 md:-mt-20 absolute" />
        </div>
        <div className="flex flex-col mx-10 py-30 gap-2">
          <a href="https://maximaumn.id" target="_blank">
            <h1 className="text-5xl font-sans font-bold text-accent hover:text-green-900 transition-all hover:cursor-pointer">
              MAXIMA UMN 2025
            </h1>
          </a>
          <h2 className="text-2xl font-medium">
            2000 freshmen, 50+ activities, 1 system.
          </h2>
          <p className="text-xl w-[80%]">
            Made a ticketing and attendance system for MAXIMA 2025, where
            freshmen year students have the chance to experience UMN’s student
            activity units, ranging from arts and culture, sciences, to social
            responsibilities.
          </p>
          <Button className="w-fit mt-2">View Detail</Button>
        </div>
      </div>
    </div>
  );
};

export default Maxima;
