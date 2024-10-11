import './About.css'
import Image from '../assets/Passport.jpg';

const About = () => {
  return (
    <section className="about" id="about">
        <div className="img">
            <img src={Image} alt="Me" />
        </div>
        <div className="content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>All IT Solutions Expert</h3>
            <p>
            I am a software developer with a passion for building scalable and efficient systems. I am a lifelong learner
            and enjoy exploring new technologies and techniques. I am a passionate and driven individual with a strong interest in cybersecurity and ethical hacking. I have a
            keen eye for detail and a natural ability to think critically, which I believe are essential skills for
            identifying and resolving complex security threats.
            </p>
            <a href="/" className="btn">Read More</a>
        </div>
    </section>
  );
}

export default About;