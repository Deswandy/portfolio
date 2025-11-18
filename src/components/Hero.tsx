import roof from "@/assets/images/roof2.png";
import hero from "@/assets/images/swork-landing.png";
import { ArrowDown } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import SplitText from "@/components/SplitText";
// import PixelBlast from "./PixelBlast";
const Hero = () => {
  return (
    <section className="relative w-full overflow-x-clip">

      {/* Roof image on top */}
      <img
        src={roof}
        className="absolute -left-8 w-[200vw] sm:w-[120vw] max-w-none z-30 pointer-events-none"
      />

      {/* Main hero block */}
      <div className="relative flex flex-row gap-18 items-center justify-center h-[84vh] bg-accent-foreground border-4 sm:border-8 border-accent overflow-hidden">

        {/* PixelBlast = background layer */}
        {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
          <PixelBlast
            variant="square"
            pixelSize={8}
            color="#F0E491"
            patternScale={2}
            patternDensity={2}
            speed={0.6}
            edgeFade={0.1}
            transparent
          />
        </div> */}

        {/* Foreground content */}
        <div className="flex flex-col gap-2 mt-10 w-1/2 z-20">
          <h1 className="text-4xl md:text-6xl lg:text-8xl w-full font-black text-accent ">
            <SplitText
              text="The Fullstack RESTaurant"
              delay={100}
              duration={0.6}
              ease="elastic.out(0.4,0.3)"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              textAlign="start"
            />
          </h1>

          <h1 className="text-3xl font-medium text-accent">
            Cooking up solutions, one byte at a thyme
          </h1>

          <h1 className="text-xl font-medium text-secondary">
            A Portfolio by Wandy
          </h1>
        </div>

        <img src={hero} className="pt-10 h-[70%] z-20" />
      </div>

      {/* Tooltip button - also above background */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label="Scroll down"
            onClick={() =>
              document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" })
            }
            className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce hover:cursor-pointer z-30"
          >
            <ArrowDown size={36} className="text-accent" />
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
