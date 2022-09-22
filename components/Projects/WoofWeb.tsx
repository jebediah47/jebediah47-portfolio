import { FunctionComponent } from "react";
import Link from "next/link";

const WoofWeb: FunctionComponent = () => {
  return (
    <div className="card card-compact w-96 bg-slate-700 shadow-xl">
      <div className="card-body mx-3">
        <h2 className="card-title">woof-web</h2>
        <p className="text-base">
          The replacement of the old website of the WoofOS Linux™️ distribution.
        </p>
        <div className="divider">Programming languages</div>
        <div className="flex flex-row justify-center items-center">
          <h1>Svelte</h1>
          <progress
            className="progress progress-error w-56 ml-9"
            value="85"
            max="100"
          ></progress>
        </div>
        <div className="flex flex-row justify-center items-center mb-5">
          <h1>JavaScript</h1>
          <progress
            className="progress progress-warning w-56 ml-2"
            value="15"
            max="100"
          ></progress>
        </div>
        <div className="card-actions justify-end">
          <Link href="https://github.com/jebediah47/woof-web">
            <button className="btn btn-primary btn-outline">GitHub Repo</button>
          </Link>
          <Link href="https://woof-os.github.io">
            <button className="btn">Website</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WoofWeb;
