import { useNavigate } from 'react-router-dom';
import img1 from '../assets/gokul_pic.jpeg';
import Particles from './Particles';

const Home = () => {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/about');
    };

    return (
        <div className="home_div_1">
            <div className="particles-overlay">
                <Particles quantity={100} />
            </div>
            
            <div className="home_main_content">
                <div className="home_base">
                    <div className="home_content">                                                                                                                                                                                                                                            
                        <div className="home_text">
                            <h1>Gokulnathan Thanapal</h1>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>
                    
                    <div className="img1_container">
                        <img src={img1} className="image" id="img1" alt="Gokulnathan Thanapal" />
                    </div>
                </div>
                
                <div className="home_text_1">
                    <p id="home_text_1">
                        "I am a dedicated technology student with a strong foundation in design, integration, and problem-solving.
                        I have hands-on experience with Java, Spring Framework, JavaScript, and SQL, and I am passionate about learning
                        and launching new projects. Skilled in translating business requirements into effective technical solutions, 
                        I am eager to start my career as an entry-level software engineer."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
