import Nav from "./components/Nav";
import About from "./views/About";
import Art from "./views/Art";
import { useWindow } from "./context/WindowContext.jsx";
import Window from "./components/Window";

const App = () => {
  const { windows, toggleWindow, closeWindow } = useWindow();

  return (
    <div className="scaling-container">
      <div className="screen">
        <Nav />
        {windows.about && (
          <Window
            title={"about-me.png"}
            view={<About />}
            width={"80%"}
            onClose={() => {
              closeWindow("about");
            }}
          />
        )}
        {windows.art && (
          <Window
            title={"my art"}
            view={<Art />}
            width={"80%"}
            onClose={() => {
              closeWindow("art");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
