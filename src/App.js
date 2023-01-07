import "./App.css"
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skiils from "./components/Skills"
function App() {
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Skiils />
      </div>
    );
  };

export default App;


