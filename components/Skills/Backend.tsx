/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";

const BackendSkills: FunctionComponent = () => {
  return (
    <div className="card w-96 backdrop-blur-xl shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-2xl">Backend</h1>
        <div className="flex justify-center">
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
              alt="Node"
            />
          </div>
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
            />
          </div>
          <div className="regulate-scale">
            <img
              src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
              alt="Python"
            />
          </div>
        </div>
        <div className="divider">Libraries</div>
        <div className="flex justify-center">
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
              alt="Prisma"
            />
          </div>
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
              alt="express.js"
            />
          </div>
          <div className="regulate-scale">
            <img
              src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"
              alt="Fast API"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="hspace-7">
            <img
              src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"
              alt="Nest.js"
            />
          </div>
          <div className="regulate-scale">
            <img
              src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"
              alt="socket.io"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendSkills;
