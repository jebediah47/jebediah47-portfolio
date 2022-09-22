/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";

const ContinuousIntegration: FunctionComponent = () => {
  return (
    <div className="card w-96 backdrop-blur-xl shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-2xl">Continuous integration</h1>
        <div className="flex justify-center">
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white"
              alt="GitHub actions"
            />
          </div>
          <div className="regulate-scale">
            <img
              src="https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white"
              alt="Circle CI"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"
              alt="Bash"
            />
          </div>
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
              alt="Linux"
            />
          </div>
          <div className="regulate-scale">
            <img
              src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
              alt="Docker"
            />
          </div>
        </div>
        <div className="divider">Linux distros</div>
        <div className="flex justify-center">
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"
              alt="Ubuntu"
            />
          </div>
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white"
              alt="Debian"
            />
          </div>
          <div className="regulate-space">
            <img
              src="https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white"
              alt="Fedora"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinuousIntegration;
