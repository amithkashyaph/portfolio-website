import "./App.css";
import Sidebar from "./components/Sidebar";
import Sidenav from "./components/Sidenav";
import { SidenavContextProvider } from "./context/SidenavContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <SidenavContextProvider>
        <Sidebar />
        <Sidenav />
        <Home />
      </SidenavContextProvider>
    </>
  );
}

export default App;
