import header from "@/assets/images/landing-tiles-half.png";
import swork from "@/assets/images/swork-kenaif.png";

import {
  SiReact,
  SiLaravel,
  SiMysql,
  SiGithubactions,
  SiDocker,
  SiCloudflare,
  SiArduino,
  SiEspressif,
  SiPython,
  SiFigma,
  SiTypescript,
  SiExpress,
  SiGo,
} from "react-icons/si";

const cardBase =
  "rounded-2xl px-6 py-6 flex flex-col gap-4 h-full justify-between";

const iconPill =
  "flex flex-col items-center justify-center gap-2 rounded-xl bg-black/5 border border-black/5 backdrop-blur-sm p-4 w-full";

const iconClass = "text-3xl sm:text-4xl md:text-5xl";

const Skills = () => {
  return (
    <section className=" bg-[linear-gradient(to_bottom,#f1f11c33_10%,#f1f11c66_30%,#f0e491_70%)] flex flex-col justify-center w-full py-12 gap-4">
      <img src={header} className="w-full" />
      <div className="flex flex-row gap-4 items-center justify-center py-12">
        <img src={swork} className="size-16 sm:size-24" />
        <div className="text-center text-accent">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif">
            Chef&apos;s Skills
          </h1>
          <h1 className="text-lg sm:text-xl md:text-2xl font-light">
            Skillset over the years
          </h1>
        </div>
      </div>

{/* RESPONSIVE GRID */}
<div
  className="
    grid gap-6 px-4 sm:px-8 md:px-12 text-accent

    /* Mobile → 1 column */
    grid-cols-1

    /* Tablet → 2 columns */
    sm:grid-cols-2

    /* Desktop → 5×4 original layout */
    lg:grid-cols-5 lg:grid-rows-4
  "
>
  {/* FRONTEND */}
  <div className="bg-secondary rounded-2xl 
    col-span-1 sm:col-span-1 
    lg:col-span-2 lg:row-span-2"
  >
    <div className={cardBase}>
      <h2 className="text-secondary-foreground/90 text-lg sm:text-xl font-semibold">
        Frontend
      </h2>
      <p className="text-secondary-foreground/70 text-xs sm:text-sm">
        Interfaces and experiences for web users.
      </p>
      <div className="mt-2 grid grid-cols-3 sm:grid-cols-3 gap-4">
        <div className={iconPill}>
          <SiReact className={`${iconClass} text-accent-foreground`} />
          <span className="font-semibold text-secondary-foreground text-sm">React.js</span>
        </div>
        <div className={iconPill}>
          <SiTypescript className={`${iconClass} text-accent-foreground`} />
          <span className="font-semibold text-secondary-foreground text-sm">TypeScript</span>
        </div>
        <div className={iconPill}>
          <SiFigma className={`${iconClass} text-accent-foreground`} />
          <span className="font-semibold text-secondary-foreground text-sm">UI/UX</span>
        </div>
      </div>
    </div>
  </div>

  {/* BACKEND */}
  <div className="bg-primary rounded-2xl 
    col-span-1 sm:col-span-1
    lg:col-span-3 lg:row-span-2"
  >
    <div className={cardBase}>
      <h2 className="text-accent/90 text-lg sm:text-xl font-semibold">Backend</h2>
      <p className="text-accent/70 text-xs sm:text-sm">Logic, APIs, and data behind the scenes.</p>
      <div className="mt-2 grid grid-cols-4 gap-4">
        <div className={iconPill}>
          <SiExpress className={`${iconClass} text-accent`} />
          <span className="font-semibold text-accent text-sm">Express</span>
        </div>
        <div className={iconPill}>
          <SiGo className={`${iconClass} text-accent`} />
          <span className="font-semibold text-accent text-sm">Go</span>
        </div>
        <div className={iconPill}>
          <SiLaravel className={`${iconClass} text-accent`} />
          <span className="font-semibold text-accent text-sm">Laravel</span>
        </div>
        <div className={iconPill}>
          <SiMysql className={`${iconClass} text-accent`} />
          <span className="font-semibold text-accent text-sm">MySQL</span>
        </div>
      </div>
    </div>
  </div>

  {/* DEVOPS */}
  <div className="bg-primary rounded-2xl 
    col-span-1 sm:col-span-1
    lg:col-span-2 lg:row-span-2"
  >
    <div className={cardBase}>
      <h2 className="text-accent/90 text-lg sm:text-xl font-semibold">DevOps</h2>
      <p className="text-accent/70 text-xs sm:text-sm">Automation, deployment, and reliability.</p>
      <div className="mt-2 grid grid-cols-3 gap-4">
        <div className={iconPill}>
          <SiGithubactions className={`${iconClass} text-accent`} />
          <span className="font-semibold text-accent text-sm">GitHub Actions</span>
        </div>
        <div className={iconPill}>
          <SiDocker className={`${iconClass} text-accent`} />
          <span className="font-semibold text-accent text-sm">Docker</span>
        </div>
        <div className={iconPill}>
          <SiCloudflare className={`${iconClass} text-accent`} />
          <span className="font-semibold text-accent text-sm">Cloudflare</span>
        </div>
      </div>
    </div>
  </div>

  {/* ML / AI */}
  <div className="bg-primary rounded-2xl 
    col-span-1 sm:col-span-1
    lg:col-span-1 lg:row-span-2"
  >
    <div className={cardBase}>
      <h2 className="text-accent/90 text-lg sm:text-xl font-semibold">ML / AI</h2>
      <p className="text-accent/70 text-xs sm:text-sm">Intelligent systems & data models.</p>

      <div className="mt-2 grid grid-cols-1 gap-4">
        <div className={iconPill}>
          <SiPython className={`${iconClass} text-accent`} />
          <span className="font-semibold text-accent text-sm">Python</span>
        </div>
      </div>
    </div>
  </div>

  {/* IOT */}
  <div className="bg-secondary rounded-2xl 
    col-span-1 sm:col-span-2
    lg:col-span-2 lg:row-span-2"
  >
    <div className={cardBase}>
      <h2 className="text-secondary-foreground/90 text-lg sm:text-xl font-semibold">IoT</h2>
      <p className="text-secondary-foreground/70 text-xs sm:text-sm">Embedded systems and connected devices.</p>
      <div className="mt-2 grid grid-cols-2 gap-4">
        <div className={iconPill}>
          <SiArduino className={`${iconClass} text-accent-foreground`} />
          <span className="font-semibold text-secondary-foreground text-sm">Arduino</span>
        </div>
        <div className={iconPill}>
          <SiEspressif className={`${iconClass} text-accent-foreground`} />
          <span className="font-semibold text-secondary-foreground text-sm">ESP32</span>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Skills;
