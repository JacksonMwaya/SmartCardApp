import React /*{ useState }*/ from "react";
import "./App.css";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
//import NavigationBar from "./Components/NavigationBar";
import StudentAdd from "./Screens/StudentAdd";
import ViewId from "./Screens/ViewId";
import ViewReport from "./Screens/ViewReport";
import SuperPage from "./Screens/SuperPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/StudentAdd" element={<StudentAdd />} />
        <Route path="/ViewId" element={<ViewId />} />
        <Route path="/ViewReport" element={<ViewReport />} />
        <Route path="/SuperPage" element={<SuperPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
