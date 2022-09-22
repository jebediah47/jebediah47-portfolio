import { FunctionComponent } from "react";
import Link from "next/link";

const JebediahPortfolio: FunctionComponent = () => {
  return (
    <div className="card card-compact w-96 bg-slate-700 shadow-xl">
      <div className="card-body mx-3">
        <h2 className="card-title">jebediah47.github.io</h2>
        <p className="text-base">
          The website you are in right now... And my personal portfolio!
        </p>
        <div className="divider">Programming languages</div>
        <div className="flex flex-row justify-center items-center">
          <h1>React TS</h1>
          <progress
            className="progress progress-info w-56 ml-3"
            value="95"
            max="100"
          ></progress>
        </div>
        <div className="flex flex-row justify-center items-center mb-5">
          <h1>CSS</h1>
          <progress
            className="progress progress-secondary w-56 ml-11"
            value="15"
            max="100"
          ></progress>
        </div>
        <div className="card-actions justify-end">
          <Link href="https://github.com/jebediah47/jebediah47.github.io">
            <button className="btn btn-primary btn-outline">GitHub Repo</button>
          </Link>
          <Link href="https://woof-os.github.io">
            <button className="btn">Support me!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JebediahPortfolio;
