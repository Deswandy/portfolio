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
import maxima1 from "@/assets/images/maxima-1.png"
import maxima2 from "@/assets/images/maxima-2.png"
import maxima3 from "@/assets/images/maxima-3.png"
import maxima4 from "@/assets/images/maxima-4.png"

const Maxima = () => {
  return (
<section className="my-32 relative overflow-visible">
  <div
    className="
      relative flex flex-col sm:flex-row items-center
      gap-10 w-full 
      py-12 px-8 sm:pl-8 sm:pr-20
      bg-linear-to-r
      from-primary/30 from-0%
      to-secondary/70 to-50%
      overflow-visible
    "
  >
    {/* Collage Image */}
    <img
      src={maximaCollage}
      className="
        object-contain drop-shadow-md
        w-3/4 mx-auto                      /* mobile */
        -mt-24
        sm:mt-0
        sm:w-[42%]                         /* desktop size */
        absolute                        /* desktop: free floating */
        sm:-left-10                        /* overflow LEFT */
        sm:top-1/2 sm:-translate-y-1/2     /* vertical center */
      "
    />

    {/* Right Content */}
    <div
      className="
        flex flex-col gap-3
        mt-60
        sm:mt-0
        sm:ml-[40%]                        /* make room for image */
        max-w-[680px]
        text-center sm:text-left
        px-2 sm:pl-6
      "
    >
      <a href="https://maximaumn.id" target="_blank">
        <h1 className="text-4xl sm:text-5xl font-bold hover:text-green-900 transition-all">
          MAXIMA 2025
        </h1>
      </a>

      <h2 className="text-xl sm:text-2xl font-semibold">
        2000+ freshmen, 50+ activities, 1 system.
      </h2>

      <p className="text-base sm:text-lg leading-relaxed">
        Made a ticketing and attendance system for MAXIMA 2025, where freshmen
        experience UMN’s student activity units across arts, sciences, culture,
        and social communities.
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

            <DialogContent className="w-[90vw] max-h-[90vh]  max-w-none overflow-y-auto p-6 space-y-6">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">
                  MAXIMA 2025 – System Overview
                </DialogTitle>
                <DialogDescription>
                  Inside the system powering UMN’s biggest annual freshman event.
                </DialogDescription>
              </DialogHeader>

              {/* ----- Background Section ----- */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Background</h3>
                <p className="text-sm leading-relaxed">
                  MAXIMA is UMN’s largest annual freshman event, bringing together over
                  2000 new students and showcasing 50+ student activity units. To keep
                  traffic flowing, activities must manage crowds quickly, verify tickets,
                  and capture attendance accurately.
                </p>

                <p className="text-sm leading-relaxed">
                  The old system relied heavily on manual registration and attendance
                  lists, causing bottlenecks, slow check-ins, and inconsistent tracking.
                  Our goal was to streamline this process with a reliable, scalable system
                  that committees could operate with minimal training.
                </p>
              </div>

              <Separator />

              {/* ----- Screenshots Section ----- */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Event & System Screens</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[maxima1, maxima2, maxima3, maxima4].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      className="rounded-xl shadow-md border object-cover w-full h-48"
                      alt={`MAXIMA UI ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <Separator />

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
                  <li>Real-time admin dashboard</li>
                  <li>Docker</li>
                </ul>
              </div>

            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Maxima;
