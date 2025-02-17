import './App.css';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Showcase from "./sections/showcase/showcase";

function App() {
  return (
    <>
      <Hero />
      {/* <FloatingBubbles /> ✅ Adds floating bubbles */}
      <Showcase />   
      <Projects />
      <Skills />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;