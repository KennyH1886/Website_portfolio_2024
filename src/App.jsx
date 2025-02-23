import './App.css';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Showcase from "./sections/showcase/showcase";
import Education from './sections/Education/Education.jsx';
import Articles from './sections/Articles/Articles.jsx';



function App() {
  return (
    <>
      <Hero />
      {/* <FloatingBubbles /> ✅ Adds floating bubbles */}
      <Showcase />   
      <Projects />
      <Articles />
      <Education />
      <Skills />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;