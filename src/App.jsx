import Nav from "./components/Nav";
import CustomCursor from "./components/CustomCursor";
import SectionWalkCat from "./components/SectionWalkCat";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <SectionWalkCat />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
