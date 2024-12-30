import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Skiils from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Github from "./components/Github/Github";
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
}

export default App;
