import React from 'react'
import Navbar from '../NavbarFolder/Navbar'; 
import './Academics.css';
const Academics = () => { 
    
  return(
    <div>
       <Navbar /> 
         <div>
         <div className="card-container">
          <div className="card-subject" style={{height:'450px',backgroundColor:"white",transition:"box-shadow 0.3s ease"}}>
           <img src="https://miro.medium.com/v2/resize:fit:1358/1*ejmFTyhp1qtcgDL8BFGftA.jpeg" alt="Loading" className='img-size'/> 
            
           <div className="button-group">
      <button className="btn primary-btn">Tamil</button>
      <button className="btn secondary-btn">View Daily Tasks</button>
    </div>
          
           </div>
        <div style={{height:"480px",width:"430px",backgroundColor:"white"}}>
           <img src="https://thumbs.dreamstime.com/b/round-english-subject-concept-black-chalkboard-vector-linear-round-concept-english-subject-school-lesson-children-133564272.jpg" alt="Loading" className='img-size'/> 
            <button className='span-btn' style={{backgroundColor:'#E75480',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',borderBottomRightRadius:'20px',borderBottomLeftRadius:'20px',marginLeft:'100px',marginRight:'50px'}}>English</button>  
           <button className="btn secondary-btn">View Daily Tasks</button>
        </div>

        <div className="card" style={{height:'450px',width:"430px"}}>
           <img src="https://cdn-attachments.timesofmalta.com/161720d2d73196098f3bc7896777216ff157c89d-1651561144-5c8764f4-1920x1280.jpg" alt="Loading" className='img-size'/> 
        
           <button className='span-btn' style={{backgroundColor:'#E75480',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',borderBottomRightRadius:'20px',borderBottomLeftRadius:'20px',marginLeft:'100px',marginRight:'50px'}}>Maths</button> 
          <button className="btn secondary-btn">View Daily Tasks</button> 
        </div>

        </div>
        <div className='card-container'>
          <div className='card-subject' style={{marginLeft:'150px',height:'450px',backgroundColor:"white"}}>
          
          <img src="https://images-dom.prod.aws.idp-connect.com/commimg/myhotcourses/blog/post/myhc_78987.jpg" alt="Loading" className='img-size'/> 
        
        <button className='span-btn'>Science</button>

          </div>

          <div className='card' style={{MarginRight:'150px',height:'450px',width:"430px"}}>
          <img src="https://socialscienceinsights.com/wp-content/uploads/2021/06/what-is-social-science.jpg" alt="Loading" className='img-size'/> 
        
        <button className='span-btn'style={{backgroundColor:'#E75480',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',borderBottomRightRadius:'20px',borderBottomLeftRadius:'20px',marginLeft:'100px',marginRight:'50px'}}>Social Science</button>

          </div>
          </div>

        </div>
        </div> 
   
  )
}

export default Academics
