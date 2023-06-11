import React from "react";
import "./App.css";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import StudentAdd from "./Screens/StudentAdd";
import ViewId from "./Screens/ViewId";
import ViewReport from "./Screens/ViewReport";
import UpdatePage from "./Screens/UpdatePage";
import Home2 from "./Screens/Teachers/Home2";
import ViewId2 from "./Screens/Teachers/ViewId2";
import ViewReport2 from "./Screens/Teachers/ViewReport2";
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
        <Route path="/UpdatePage" element={<UpdatePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Teachers/Home2" element={<Home2 />} />
        <Route path="/Teachers/ViewId2" element={<ViewId2 />} />
        <Route path="/Teachers/ViewReport2" element={<ViewReport2 />} />
      </Routes>
    </Router>
  );
}

export default App;
