import img2 from "../assets/IMG_6318.jpeg"
import img3 from "../assets/logo.jpg"
import img4 from "../assets/image.png"
import './About.css';
import img5 from "../assets/img_inaug.jpg"
const About=()=>{

    return(
        <div class="about_container">
            {/* <div class="about_content">
                    <div class="about_text">
                            <p id="about_text" style={{color:"white"}}>
                                I'm gokulnathan , technology student with a interest in problem solving , building softwares using java and its framework spring boot , databasing with mySQL .
                            </p>
                    </div>
                    <div class="about_image">
                    <img src={img2} class="image" id="img2" alt="gokul_1"/>
                    </div>
            </div> */}
            <div class="top_content">
            <div class="cardx">
                <img src={img2} id="img3" alt="gokul_img"/>
                   <div class="card__content">
                        <p class="card__title">About !😉</p>
                        <p class="card__description">
                        I am a dedicated and versatile developer with a passion for creating efficient and user-friendly softwares.
                        My journey began with a deep curiosity for how things work, and it has evolved into a career where 
                        I continuously strive to learn and adapt to new challenges.</p>
                    </div>
            </div>
            <div class="top_content_skills">
<div class="wrapper">
  <span class="letter letter1">G</span>
  <span class="letter letter2">o</span>
  <span class="letter letter3">-</span>
  <span class="letter letter4">C</span>
  <span class="letter letter5">o</span>
  <span class="letter letter6">o</span>
  <span class="letter letter7">l</span>
  <span class="letter letter8">.</span>
  <span class="letter letter9">😉</span>
  <span class="letter letter10"></span>
  <span class="letter letter10"></span>
</div>

            </div>
            </div>

            {/* <div class="cards">
                <div class="card red">
                <img src={img4} id="img12" alt="association"/>

            </div>
            <div class="card blue">
                <img src={img3} id="img11" alt="association"/>
                <p class="tip">President 
                    ~Ultronix~</p>
                <p class="second-text">Technical Association
                </p>
                
            </div>
            <div class="card green">
              <p class="tip">20+ Events</p>
               <p class="second-text"> Participated in Technical events</p>
            </div>
            </div> */}
<div class="article_container">

            

<article class="card">
  <div class="card-img">
    <div class="card-imgs pv ">
    <img src={img5} id="img3" alt="gokul_inauguration"/>
    </div>
  </div>

  <div class="project-info">
    <div class="flex">
      <div class="project-title">President ~ Ultronix</div>
      {/* <span class="tag"></span> */}
    </div>
    <span class="lighter"
      > Technical Association <br/>CSBS-Department<br/>
    
            Organized 6+ Events<br/>-------------------------------<br/>
            Team Management<br/>
            Organizing Event<br/>
            Technical Enhancement
        </span>
  </div>
  
</article>
<article class="card">
  <div class="card-img">
    <div class="card-imgs pv ">
    <img src={img5} id="img3" alt="gokul_inauguration"/>
    </div>
  </div>

  <div class="project-info">
    <div class="flex">
      <div class="project-title">NSS ~ Volunteer</div>
      {/* <span class="tag"></span> */}
    </div>
    <span class="lighter"
      > Social Service <br/>Participated : 4+ camps <br/>
    
            Society and safety Enhancement campains
            <br/>-------------------------------<br/>
          
            Sustainable Living <br/>Safety Awareness<br/>
        </span
    >
  </div>
  
</article>
</div>

            
        </div>
            

      
    )
}
export default About;