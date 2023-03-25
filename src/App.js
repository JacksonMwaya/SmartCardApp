import React /*{ useState }*/ from "react";
import "./App.css";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
//import NavigationBar from "./Components/NavigationBar";
import StudentAdd from "./Screens/StudentAdd";
import ViewId from "./Screens/ViewId";
import ViewReport from "./Screens/ViewReport";
import SuperPage from "./Screens/SuperPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBar />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/StudentAdd" element={<StudentAdd />} />
        <Route path="/ViewId" element={<ViewId />} />
        <Route path="/ViewReport" element={<ViewReport />} />
        <Route path="/SuperPage" element={<SuperPage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
