import frugalwattImage from "@/assets/images/frugalwatt.png";
import { Button } from "../ui/button";

const Frugalwatt = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col mx-10 p-20 gap-2">
        <a href="https://labubuntu.vercel.app" target="_blank">
          <h1 className="text-5xl font-sans font-bold text-accent hover:text-green-900 transition-all">
            FrugalWatt
          </h1>
        </a>
        <h2 className="text-2xl font-medium">
          Counting kWh never been this easy.
        </h2>
        <p className="text-xl w-[80%]">
          A data-driven solution for those who want to buy appliances and don't
          know how to count watts but know how to count money. It was a
          hackathon!
        </p>
        <Button className="w-fit mt-2">View Detail</Button>
      </div>
      <img src={frugalwattImage} />
    </div>
  );
};

export default Frugalwatt;
