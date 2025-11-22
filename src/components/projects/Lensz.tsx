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
import diagram from "@/assets/images/lensz-diagram.jpg"
import prototype from "@/assets/images/lensz-prototype.jpg"
import lensz1 from "@/assets/images/lensz-1.png"
import lensz2 from "@/assets/images/lensz-2.png"
import lensz3 from "@/assets/images/lensz-3.jpg"

const Lensz = () => {
  return (
    <div className="w-full py-4 px-4 md:px-24 flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="flex flex-col bg-[#fefefe] w-full p-6 gap-2 h-full rounded-2xl justify-center">
        <a href="https://lensz-client-web.pages.dev" target="_blank">
          <h1 className="text-2xl md:text-5xl font-sans font-bold text-accent hover:text-green-900 transition-all">
            Lensz
          </h1>
        </a>

        <h1 className="text-lg md:text-2xl font-sans font-medium">
          No eyeglasses goes untracked
        </h1>

        <p className="text-sm md:text-xl font-normal w-[96%]">
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

          <DialogContent className="w-[90vw] max-h-[90vh] overflow-y-auto p-6 space-y-6">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img
                  src={lensz1}
                  className="rounded-xl h-full shadow-md border object-cover"
                  alt="Lensz UI 1"
                />
                <img
                  src={lensz2}
                  className="rounded-xl h-full shadow-md border object-cover"
                  alt="Lensz UI 2"
                />
                <img
                  src={lensz3}
                  className="rounded-xl h-full shadow-md border object-cover"
                  alt="Lensz UI 3"
                />
              </div>
            </div>

            {/* -------- DESIGN PROCESS -------- */}
            <div>
              <h3 className="font-semibold text-lg">Background</h3>
              <p className="text-sm leading-relaxed mt-2">
                Optik Gembira, located in ITC Mangga Dua, frequently loses track
                of glasses due to dynamic shelf arrangements, resulting in 1–5
                missing items per month. Stock recaps also take up to 5 hours
                and often contain 1–5 item errors per drawer. Our solution is a
                digital twin of the glasses inventory using RFID tags and a
                scanner. Each pair of glasses is tagged, and any movement(such
                as a sale)is automatically recorded. This provides real-time
                visibility, faster and more accurate stock checks, and reduces
                losses. The owner saves both time and money by cutting down on
                misplaced items and manual recounting.
              </p>
              
            </div>
            <Separator className="my-0" />

            {/* -------- DESIGN PROCESS -------- */}
            <div>
              <h3 className="font-semibold text-lg">Design & System Flow</h3>
              <p className="text-sm leading-relaxed mt-2">
                Our system will use RFID tags per each eyeglasses to identify
                each of the glasses uniquely. These tags have a diameter of 7mm,
                which fits the constraint of the client’s need (lesser diameter
                than 10mm). There will be a scanner that scans these tags for
                glasses registration or status change, and the ID will be
                fetched into the backend server, where business logic and
                database access (queries and transactions) will run. The
                frontend will be another interface for the user to interact with
                the eyeglasses resources, and tracking these glasses will be
                possible by looking up their current status and the status
                histories. When the scanner hits a POST request to the backend,
                the frontend will get notified via websocket in real-time, both
                in change of status and registration.
              </p>

              <img
                src={diagram}
                className="rounded-xl shadow-md border mt-4"
                alt="Lensz system flow"
              />
            </div>

            <Separator className="my-0" />
            
            <div className=" ">
              <h3 className="font-semibold text-lg">Device Prototype</h3>
              <img
                src={prototype}
                className="rounded-xl w-full object-contain shadow-md border mt-4"
                alt="Lensz system flow"
              />
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
          </DialogContent>
        </Dialog>
      </div>

      <img src={lenszApp} className="-mb-10 z-10 w-1/2 md:w-[33%] md:-ml-24" />
    </div>
  );
};

export default Lensz;
