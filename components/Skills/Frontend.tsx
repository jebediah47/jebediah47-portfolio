/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";

const Frontend: FunctionComponent = () => {
  return (
    <div className="card w-96 backdrop-blur-xl shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-2xl">Frontend</h1>
        <div className="flex justify-center">
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML5"
            />
          </div>
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS3"
            />
          </div>
          <div className="regulate-scale">
            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="JavaScript"
            />
          </div>
        </div>
        <div className="divider">Frameworks</div>
        <div className="flex justify-center">
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="Tailwind CSS"
            />
          </div>
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white"
              alt="Svelte"
            />
          </div>
          <div className="regulate-scale">
            <img
              src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"
              alt="Vue"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82"
              alt="Nuxt"
            />
          </div>
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="React"
            />
          </div>
          <div className="regulate-scale">
            <img
              src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
              alt="Next.js"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
