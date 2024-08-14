import { BrowserRouter, Route, Routes } from "react-router-dom";



import AboutUs from "../AboutUsPage/AboutUs";
import Academics from "../AcademicsPage/Academics";
import LandingPage from "../Landings/LandingPage";
import Result from "../ResultsPage/Result";
import Sports from "../SportsPage/Sports";
//import Login from "../LoginCorrect/Login";
import StaffLogin from "../StaffLoginPage/StaffLogin";
import StudentLogin from "../StudentLoginPage/StudentLogin";
//import AdminLogin from "../AdminLoginPage/AdminLogin";
import AdminLands from "../AdminLandingPage/AdminLands";
import AdminLogin from "../AdminLoginPage/AdminLogin";
import EventsPage from "../Events/EventsPage";
import PortfolioStaffSearch from "../PortfolioForStaffPage/PortfolioStaffSeach";
import PortfolioSearching from "../PortfolioSearch/PortfolioSearching";
import StaffLanding from "../StaffLandingPage/StaffLanding";
import StudentPortfolio from "../StudentPortfolioPage/StudentPortfolio";
import TeacherPortfolio from "../TeacherPortfolioPage/TeacherPortfolio";
import UpdateEvents from "../UpdateEventsPage/UpdateEvents";

import ViewTasks from "../AcademicsPage/ViewTasks";
import Attendance from "../AttendancePage/Attendance";
import SignUp from "../BackendLoginPage/BackendLogin";
import Chat from "../LanguagePage/EnglishChat";
import Language from "../LanguagePage/Language";
import StaffSearchingStudent from "../StaffStudentPortfolio/StaffSearchingStudent";
import StaffStudentPortfolio from "../StaffStudentPortfolio/StaffStudentPortfolio";
import UpdateTasks from "../UpdateTasksPage/UpdateTasks";
import UpdateUi from "../UpdateTasksPage/UpdateUi";
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
                <Route path='/Login' element={<StudentLogin/>}/>
                <Route path='/adminlogin' element={<AdminLogin/>}/>
                <Route path='/AdminLands' element={<AdminLands/>}/>
                <Route path='/stafflogin' element={<StaffLogin/>}/>
                 <Route path='/SignUp' element={<SignUp/>}/>
                   <Route path="/AdminLands" element={<AdminLands/>}/>
                   <Route path="/StaffLanding" element={<StaffLanding/>}/>
                   <Route path="/LandingPage" element={<LandingPage/>}/>
                
                 <Route path='/language' element={<Language/>}/>
                 <Route path='/chat/:language' element={<Chat/>}/>
                <Route path='/StudentLogin' element={<StudentLogin/>}/>

                <Route path='/StaffLanding' element={<StaffLanding/>}/>
                <Route path='/updatetasks' element={<UpdateUi/>}/>
                <Route path='/UpdateTasks/:className/:sectionName' element={<UpdateTasks/>}/>
                <Route path="/view-tasks/:subject/:section" element={<ViewTasks />} />
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
