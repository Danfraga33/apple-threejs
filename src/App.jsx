import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";

const App = () => {
  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;

  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </main>
  );
};

export default Sentry.withProfiler(App);
