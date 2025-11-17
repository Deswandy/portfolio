import roof from "@/assets/images/roof2.png";
import hero from "@/assets/images/swork-landing.png";
import { ArrowDown } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Hero = () => {
  return (
    <section className="relative w-full overflow-x-clip">
      <img
        src={roof}
        className="absolute -left-8 w-[200vw] sm:w-[120vw] max-w-none z-20"
      />

      <div className="flex flex-row gap-18 items-center justify-center h-[84vh] bg-accent-foreground border-4 sm:border-8 border-accent">
        <div className="flex flex-col gap-2 mt-10 w-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-wrap w-full font-black text-accent">
            The Fullstack RESTaurant
          </h1>
          <h1 className="text-3xl text-wrap w-full font-medium text-accent">
            Cooking up solutions, one byte at a thyme
          </h1>
          <h1 className="text-xl text-wrap w-full font-medium text-secondary">
            A Portfolio by Wandy
          </h1>
        </div>
        <img src={hero} className="pt-10 h-[70%]" />
      </div>

      {/* Tooltip: TooltipTrigger (asChild) -> trigger element (button with ArrowDown)
          TooltipContent must be a sibling of TooltipTrigger */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label="Scroll down"
            onClick={() => console.log("hi there! You've clicked me, thankyou")}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce hover:cursor-pointer"
          >
            {/* either use size prop or Tailwind w/h */}
            <ArrowDown size={36} className="text-accent" />
            {/* or: <ArrowDown className="w-9 h-9 text-accent" /> */}
          </button>
        </TooltipTrigger>

        <TooltipContent className="bg-primary" side="top" align="center">
          <p>Look at meee!</p>
        </TooltipContent>
      </Tooltip>
    </section>
  );
};

export default Hero;
