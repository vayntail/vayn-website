import TopBar from "./components/TopBar";
import About from "./views/About";
import Window from "./components/Window";
import HomeButton from "./components/HomeButton";

function App() {
  return (
    <div className="app">
      <div className="screen relative overflow-hidden">
        <TopBar />
        <HomeButton title={"about me"} url={"/icons/text_editor.png"}/>
        <HomeButton title={"code"} url={"/icons/github.png"}/>
        <HomeButton title={"art"} url={"/icons/paint_alt.png"}/>
        <Window title={"about-me.png"} view={<About/>}/>
      </div>
    </div>
  );
}

export default App;
