import "./App.css";
import Sidebar from "./components/Sidebar";
import Sidenav from "./components/Sidenav";
import { SidenavContextProvider } from "./context/SidenavContext";
import Home from "./pages/Home";
import WorkExperience from "./pages/WorkExperience";

function App() {
  return (
    <>
      <SidenavContextProvider>
        <Sidebar />
        <Sidenav />
        <Home />
        <WorkExperience />
      </SidenavContextProvider>
    </>
  );
}

export default App;
