import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Home-Page-Components/Nav-Bar/NavBar";
import Home from "./Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery"
import ProjectsPage from "./Components/Project-Page/ProjectsPage"
import AdminAuth from "./Components/Admin-Components/Admin-Auth_page/AdminAuth";
import {toast,ToastContainer} from "react-toastify"
import AdminDashBoard from "./Components/Admin-Components/Admin-DashBoard-Page/AdminDashBoard";
import Footer from "./Components/Footer/Footer";
import WebDevelopement from "./Components/Pages/WebDevelopment";
import MachineLearning from "./Components/Pages/MachineLearning";
import AboutUs from "./Components/About-Us/AboutUs";
import AddImages from "./Components/Admin-Components/Add-images-Page/AddImages";
import AddProjects from "./Components/Admin-Components/Add-Projects-page/AddProjects";
import AboutUs_Update from "./Components/Admin-Components/Abouts-Update/AboutUs_Update";
import ECE_Dept from "./Components/ECE-Dept/ECE_Dept";
import Testmonials from "./Components/Home-Page-Components/TestMonials/Testmonials"
import AboutDept from "./Components/ECE-Dept/About-Dept/AboutDept";
import FacultyProfile from "./Components/ECE-Dept/Faculty-Profiles/FacultyProfile";
import Labs from "./Components/ECE-Dept/Labs/Labs"

function App() {
  return (
    <div className="App">
      <div className="landingBackGround">
        <BrowserRouter>
       <ToastContainer/>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/gallery"  element={<Gallery />}></Route>
            <Route path="/projects"  element={<ProjectsPage />}></Route>
            <Route path="/testmonials"  element={<Testmonials />}></Route>
            <Route path="/about-us"  element={<AboutUs />}></Route>
            <Route path="/admin-auth"  element={<AdminAuth />}></Route>
            <Route path="/admin-dash-board"  element={<AdminDashBoard />}></Route>
            <Route path="/admin-update-about-us"  element={<AboutUs_Update />}></Route>
            <Route path="/admin-Add-Project"  element={<AddProjects />}></Route>
            <Route path="/admin-add-gallery-img"  element={<AddImages />}></Route>
            <Route path="/domain-web-development"  element={<WebDevelopement />}></Route>
            <Route path="/domain-machine-learning"  element={<MachineLearning />}></Route>
            <Route path="/domain-machine-learning"  element={<MachineLearning />}></Route>
          
            <Route path="/ece-dept"  element={<ECE_Dept />}>
            <Route path="about-ece-dept" exact element={<AboutDept />}></Route>
            <Route path="labs"  element={<Labs />}></Route>
            <Route path="faculty-profiles"  element={<FacultyProfile />}></Route>
            </Route>


            

          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;