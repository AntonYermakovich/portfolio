import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Service from "./components/Service/Service";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import Banner from "./components/Banner/Banner";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function App() {
  const [showArrow, setShowArrow] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => setShowArrow(window.scrollY > 400 ? true : false))
  }, [])

  return (
    <>
      <Header />

      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Service />
        <Portfolio />
        <Banner />
        <Contacts />
      </main>

      <Footer />

      <Link to="home" duration={100} smooth={true} spy={true} className={`scrollup ${showArrow ? "show-scroll" : ""}`} id="scroll-up">
        <FaArrowUp className="scrollup__icon"/>
      </Link>
    </>
  );
}

export default App;
