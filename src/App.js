import "./App.css";
import Hero from "./components/hero/heroSection";
import Skills from "./components/Skills/skills";
import Project from "./components/Projects/project";
import Footer from "./components/Footer/footer";
import Contact from "./components/Contact/contact";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </Router>
    </>
  );
};

export default App;
