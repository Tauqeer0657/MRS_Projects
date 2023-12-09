import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";

// import MainRoutes from "./components/routes/MainRoutes";
import AuthenticationRoutes from "./components/routes/AuthenticationRoutes";
import Team from "./components/Team/Team";
import Home from "./components/Home";
import Assignment from "./components/assignment/Assignment";
import Task from "./components/Task";


function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/auth/login";
  const isRegistration = location.pathname === "/auth/registration";
  const shouldRenderHeaderAndSidebar = !isLoginPage && !isRegistration;

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
<<<<<<< HEAD
    <div>
      {shouldRenderHeaderAndSidebar && (
        <div className="grid-container">
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar
            openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
          />
          <Routes>
            {/* Main Routes */}
            {/* <Route path="/" element={<MainRoutes />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/task" element={<Task />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      )}

      
      <Routes>
        <Route path="/auth/*" element={<AuthenticationRoutes />} />
=======
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
        
        
>>>>>>> c769363291aad39896cd4b84af3b770132f48a68
      </Routes>
    </div>
  );
}
export default App;
