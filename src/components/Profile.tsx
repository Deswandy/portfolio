import tiles from "@/assets/images/landing-tiles3.png";
import me from "@/assets/images/me.png";
import { Button } from "./ui/button";
import { ArrowDown, PaperclipIcon } from "lucide-react";

const Profile = () => {
  return (
    <section
      className="relative"
      style={{
        background:
          "radial-gradient(ellipse at top, #ffffff 20%, rgba(241, 241, 28, 0.2)) 70%",
      }}
    >
      <img src={tiles} className="w-full" />
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
        <img src={me} className="-mt-6 md:-mt-24 md:ml-12 w-1/2" />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-serif font-medium">Deswandy Wong</h1>
          <h1 className="text-7xl font-serif font-semibold">
            Fullstack Developer
          </h1>
          <h2 className="text-3xl">
            Your problem, my recipe. My solution, yours to enjoy.
          </h2>
          <p className="text-xl text-wrap w-10/12">
            I’m a computer engineering undergraduate in Multimedia Nusantara
            University, passionate in IoTs, UI/UX, fullstack web development,
            Networking (both social and engineering) and creating solutions for
            <b> real problems</b> that are fun and impactful.
          </p>
          <div className="flex flex-row gap-2">
            <Button className="">
              <ArrowDown />
              View Projects
            </Button>
            <a
              href="/CV_DeswandyWong.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
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
