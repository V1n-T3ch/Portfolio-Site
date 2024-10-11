import './Home.css';
import Image from '../assets/Passport.jpg';
import {useTypewriter, Cursor} from 'react-simple-typewriter';

const Home = () => {
    const [text] = useTypewriter({
        words: [
            'a Penetration Tester',
            'a Web Developer',
            'an App Developer',
            'a Cyber Security Enthusiast'
        ],
        loop: true,
    });
    return (
        <section className="home" id="home">
            <div className="content">
            <h3>Hello 👋</h3>
            <h1>I’m Vincent Gichomo</h1>
            <h2>I’m <span>{text}</span><Cursor /></h2>
            <p>
            I’m a Cyber Security Enthusiast, Web Developer, App Developer and Penetration Tester
            </p>
            <div className="social-media">
                <a href="/"><i className="bx bxl-linkedin"></i></a>
                <a href="/"><i className="bx bxl-github"></i></a>
                <a href="/"><i className="bx bxl-twitter"></i></a>
                <a href="/"><i className="bx bxl-instagram"></i></a>
                <a href="/"><i className='bx bxl-upwork'></i></a>
            </div>
            <a href="/" className="button">My CV</a>
            </div>
            <div className="image">
                <img src={Image} alt="Me" />
            </div>
        </section>
      );
};

export default Home;