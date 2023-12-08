import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Sidebar from "./components/sidebar/Sidebar"
import { Route, Routes } from "react-router-dom";
import Task from "./components/Task";
import Assignment from "./components/assignment/Assignment";
import Team from "./components/Team/Team";



function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
     
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/task" element={<Task />} />
        <Route path="/team" element={<Team />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
