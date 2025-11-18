import lenszApp from "@/assets/images/lensz.png";
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

const Lensz = () => {
  return (
    <div className="w-full py-4 px-4 md:px-24 flex flex-row items-center justify-center">
      <div className="flex flex-col bg-[#fefefe] w-full p-6 gap-2 h-full rounded-2xl justify-center">
        <a href="https://lensz-client-web.pages.dev" target="_blank">
          <h1 className="text-5xl font-sans font-bold text-accent hover:text-green-900 transition-all">
            Lensz
          </h1>
        </a>

        <h1 className="text-2xl font-sans font-medium">
          No eyeglasses goes untracked
        </h1>

        <p className="text-xl font-normal w-[96%]">
          Inventory system for Optic Gembira's eyeglasses. Every glasses will be
          tracked with their own unique RFID, enabling quick scans to look up
          glasses' data, change of status, and even counting stock recaps. All
          possible with Lensz' IoT system, preventing the loss of inventory.
        </p>

        {/* ---- Dialog for Details ---- */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-fit mt-2">
              View Details
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Lensz Project Details
              </DialogTitle>
              <DialogDescription>
                A deeper look into how the RFID-enabled inventory system was
                built.
              </DialogDescription>
            </DialogHeader>

            {/* -------- IMAGE GALLERY -------- */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Screenshots</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  src="/lensz-1.png"
                  className="rounded-xl shadow-md border object-cover"
                  alt="Lensz UI 1"
                />
                <img
                  src="/lensz-2.png"
                  className="rounded-xl shadow-md border object-cover"
                  alt="Lensz UI 2"
                />
                <img
                  src="/lensz-3.png"
                  className="rounded-xl shadow-md border object-cover"
                  alt="Lensz UI 3"
                />
                <img
                  src="/lensz-4.png"
                  className="rounded-xl shadow-md border object-cover"
                  alt="Lensz UI 4"
                />
              </div>
            </div>

            <Separator className="my-0" />

            {/* -------- GITHUB -------- */}
            <div>
              <h3 className="font-semibold text-lg">GitHub Repository</h3>
              <a
                href="https://github.com/Petinggi-Teknik-Indonesia"
                target="_blank"
                className="text-blue-600 underline"
              >
                github.com/Petinggi-Teknik-Indonesia
              </a>
            </div>

            <Separator className="my-0" />

            {/* -------- TECH STACK -------- */}
            <div>
              <h3 className="font-semibold text-lg">Tech Stack</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>React + TypeScript</li>
                <li>Vite</li>
                <li>TailwindCSS</li>
                <li>shadcn/ui</li>
                <li>Gin-Gonic (Go) backend</li>
                <li>PostgreSQL</li>
                <li>RFID Scanner IoT Integration</li>
              </ul>
            </div>

            <Separator className="my-0" />

            {/* -------- DESIGN PROCESS -------- */}
            <div>
              <h3 className="font-semibold text-lg">Design & System Flow</h3>
              <p className="text-sm leading-relaxed mt-2">
                Lensz was designed to solve a real inventory loss issue in Optic
                Gembira. We mapped the entire glasses handling workflow:
                receiving, tagging, status changes, and stock recap. The UI
                focuses on speed and clarity because staff need to quickly scan
                RFID tags and view/update status. The system integrates IoT RFID
                hardware through a fast API that updates database records in
                real time.
              </p>

              <img
                src="/lensz-flow.png"
                className="rounded-xl shadow-md border mt-4"
                alt="Lensz system flow"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <img src={lenszApp} className="w-[33%] -ml-24" />
    </div>
  );
};

export default Lensz;
