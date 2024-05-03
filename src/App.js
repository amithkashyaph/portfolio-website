import "./App.css";
import Sidebar from "./components/Sidebar";
import Sidenav from "./components/Sidenav";
import { SidenavContextProvider } from "./context/SidenavContext";

function App() {
  return (
    <>
      <SidenavContextProvider>
        <Sidebar />
        <Sidenav />
      </SidenavContextProvider>
    </>
  );
}

export default App;
