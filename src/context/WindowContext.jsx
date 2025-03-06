import { useState, createContext, useContext, useEffect } from "react";

// create context
const WindowContext = createContext();

// window provider component
export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState({
    about: false,
    code: false,
    art: false,
  });
  const [scale, setScale] = useState(1);

  // list of windows
  const windowsArr = [
    {
      name: "about",
      navTitle: "about",
      navIcon: "/icons/text_editor.png",
    },
    {
      name: "code",
      navTitle: "code",
      navIcon: "/icons/github.png",
    },
    {
      name: "art",
      navTitle: "art",
      navIcon: "/icons/paint_alt.png",
    },
  ];

  const toggleWindow = (window) => {
    setWindows((prevState) => ({
      ...prevState,
      [window]: !prevState[window],
    }));
  };

  const closeWindow = (window) => {
    toggleWindow(window);
  };

  return (
    <WindowContext.Provider
      value={{ windows, windowsArr, toggleWindow, closeWindow }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindow = () => {
  return useContext(WindowContext);
};
