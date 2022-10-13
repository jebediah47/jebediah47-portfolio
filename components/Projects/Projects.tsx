import { useInView } from "react-intersection-observer";
import { FunctionComponent, useEffect } from "react";
import JebediahPortfolio from "./JebediahProtfolio";
import Galacticabot from "./Galacticabot";
import WoofWeb from "./WoofWeb";

const Projects: FunctionComponent = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      document
        .getElementById("projects_desktop")!
        .classList.add("btn", "btn-outline", "btn-primary");
      document
        .getElementById("projects_mobile_menu")!
        .classList.add("btn-active");
    } else {
      document
        .getElementById("projects_desktop")!
        .classList.remove("btn", "btn-outline", "btn-primary");
      document
        .getElementById("projects_mobile_menu")!
        .classList.remove("btn-active");
    }
  });

  return (
    <div className="py-5" id="projects__element" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-amber-400 font-semibold tracking-wide uppercase">
            Projects
          </h2>
          <p
            className="mt-2 text-3xl text-transparent bg-clip-text leading-8 font-extrabold tracking-tight sm:text-4xl"
            id="my--projects"
          >
            My personal projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
            Some projects made completely by me shown in the cards below.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"></dl>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
          <div className="m-3 xl:m-8">
            <WoofWeb />
          </div>
          <div className="m-3 xl:m-8">
            <Galacticabot />
          </div>
          <div className="m-3 xl:m-8">
            <JebediahPortfolio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
