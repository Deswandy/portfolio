import swork from "@/assets/images/swork-pencil.png";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="w-full bg-[#f0e491] flex flex-col justify-end">
      <div className="w-full bg-[#EDF1F3] rounded-t-4xl">
        <div className="flex flex-col md:flex-row pt-8 md:pt-16 px-8 md:px-12 gap-4 py-10">
          <div className="flex-1 items-stretch md:pr-24 pt-2">
            <div className="text-start text-accent">
              <h1 className="text-6xl font-bold font-serif">Contact me</h1>
              <h1 className="text-2xl font-semibold pb-2">Ready to serve!</h1>
            </div>

            <p className="text-xl leading-relaxed">
              Let's create something exciting together! I'm glad you scrolled
              this far, but it'll be a missed opportunity to not contact me!
            </p>

            <Separator className="my-4" />

            <div className="flex flex-col md:flex-row justify-between text-accent">
              <ul className="flex flex-1 flex-col gap-2">
                <li>
                  <a
                    href="mailto:deswandywong.23@gmail.com"
                    className="flex flex-row gap-2 items-center hover:underline"
                  >
                    <Mail />
                    deswandywong.23@gmail.com
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/deswandy-wong-762016250/"
                    target="_blank"
                    className="flex flex-row gap-2 items-center hover:underline"
                  >
                    <Linkedin />
                    Deswandy Wong
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/Deswandy"
                    target="_blank"
                    className="flex flex-row gap-2 items-center hover:underline"
                  >
                    <Github />
                    github.com/Deswandy
                  </a>
                </li>
              </ul>

              <img
                className="self-center py-4 md:py-0 md:right-0 max-w-[100px] md:max-w-40"
                src={swork}
              />
            </div>
          </div>

          {/* Responsive form */}
          <div className="w-full md:w-[60%]">
            <form
              className="
                flex flex-col gap-4 bg-white p-8 rounded-2xl 
                border border-gray-200 
                transition-all duration-300
                max-w-full mx-auto
              "
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const email = formData.get("email");
                const message = formData.get("message");

                const mailto = `mailto:deswandywong.23@gmail.com?subject=New message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

                window.location.href = mailto;
              }}
            >
              <h2 className="text-3xl font-semibold mb-4 pb-2 border-b border-accent/20">
                Send me a message!
              </h2>

              {/* Row for Name + Email (responsive) */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="
                    w-full flex-1 border border-gray-300 rounded-xl p-3 
                    focus:outline-none focus:ring-2 focus:ring-accent/40 
                    transition-all
                  "
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="
                    w-full flex-1 border border-gray-300 rounded-xl p-3 
                    focus:outline-none focus:ring-2 focus:ring-accent/40 
                    transition-all
                  "
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="
                  w-full border border-gray-300 rounded-xl p-3 
                  focus:outline-none focus:ring-2 focus:ring-accent/40
                  h-28 transition-all
                "
                required
              />

              <Button
                type="submit"
                className="bg-accent hover:bg-green-800 w-full"
              >
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
