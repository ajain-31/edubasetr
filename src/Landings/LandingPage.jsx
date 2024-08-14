import React from 'react';
import Navbar from '../NavbarFolder/Navbar';


import Footer from '../FooterPage/Footer';
import './LandingPage.css';



const LandingPage = () => {
  return ( 
    <div style={{height:"100vh"}}>
      <Navbar />

       
       <div>
        <h1 style={{ textAlign: 'center', color: '#e75450', fontFamily: 'Georgia',marginTop:'30px' }}>Hi Students!!!</h1>
       <h1 style={{ textAlign: 'center', color: '#e75450', fontFamily: 'Georgia',marginTop:'30px' }}>A Warm Welcome By EduBasedTN</h1>

       <img src="https://thecsrjournal.in/wp-content/uploads/2024/03/Government-school.jpg" alt="Loading" className='landingImage'/> 
       </div>
       <div>
       <div className="card-container">
        <div className="card-landing">
        <img src="https://www.pngkey.com/png/detail/400-4003680_registration-for-under-graduate-student-icon-png.png" alt="Loading" style={{width:"330px"}}className='img-size'/> 
        <p className='content'>Students</p>
        <span style={{paddingLeft:"20px",fontWeight:"bold"}}>COUNT</span>
        {/* <button className='span' style={{marginLeft:'30px',marginTop:'20px',marginBottom:'20px',backgroundColor:"#FE2C54"}}>527503</button>   */}
          
        </div>
        <div className="card-landing">
        <img src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/file-teaching-skills-1605625101.jpg" alt="Loading" style={{width:"330px"}} className='img-size'/> 
        <p className='content'>Teachers</p>
        <span style={{paddingLeft:"20px",fontWeight:"bold"}}>COUNT</span>
        {/* <button className='span' style={{marginLeft:'30px',marginTop:'20px',marginBottom:'20px',backgroundColor:"#FE2C54"}}>225400</button>   */}
        </div>

        <div className="card-landing">
        <img src="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/10/role-of-school.jpg" alt="Loading" style={{width:"330px"}} className='img-size'/> 
        <p className='content'>Schools</p>
        <span style={{paddingLeft:"20px" ,fontWeight:"bold"}}>COUNT</span>
        {/* <button className='span' style={{marginLeft:'30px',marginTop:'20px',marginBottom:'20px',backgroundColor:"#FE2C54"}}>37544</button>   */}
        </div>

        </div>
    </div>
      <h1 style={{textAlign:'center', fontFamily:"roboto",color:'lightcoral',marginTop:'19  0px'}}>SCHEMES</h1>
    <div className="main-container">   
      <div className="grid-container">
        <div className="grid-item img-cont">
          <img src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/10/11/Pictures/a-file-photo-of-mid-day-meal_de971f58-ec49-11e9-a1fd-918c38724d55.jpg" alt="description1" className='img'/>
        </div>
        <div className="grid-item content-container">
          <h2 className='schemes-heading' style={{marginRight:"20px"}}>MID DAY MEAL SCHEMES</h2>
          <p className='schemes-desciption'>
          The Midday Meal Scheme is one of the flagship programs by the Tamil Nadu government, providing nutritious meals to students in government and government-aided schools.
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item img-cont">
          <img src="https://as1.ftcdn.net/v2/jpg/05/52/94/92/1000_F_552949275_cpZvzcFDrD61NgLB1fDYlVlAFvkjp2KG.jpg" alt="description2" className='img'/>
        </div>
        <div className="grid-item content-container">
          <h2 className='schemes-heading'>DISTRIBUTION OF BOOKS & UNIFORMS</h2>
          <p className='schemes-desciption'>
          To alleviate the financial burden on families and promote educational equality, the Tamil Nadu government distributes free textbooks and uniforms to students from primary to higher secondary levels. 
          </p>
        </div>
      </div>
    </div>

    <div className="main-container" style={{marginTop:'20px',marnBottom:'30px'}}>
      <div className="grid-container" style={{padding:'30px'}}>
        <div className="grid-item img-cont">
          <img src="https://keystoneacademic-res.cloudinary.com/image/upload/v1709280568/WOMEN_SCHOLARSHIP_2_l7fnag.png" alt="description1" className='img'/>
        </div>
        <div className="grid-item content-container">
          <h2 className='schemes-heading'>SCHOARSHIP PROGRAMS</h2>
          <p className='schemes-desciption'>
            Various scholarship programs are available to support students from economically disadvantaged backgrounds and encourage academic excellence. These scholarships cover tuition fees, examination fees, and other educational expenses
          </p>
        </div>
      </div>
      
     

      <div className="grid-container" style={{padding:'30px'}}>
        <div className="grid-item img-cont">
          <img src="https://scholarshipexam.in/wp-content/uploads/2020/01/SCholarship-for-girl.jpg" alt="description2" className='img'/>
        </div>
        <div className="grid-item content-container">
          <h2 className='schemes-heading'>PRAGATI SCHOLARSHIP</h2>
          <p className='schemes-desciption'>
          Scholarship/Contingency is awarded to meritorious girls taking admission in AICTE approved Technical institution at Degree/ Diploma.They will provide for female studnets upto 50,000 per annum.
          </p>
        </div>
      </div>
      
      
   
    </div>
      
    
      
     

     
      
      

    
    
    
      
    

   
     <Footer/>
   
   </div>

   
    

   
 )
}

export default LandingPage;
