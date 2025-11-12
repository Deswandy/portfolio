import lenszApp from "@/assets/images/lensz.png";
import { Button } from "../ui/button";

const Lensz = () => {
  return (
    <div className="w-full py-4 px-4 md:px-24 flex flex-row items-center justify-center">
      <div className="flex flex-col bg-[#fefefe] w-full p-6 gap-2 h-full rounded-2xl justify-center">
        <h1 className="text-5xl font-sans font-bold">Lensz</h1>
        <h1 className="text-2xl font-sans font-medium">
          No eyeglasses goes untracked
        </h1>
        <p className="text-xl font-normal w-[96%]">
          Inventory system for Optic Gembira's eyeglasses. Every glasses will be tracked
          with their own unique RFID, enabling quick scans to look up glasses' data,
          change of status, and even counting stock recaps. All possible with Lensz'
          IoT system, preventing the loss of inventory.
        </p>
        <Button variant="secondary" className="w-fit mt-2">View Details</Button>
      </div>
      <img src={lenszApp} className="w-[33%] -ml-24" />
    </div>
  );
};

export default Lensz;
