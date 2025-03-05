import { useState, createContext, useContext } from "react";

// create context
const WindowContext = createContext();

// window provider component
export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState({
    about: false,
    code: false,
    art: false,
  });

  // list of windows
  const windowsArr = [
    {
      name: "about",
      navTitle: "about",
      navIcon: "/icons/text_editor.png",
      pcWidth: "20%",
      mobileWidth: "40%",
    },
    {
      name: "code",
      navTitle: "code",
      navIcon: "/icons/github.png",
      pcWidth: "20%",
      mobileWidth: "40%",
    },
    {
      name: "art",
      navTitle: "art",
      navIcon: "/icons/paint_alt.png",
      pcWidth: "20%",
      mobileWidth: "40%",
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
