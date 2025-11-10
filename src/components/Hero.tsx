import roof from "@/assets/images/roof.png"

const Hero = () => {
  return (
    <div className="h-[90vh] bg-accent-foreground border-b-8 border-l-8 border-r-8 border-accent">
      <img className="w-full absolute left-0 bg-cover h-52" src={roof}/>
    </div>
  )
}

export default Hero