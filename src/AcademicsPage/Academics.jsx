
import React from 'react';
import Navbar from '../NavbarFolder/Navbar';
import './Academics.css';
import { Link } from 'react-router-dom';


const Academics = () => {
   
   
    return (
        <div>
            <Navbar />
            <div className="card-container">
                {/* First Line - Three Cards */}
                <div className="card" style={{ backgroundColor: 'white' }}>
                    <img src="https://miro.medium.com/v2/resize:fit:1358/1*ejmFTyhp1qtcgDL8BFGftA.jpeg" alt="Loading" className="img-size" />
                    <div className="button-container">
                       
                        <Link to="/view-tasks/Tamil/Section A">
                        <button className="span-btn">View Daily Tasks</button>
                        </Link>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: 'white' }}>
                    <img src="https://thumbs.dreamstime.com/b/round-english-subject-concept-black-chalkboard-vector-linear-round-concept-english-subject-school-lesson-children-133564272.jpg" alt="Loading" className="img-size" />
                    <div className="button-container">
                       
                        <Link to="/view-tasks/English/Section A">
                         <button className="span-btn">View Daily Tasks</button>
                      </Link>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: 'white' }}>
                    <img src="https://cdn-attachments.timesofmalta.com/161720d2d73196098f3bc7896777216ff157c89d-1651561144-5c8764f4-1920x1280.jpg" alt="Loading" className="img-size" />
                    <div className="button-container">
                       
                        <Link to="/view-tasks/Maths/Section B">
                          <button className="span-btn">View Daily Tasks</button>
                         </Link>
                    </div>
                </div>

                {/* Second Line - Two Cards */}
                <div className="card" style={{ backgroundColor: 'white', marginTop: '20px',marginLeft:"210px",marginBottom:"50px"}}>
                    <img src="https://images-dom.prod.aws.idp-connect.com/commimg/myhotcourses/blog/post/myhc_78987.jpg" alt="Loading" className="img-size" />
                    <div className="button-container">
                       
                        <Link to="/view-tasks/Science/Section B">
                          <button className="span-btn">View Daily Tasks</button>
                       </Link>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: 'white', marginTop: '20px' ,marginRight:"180px",marginBottom:"50px"}}>
                    <img src="https://socialscienceinsights.com/wp-content/uploads/2021/06/what-is-social-science.jpg" alt="Loading" className="img-size" />
                    <div className="button-container">
                       
                        <Link to="/view-tasks/Social science/Section C">
                          <button className="span-btn">View Daily Tasks</button>
                          </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Academics;
