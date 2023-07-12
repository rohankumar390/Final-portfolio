import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import Project from "./components/Projects/Project";
import Contact from "./components/contact/Contact";
import Skills from "./components/Skills/Skills";
import Experince from "./components/experince/Experince";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Resume />
      <Skills />
      <Project />
      <Experince />
      <Contact />
    </div>
  );
}

export default App;
