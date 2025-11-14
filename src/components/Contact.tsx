import swork from "@/assets/images/swork-pencil.png";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="h-screen w-full bg-[#f0e491] flex flex-col justify-end">
      <div className="min-h-[95vh] w-full bg-[#EDF1F3] rounded-t-4xl">
        <div className="flex flex-row gap-6 items-center justify-center p-16">
          <div className="text-center text-accent">
            <h1 className="text-6xl font-bold font-serif">Contact me</h1>
            <h1 className="text-2xl font-light">Ready to serve!</h1>
          </div>
          <img className="" src={swork} />
        </div>
        <div className="flex flex-row px-12 gap-4">
          <div className="flex-1 items-stretch md:pr-24">
            <p className="text-xl">
              Let's create something exciting together! I'm glad you scrolled
              this far, but it'll be a missed opportunity to not contact me!
            </p>
            <Separator className="my-4" />
            <ul className="flex flex-1 flex-col gap-2">
              <li className="flex flex-row gap-2">
                <Mail />
                deswandywong23.@gmail.com
              </li>
              <li className="flex flex-row gap-2">
                <Linkedin />
                Deswandy Wong
              </li>
              <li className="flex flex-row gap-2">
                <Github />
                github.com/Deswandy
              </li>
            </ul>
          </div>
          <div className="w-2/3">
            <form
              className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-md max-w-full mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent!");
              }}
            >
              <h2 className="text-3xl font-semibold mb-2">
                Send me a message!
              </h2>

              {/* Row for Name + Email */}
              <div className="flex flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="flex-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="flex-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              {/* Controlled textarea size */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-accent h-32 max-h-40"
                required
              />

              <Button type="submit" className="bg-accent hover:bg-green-800">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
