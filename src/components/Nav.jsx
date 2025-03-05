import HomeButton from "./HomeButton";
import { useWindow } from "../context/WindowContext";

const Nav = () => {
  const { windowsArr, toggleWindow } = useWindow();

  return (
    <div className="Nav">
      {windowsArr.map((window) => (
        <HomeButton
          key={window.name}
          title={window.navTitle}
          url={window.navIcon}
          onToggle={() => toggleWindow(window.name)}
        />
      ))}
    </div>
  );
};

export default Nav;
