import TopBar from "./components/TopBar";
import About from "./views/About";
import Window from "./components/Window";
import HomeButton from "./components/HomeButton";
import Art from "./views/aRT.JSX";

// function App() {
//   return (
//     <div className="app">
//       <div className="screen relative overflow-hidden">
//         <TopBar />

//         <HomeButton title={"about me"} url={"/icons/text_editor.png"} />
//         <HomeButton title={"code"} url={"/icons/github.png"} />
//         <HomeButton title={"art"} url={"/icons/paint_alt.png"} />
//         {/* <Window title={"about-me.png"} view={<About />} width={"20%"} />
//         <Window title={"my art"} view={<Art />} width={"80%"} /> */}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="scaling-container">
      <div className="screen">
        <HomeButton title={"about me"} url={"/icons/text_editor.png"} />
        <HomeButton title={"code"} url={"/icons/github.png"} />
        <HomeButton title={"art"} url={"/icons/paint_alt.png"} />
        {/* <h1 className="absolute top-[20%] left-[50%] -translate-x-1/2">
          Scalable Text
        </h1>
        <button className="absolute bottom-[10%] left-[50%] -translate-x-1/2 px-4 py-2 bg-gray-200 border border-black text-[2vw]">
          Click Me
        </button> */}
      </div>
    </div>
  );
};

export default App;
