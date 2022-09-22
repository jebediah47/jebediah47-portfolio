import { FunctionComponent } from "react";
import Jebfetch from "./Jebfetch";
import Link from "next/link";

const Hero: FunctionComponent = () => {
  return (
    <div
      className="hero min-h-screen bg-[url('../public/images/coding_background_unsplash.webp')]"
      id="hero__element"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Jebfetch />
        <div>
          <h1
            className="text-7xl text-transparent bg-clip-text font-bold"
            id="hero--name"
          >
            Christian Llupo
          </h1>
          <p className="py-6 text-lg">
            👋 I{"'"}m Christian Llupo aka jeb47, a high-school student &
            full-stack developer, <br />I specialize in the development of web
            applications.
          </p>
          <button className="btn btn-primary">Projects</button>
          <label
            htmlFor="github-redirect-modal"
            className="btn modal-button ml-3"
          >
            My GitHub
          </label>
          <input
            type="checkbox"
            id="github-redirect-modal"
            className="modal-toggle"
          />
          <label
            htmlFor="github-redirect-modal"
            className="modal cursor-pointer"
          >
            <label className="modal-box relative" htmlFor="">
              <h3 className="text-lg font-bold">
                ⚠️ You are about to be redirected!
              </h3>
              <p className="py-4">
                You are going to be redirected to my GitHub profile click the
                button to be redirected.
              </p>
              <div className="modal-action">
                <Link href="https://github.com/jebediah47">
                  <button className="btn">Sure Redirect Me</button>
                </Link>
              </div>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Hero;
