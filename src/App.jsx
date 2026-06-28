import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";

function App() { 
  return (
  <>
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Education />
  <Experience />
  <Achievements />
  <Certificates/>
  <Projects />
  <Contact />
  <Footer />
</>
  );
}

export default App;