import { BrowserRouter, Route,Routes } from "react-router-dom";



import LandingPage from "../Landings/LandingPage";
import Academics from "../AcademicsPage/Academics";
import Sports from "../SportsPage/Sports";
import AboutUs from "../AboutUsPage/AboutUs";
import Result from "../ResultsPage/Result";
import PreLogin from "../PreLoginPage/PreLogin";
//import Login from "../LoginCorrect/Login";
import StudentLogin from "../StudentLoginPage/StudentLogin";
import StaffLogin from "../StaffLoginPage/StaffLogin";
//import AdminLogin from "../AdminLoginPage/AdminLogin";
import EventsPage from "../Events/EventsPage";
import AdminLands from "../AdminLandingPage/AdminLands";
import UpdateEvents from "../UpdateEventsPage/UpdateEvents";
import TeacherPortfolio from "../TeacherPortfolioPage/TeacherPortfolio";
import PortfolioSearching from "../PortfolioSearch/PortfolioSearching";
import Login from "../LoginCorrect/Login";
import AdminLogin from "../AdminLoginPage/AdminLogin";
import StudentPortfolio from "../StudentPortfolioPage/StudentPortfolio";
import PortfolioStaffSearch from "../PortfolioForStaffPage/PortfolioStaffSeach";
import StaffLanding from "../StaffLandingPage/StaffLanding";

import Attendance from "../AttendancePage/Attendance";
import StaffSearchingStudent from "../StaffStudentPortfolio/StaffSearchingStudent";
import StaffStudentPortfolio from "../StaffStudentPortfolio/StaffStudentPortfolio";
import Language from "../LanguagePage/Language";
import UpdateUi from "../UpdateTasksPage/UpdateUi";
import Chat from "../LanguagePage/EnglishChat";
import RegistrationPage from "../BackendLoginPage/BackendLogin";
import SignUp from "../BackendLoginPage/BackendLogin";
import BackendLogin from "../BackendLoginPage/BackendLogin";
import UpdateTasks2 from "../UpdateTasksPage/UpdateTasks";
import UpdateTasks from "../UpdateTasksPage/UpdateTasks";
//import PreLogin from "../PreLoginPage/PreLogin";


const RoutingDom=()=>
{
    return(
        <div>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/LandingPage' element={<LandingPage/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/Login' element={<PreLogin/>}/>
                <Route path='/adminlogin' element={<AdminLogin/>}/>
                <Route path='/AdminLands' element={<AdminLands/>}/>
                <Route path='/stafflogin' element={<StaffLogin/>}/>
                 <Route path='/SignUp' element={<SignUp/>}/>

                
                 <Route path='/language' element={<Language/>}/>
                 <Route path='/chat/:language' element={<Chat/>}/>
                <Route path='/StudentLogin' element={<StudentLogin/>}/>

                <Route path='/StaffLanding' element={<StaffLanding/>}/>
                <Route path='/updatetasks' element={<UpdateUi/>}/>
                <Route path='/UpdateTasks/:className/:sectionName' element={<UpdateTasks/>}/>
                <Route path='/attendance' element={<Attendance/>}/>

                <Route path='/staffsearchingstudent' element={<StaffSearchingStudent/>}/>
                <Route path='/staffstudentportfolio/:id' element={<StaffStudentPortfolio/>}/>
'
                <Route path='/portfoliosearching' element={<PortfolioSearching/>}/>
                <Route path='/studentportfolio/:id' element={<StudentPortfolio/>}/>
                <Route path='/portfolioStaffSearch' element={<PortfolioStaffSearch/>}/>
                <Route path='/staffportfolio/:id' element={<TeacherPortfolio/>}/>
                <Route path='/updateevents' element={<UpdateEvents/>}/>
                
                <Route path='/AdminLandingPage' element={<AdminLands/>}/>
                <Route path='/Signup' element={<LandingPage/>}/>
                <Route path='/Academics' element={<Academics/>}/> 
                <Route path='/Sports' element={<Sports/>}/> 
                <Route path='/AboutUs' element={<AboutUs/>}/> 
                <Route path='/Result' element={<Result/>}/>
                <Route path='/Events' element={<EventsPage/>}/>
              </Routes>
            </BrowserRouter>
        </div>
    )
} 
export default RoutingDom;
