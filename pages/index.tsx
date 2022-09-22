import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";

const Home: NextPage = () => {
  useEffect(() => {
    let buymeacoffee = document.createElement("script");
    buymeacoffee.type = "text/javascript";
    buymeacoffee.setAttribute("data-name", "BMC-Widget");
    buymeacoffee.src =
      "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    buymeacoffee.setAttribute("data-id", "jebediah47");
    buymeacoffee.setAttribute(
      "data-description",
      "Support me on Buy me a coffee!"
    );
    buymeacoffee.setAttribute("data-message", "");
    buymeacoffee.setAttribute("data-color", "#5F7FFF");
    buymeacoffee.setAttribute("data-position", "Right");
    buymeacoffee.setAttribute("data-x_margin", "18");
    buymeacoffee.setAttribute("data-y_margin", "18");
    buymeacoffee.async = true;
    buymeacoffee.onload = function () {
      let coffee = new Event("DOMContentLoaded");
      window.dispatchEvent(coffee);
    };
    document.body.appendChild(buymeacoffee);
  });

  return (
    <>
      <Head>
        <title>Christian Llupo (jebediah47) portfolio</title>
        <meta
          name="description"
          content="👋 I'm Christian Llupo aka jeb47, a high-school student & full-stack developer, I specialize in the development of web-apps."
        />
        <meta
          name="keywords"
          content="jebediah47, portfolio, website, GitHub, Vercel, React, Next.js"
        />
        <meta name="author" content="Christian Llupo" />
      </Head>
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default Home;
