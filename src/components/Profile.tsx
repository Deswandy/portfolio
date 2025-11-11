import tiles from "@/assets/images/landing-tiles3.png";
import me from "@/assets/images/me.png";
import { Button } from "./ui/button";

const Profile = () => {
  return (
    <div className="relative">
      <img src={tiles} className="w-full" />
      <div className="flex flex-row items-center gap-12">
        <img src={me} className="-mt-24 ml-12" />
        <div>
          <h1 className="text-5xl">Deswandy Wong</h1>
          <h1 className="text-7xl">Fullstack Developer</h1>
          <h2 className="text-3xl">
            Your problem, my recipe. My solution, yours to enjoy.
          </h2>
          <p className="text-xl text-wrap w-10/12">
            I’m a computer engineering undergraduate in Multimedia Nusantara
            University, passionate in IoTs, UI/UX, fullstack web development,
            Networking (both social and engineering) and creating solutions for
            real problems that are fun and impactful.
          </p>
          <div className="flex flex-row gap-2">
            <Button>View Projects</Button>
            <Button variant="secondary">Look at my CV!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
