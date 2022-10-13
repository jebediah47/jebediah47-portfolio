import ContinuousIntegration from "./ContinuousIntegration";
import { useInView } from "react-intersection-observer";
import { FunctionComponent, useEffect } from "react";
import BackendSkills from "./Backend";
import Frontend from "./Frontend";

const Skills: FunctionComponent = () => {
  const [ref, inView] = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      document
        .getElementById("skills_desktop")!
        .classList.add("btn", "btn-outline", "btn-primary");
      document
        .getElementById("skills_mobile_menu")!
        .classList.add("btn", "btn-outline", "btn-primary");
    } else {
      document
        .getElementById("skills_desktop")!
        .classList.remove("btn", "btn-outline", "btn-primary");
      document
        .getElementById("skills_mobile_menu")!
        .classList.remove("btn", "btn-outline", "btn-primary");
    }
  });

  return (
    <div className="py-8" id="skills__element" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Skills
          </h2>
          <p
            className="mt-2 text-3xl text-transparent bg-clip-text leading-8 font-extrabold tracking-tight sm:text-4xl"
            id="my--skill--set"
          >
            My skill set
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
            My current skill-set, every technology I know is shown below.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"></dl>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
          <div className="m-3 xl:m-8">
            <Frontend />
          </div>
          <div className="m-3 xl:m-8">
            <BackendSkills />
          </div>
          <div className="m-3 xl:m-8">
            <ContinuousIntegration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
