import roof from "@/assets/images/roof2.png";
import hero from "@/assets/images/swork-landing.png";
import { ArrowDown } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import SplitText from "@/components/SplitText";
import { useEffect, useState } from "react";
// import PixelBlast from "./PixelBlast";
const Hero = () => {
  type TextAlign = "start" | "center" ;
  const [textAlign, setTextAlign] = useState<TextAlign>("center");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTextAlign("center");
      } else {
        setTextAlign("start");
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="relative w-full overflow-x-clip">
      {/* Roof image on top */}
      <img
        src={roof}
        className="absolute -left-8 w-[200vw] sm:w-[120vw] max-w-none z-30 pointer-events-none"
      />

      {/* Main hero block */}
      <div className="relative flex flex-col-reverse sm:flex-row gap-4 sm:gap-18 items-center justify-center h-full sm:h-[84vh] bg-accent-foreground border-4 sm:border-8 border-accent overflow-hidden">
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
        <div className="flex flex-col gap-0 sm:gap-2 sm:mt-10 px-6 sm:w-1/2 z-20">
          <h1 className="text-center sm:text-start text-4xl sm:text-6xl lg:text-8xl w-full font-black text-accent ">
            <SplitText
              text="The Fullstack RESTaurant"
              delay={100}
              duration={0.6}
              ease="elastic.out(0.4,0.3)"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              textAlign={textAlign}
            />
          </h1>

          <h1 className="text-xl text-center sm:text-start sm:text-3xl font-medium text-accent">
            Cooking up solutions, one byte at a thyme
          </h1>

          <h1 className="text-sm text-center sm:text-start pb-4 sm:pb-0 sm:text-xl font-medium text-secondary">
            A Portfolio by Wandy
          </h1>
        </div>

        <img src={hero} className="pt-16 sm:pt-10 h-64 sm:h-[70%] z-20" />
      </div>

      {/* Tooltip button - also above background */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label="Scroll down"
            onClick={() =>
              document
                .getElementById("profile")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hidden sm:grid absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce hover:cursor-pointer z-30"
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
