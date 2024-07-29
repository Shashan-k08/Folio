import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <hr />
      <About /><hr/>
      <Skill/><hr/>
      <Projects/>
    </div>
  );
}

export default App;
