import { NextPage } from "next";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200 bg-[url('https://cdn.discordapp.com/attachments/781475456913637407/1021311201659068436/desert_van_unsplash.webp')]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300">
            404 <br /> Page not found...
          </h1>
          <p className="py-6 text-xl">
            We are sorry but... We could not find what you were looking for 😭
          </p>
          <Link href="/">
            <button className="btn btn-primary">Back to homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
