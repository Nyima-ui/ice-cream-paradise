import "./App.css";
import AboutUs from "./components/AboutUs";
import BusinessHoursBanner from "./components/BusinessHoursBanner";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LocatedAt from "./components/LocatedAt";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Carousel />
      <BusinessHoursBanner />
      <LocatedAt />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
