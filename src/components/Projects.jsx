import './Projects.css'
import portfolio1 from '../assets/portfolio1.jpg';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';
import portfolio4 from '../assets/portfolio4.jpg';
import portfolio5 from '../assets/portfolio5.jpg';
import portfolio6 from '../assets/portfolio6.jpg';

const Projects = () => {
  return (
    <section className="projects" id="projects">
        <h2 className="heading">Latest <span>Projects</span></h2>
        <div className="container">
            <div className="layer">
                <img src={portfolio1} alt="Portfolio1" />
                <h4>Penetration Testing</h4>
                <p>
                    Penetration testing, also known as pen testing or ethical hacking, is the practice of testing a
                    computer system, network or web application to find vulnerabilities that an attacker could exploit.
                </p>
                <a href="#"><i className="bx bx-link-external"></i></a>
            </div>

            <div className="layer">
                <img src={portfolio2} alt="Portfolio1" />
                <h4>E-commerce Site</h4>
                <p>
                    E-commerce is the activity of buying or selling of products on online services or over the Internet 
                    and other computer networks. The term can also be used to describe the activity of selling products.
                </p>
                <a href="#"><i className="bx bx-link-external"></i></a>
            </div>

            <div className="layer">
                <img src={portfolio3} alt="Portfolio1" />
                <h4>Movie App</h4>
                <p>
                    A movie app is a software application that allows users to watch movies and TV shows on their devices and stream them online.
                </p>
                <a href="#"><i className="bx bx-link-external"></i></a>
            </div>

            <div className="layer">
                <img src={portfolio4} alt="Portfolio1" />
                <h4>Site to App</h4>
                <p>
                    A website is a collection of related web pages, images, videos, and other digital assets that
                    are hosted on a web server and can be accessed via the internet.
                </p>
                <a href="#"><i className="bx bx-link-external"></i></a>
            </div>

            <div className="layer">
                <img src={portfolio5} alt="Portfolio1" />
                <h4>Machine Learning</h4>
                <p>
                    Machine learning is a field of study that focuses on the use of algorithms and statistical models to enable machines to perform a specific task without using explicit instructions.
                </p>
                <a href="#"><i className="bx bx-link-external"></i></a>
            </div>

            <div className="layer">
                <img src={portfolio6} alt="Portfolio1" />
                <h4>Chat App</h4>
                <p>
                    A chat app is a software application that allows users to communicate with each other in real-time through text, voice, or video messages.
                </p>
                <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Projects