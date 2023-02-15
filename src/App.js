import "./App.css";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import "./index.css";
import About from "./components/About";
import Skills from "./components/Skills";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { Socials } from "./components/Socials";

function App() {
  console.log(process.env.REACT_APP_GITHUB_KEY);
  console.log(process.env.REACT_LO);

  return (
    <div className="App w-full relative">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
      <Socials></Socials>
    </div>
  );
}

export default App;
