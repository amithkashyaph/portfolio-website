import { createContext, useContext, useState } from "react";

const SidenavContext = createContext();

const SidenavContextProvider = ({ children }) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    console.log("clicked : ", isSidenavOpen);
    setIsSidenavOpen((open) => !open);
  };

  return (
    <SidenavContext.Provider value={{ isSidenavOpen, toggleSidenav }}>
      {children}
    </SidenavContext.Provider>
  );
};

const useSidenavState = () => {
  const sidenavContext = useContext(SidenavContext);
  if (sidenavContext === undefined) {
    throw new Error("value is used outside of context");
  }

  return sidenavContext;
};

export { SidenavContextProvider, useSidenavState };
