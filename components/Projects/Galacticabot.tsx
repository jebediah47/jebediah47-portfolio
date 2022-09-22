import { FunctionComponent } from "react";
import Link from "next/link";

const Galacticabot: FunctionComponent = () => {
  return (
    <div className="card card-compact w-96 bg-slate-700 shadow-xl">
      <div className="card-body mx-3">
        <h2 className="card-title">galactica-bot</h2>
        <p className="text-base">
          An open-source Discord bot made with Typescript using the Discord.js
          v13 library.
        </p>
        <div className="divider">Programming languages</div>
        <div className="flex flex-row justify-center items-center mb-5">
          <h1>TypeScript</h1>
          <progress
            className="progress progress-info w-56 ml-2"
            value="95"
            max="100"
          ></progress>
        </div>
        <div className="card-actions justify-end">
          <Link href="https://github.com/jebediah47/galactica-bot">
            <button className="btn btn-primary btn-outline">GitHub Repo</button>
          </Link>
          <Link href="https://galacticabot.vercel.app">
            <button className="btn">Documentation</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Galacticabot;
