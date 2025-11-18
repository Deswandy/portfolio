import frugalwattImage from "@/assets/images/frugalwatt.png";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "../ui/separator";

const Frugalwatt = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center w-full">
      {/* Left Section */}
      <div className="flex flex-col mx-6 lg:mx-10 p-8 lg:p-20 pr-0 lg:mr-0 gap-2 text-center lg:text-left">
        <a href="https://labubuntu.vercel.app" target="_blank">
          <h1 className="text-4xl lg:text-5xl font-sans font-bold text-accent hover:text-green-900 transition-all">
            FrugalWatt
          </h1>
        </a>

        <h2 className="text-xl lg:text-2xl font-medium">
          Counting kWh never been this easy.
        </h2>

        <p className="text-base lg:text-xl lg:w-[80%] mx-auto lg:mx-0">
          A data-driven solution for those who want to buy appliances and don't
          know how to count watts but know how to count money. It was a
          hackathon!
        </p>

        {/* Dialog Start */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-fit mt-2">
              View Detail
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                FrugalWatt Project Details
              </DialogTitle>
              <DialogDescription>
                A closer look at the creation process behind the project.
              </DialogDescription>
            </DialogHeader>

            {/* ---- Screenshot Section ---- */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Screenshots</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  src="/your-image-1.png"
                  className="rounded-xl shadow-md border object-cover"
                  alt="FrugalWatt UI 1"
                />
                <img
                  src="/your-image-2.png"
                  className="rounded-xl shadow-md border object-cover"
                  alt="FrugalWatt UI 2"
                />
                <img
                  src="/your-image-3.png"
                  className="rounded-xl shadow-md border object-cover"
                  alt="FrugalWatt UI 3"
                />
              </div>
            </div>

            <Separator className="my-0" />

            {/* ---- GitHub ---- */}
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">GitHub Repository</h3>
              <a
                href="https://github.com/YOUR_REPO_HERE"
                target="_blank"
                className="text-blue-600 underline"
              >
                github.com/YOUR_REPO_HERE
              </a>
            </div>

            <Separator className="my-0" />

            {/* ---- Tech Stack ---- */}
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">Tech Stack</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>React + Vite</li>
                <li>TailwindCSS</li>
                <li>TypeScript</li>
                <li>shadcn/ui</li>
                <li>Framer Motion</li>
              </ul>
            </div>

            <Separator className="my-0" />

            {/* ---- Design Process ---- */}
            <div>
              <h3 className="font-semibold text-lg">Design Process</h3>
              <p className="text-sm leading-relaxed mt-2">
                The design started with identifying the biggest pain point: most
                users don't know watt usage but understand the cost of
                electricity. I created a minimal layout that highlights clarity
                over complexity. Wireframes were drafted quickly due to
                hackathon time constraints, then turned into a simple, intuitive
                calculator UI focusing on instant feedback and ease of use.
              </p>

              {/* Optional design explanation image */}
              <img
                src="/your-flow-image.png"
                className="rounded-xl shadow-md border mt-4"
                alt="Wireframe or design flow"
              />
            </div>
          </DialogContent>
        </Dialog>
        {/* Dialog End */}
      </div>

      {/* Right: Image */}
      <img
        src={frugalwattImage}
        className="w-[80%] sm:w-[60%] lg:w-[40%] mt-6 lg:mt-0"
        alt="FrugalWatt"
      />
    </div>
  );
};

export default Frugalwatt;
