import maximaCollage from "@/assets/images/maxima.png";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Separator } from "../ui/separator";

const Maxima = () => {
  return (
    <section className="my-32 relative">
      <div
        className="
          relative flex flex-row items-center gap-10 w-full 
          py-12 pl-8 pr-20 
          bg-linear-to-r
          from-0%
          from-primary/30
          to-50%
          to-secondary/70
          overflow-visible
        "
      >
        {/* Collage Image */}
        <img
          src={maximaCollage}
          className="
            w-[42%] 
            object-contain 
            drop-shadow-md
            absolute -left-10 top-1/2 -translate-y-1/2
          "
        />

        {/* Right Content */}
        <div className="flex flex-col gap-3 ml-[40%] max-w-[680px] pl-6">
          <a href="https://maximaumn.id" target="_blank">
            <h1 className="text-5xl font-bold hover:text-green-900 transition-all">
              MAXIMA 2025
            </h1>
          </a>

          <h2 className="text-2xl font-semibold">
            2000 freshmen, 50+ activities, 1 system.
          </h2>

          <p className="text-lg leading-relaxed">
            Made a ticketing and attendance system for MAXIMA 2025, where
            freshmen year students have the chance to experience UMN’s student
            activity units, ranging from arts and culture, sciences, to social
            responsibilities.
          </p>

          {/* Dialog Start */}
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="default" 
                className="bg-white text-accent hover:bg-gray-200 w-fit mt-2"
              >
                View Projects
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-6 space-y-6">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">
                  MAXIMA 2025 – System Overview
                </DialogTitle>
                <DialogDescription>
                  A full breakdown of the ticketing and attendance platform built for UMN’s largest freshman event.
                </DialogDescription>
              </DialogHeader>

              {/* ----- Screenshots Section ----- */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Event & System Screens</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <img
                    src="/maxima-1.png"
                    className="rounded-xl shadow-md border object-cover"
                    alt="MAXIMA UI 1"
                  />
                  <img
                    src="/maxima-2.png"
                    className="rounded-xl shadow-md border object-cover"
                    alt="MAXIMA UI 2"
                  />
                  <img
                    src="/maxima-3.png"
                    className="rounded-xl shadow-md border object-cover"
                    alt="MAXIMA UI 3"
                  />
                  <img
                    src="/maxima-event.png"
                    className="rounded-xl shadow-md border object-cover"
                    alt="MAXIMA event photo"
                  />
                </div>
              </div>

              <Separator className="my-0"/>

              {/* ----- GitHub Repo ----- */}
              {/* <div>
                <h3 className="font-semibold text-lg">GitHub Repository</h3>
                <a
                  href="https://github.com/YOUR_REPO_HERE"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  github.com/YOUR_REPO_HERE
                </a>
              </div>

              <Separator className="my-0"/> */}

              {/* ----- Tech Stack ----- */}
              <div>
                <h3 className="font-semibold text-lg">Tech Stack</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>React + TypeScript</li>
                  <li>Vite</li>
                  <li>TailwindCSS</li>
                  <li>shadcn/ui</li>
                  <li>Express.js backend</li>
                  <li>MySQL</li>
                  <li>QR-based ticketing module</li>
                  <li>Admin dashboard with real-time attendee count</li>
                  <li>Docker</li>
                </ul>
              </div>

              <Separator className="my-0"/>

              {/* ----- Design Process / System Explanation ----- */}
              <div>
                <h3 className="font-semibold text-lg">System Flow & Design Process</h3>
                
                <p className="text-sm leading-relaxed mt-2">
                  MAXIMA required a system capable of handling thousands of
                  students across dozens of parallel activities. We built a
                  registration and ticketing module, complete with unique QR
                  identifiers for each student. The attendance flow was designed
                  to be fast and offline-tolerant since venue Wi-Fi can be
                  unreliable during large events.
                </p>

                <p className="text-sm leading-relaxed mt-3">
                  The admin panel displays real-time attendance counts,
                  activity popularity, and scanning logs to help committees make
                  quick decisions during event flow. The UI was kept clean and
                  large-button oriented to help volunteers scan tickets quickly
                  with little training.
                </p>

                <img
                  src="/maxima-flow.png"
                  className="rounded-xl shadow-md border mt-4"
                  alt="MAXIMA system flow"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Maxima;
