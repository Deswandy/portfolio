import tiles from "@/assets/images/landing-tiles3.png";
import me from "@/assets/images/me.png";
import { Button } from "./ui/button";
import { ArrowDown, PaperclipIcon } from "lucide-react";
import RotatingText from "./RotatingText";


const Profile = () => {
  return (
    <section
      id="profile"
      className="relative"
      style={{
        background:
          "radial-gradient(ellipse at top, #ffffff 20%, rgba(241, 241, 28, 0.2)) 70%",
      }}
    >
      <img src={tiles} className="w-full" />
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12 w-full">
        <img src={me} className="-mt-6 sm:-mt-24 sm:ml-12 w-[40%] md:w-1/2" />
        <div className="flex flex-col items-center sm:items-start mt-6 md:mt-0 gap-2 md:gap-4">
          <h1 className="text-xl md:text-4xl font-serif font-medium">Deswandy Wong</h1>
          <h1 className="text-2xl md:text-7xl font-serif text-start font-semibold">
            <RotatingText
              texts={["Fullstack Developer", "DevOps Engineer", "IoT Engineer", "Solution Tinkerer"]}
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-2"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
          </h1>
          <h2 className="text-lg text-center sm:text-start md:text-3xl">
            Your problem, my recipe. My solution, yours to enjoy.
          </h2>
          <p className="text-sm md:text-xl text-justify sm:text-start text-wrap w-10/12">
            I’m a computer engineering undergraduate in Multimedia Nusantara
            University, passionate in IoTs, UI/UX, fullstack web development,
            Networking (both social and engineering) and creating solutions for
            <b> real problems</b> that are fun and impactful.
          </p>
          <div className="flex mt-4 sm:mt-0 flex-row gap-2">
            <Button
              className=""
              size="sm"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <ArrowDown />
              View Projects
            </Button>
            <a
              href="/CV_DeswandyWong.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="secondary">
                <PaperclipIcon /> Look at my CV!
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
