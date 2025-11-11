import roof from "@/assets/images/roof2.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-x-clip">
      <img
        src={roof}
        className="absolute -left-8 w-[200vw] sm:w-[120vw] max-w-none z-20"
      />

      <div className="h-[80vh] bg-accent-foreground border-4 sm:border-8 border-accent"></div>
    </section>
  );
};

export default Hero;
