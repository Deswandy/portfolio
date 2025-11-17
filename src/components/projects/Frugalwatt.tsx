import frugalwattImage from "@/assets/images/frugalwatt.png";
import { Button } from "../ui/button";

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

        <div className="flex justify-center lg:justify-start">
          <Button variant="secondary" className="w-fit mt-2">
            View Detail
          </Button>
        </div>
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
