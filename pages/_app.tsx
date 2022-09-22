import "../styles/projects_background_blob.css";
import "../styles/skills_background_blob.css";
import "../styles/projects_animation.css";
import type { AppProps } from "next/app";
import "../styles/skills_animation.css";
import "../styles/hero_animation.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
