import HomeButton from "./components/HomeButton";
import Window from "./components/Window";
import About from "./views/About";
import Art from "./views/Art";

const App = () => {
  return (
    <div className="scaling-container">
      <div className="screen">
        <HomeButton title={"about me"} url={"/icons/text_editor.png"} />
        <HomeButton title={"code"} url={"/icons/github.png"} />
        <HomeButton title={"art"} url={"/icons/paint_alt.png"} />
        <Window title={"about-me.png"} view={<About />} width={"20%"} />
        <Window title={"my art"} view={<Art />} width={"80%"} />
      </div>
    </div>
  );
};

export default App;
