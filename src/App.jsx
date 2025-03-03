import Nav from "./components/Nav";
import Window from "./components/Window";
import About from "./views/About";
import Art from "./views/Art";
import { useState } from "react";

const App = () => {
  const [windowState, setWindowState] = useState({
    about: false,
    art: false,
    code: false,
  });

  // navigation button toggles
  const onToggle = (window) => {
    setWindowState((prevState) => ({
      ...prevState,
      [window]: !prevState[window], // toggle the state
    }));
  };

  return (
    <div className="scaling-container">
      <div className="screen">
        <Nav onToggle={onToggle} />
        {windowState.about && (
          <Window title={"about-me.png"} view={<About />} width={"20%"} />
        )}
        {windowState.art && (
          <Window title={"my art"} view={<Art />} width={"80%"} />
        )}
      </div>
    </div>
  );
};

export default App;
