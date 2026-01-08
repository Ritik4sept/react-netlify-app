import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Purpose from "./sections/Purpose";
import Three from "./sections/Three-Layered";
import Training from "./sections/Training";
import Learn from "./sections/Learn";
import Timeline from "./sections/Timeline";
import Leadership from "./sections/Leadership";
import Launch from "./sections/Launch";
import Measurement from "./sections/Measurement";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Purpose />
      <Three />
      <Training />
      <Learn />
      <Timeline />
      <Leadership />
      <Launch />
      <Measurement />
      <Footer />
    </>
  );
};

export default App;
