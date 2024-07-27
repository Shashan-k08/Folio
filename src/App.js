import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <hr />
      <About /><hr/>
      <Skill/>
    </div>
  );
}

export default App;
