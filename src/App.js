import "./App.css"
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skiils from "./components/Skills"
import Project from "./components/Project"
import Contact from "./components/Contact";
import Github from "./components/Github";
function App() {
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Skiils />
        <Project />
        <Github />
        <Contact />
      </div>
    );
  };

export default App;


