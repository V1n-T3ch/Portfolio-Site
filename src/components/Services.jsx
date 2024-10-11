import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">My Main <span>Services</span></h2>
      <div className="service-container">
        <div className="service">
          <i className='bx bx-terminal'></i>
          <h3>Penetration Tester</h3>
          <p>
            I am a skilled penetration tester with experience in identifying and exploiting vulnerabilities in computer systems and networks.
          </p>
          <button className='btn'>Explore</button>
        </div>

        <div className="service">
          <i className='bx bxl-html5'></i>
          <h3>Web Development</h3>
          <p>
            I am a skilled web developer with experience in designing and developing websites using HTML, CSS, and JavaScript and frameworks like React and NextJS.
          </p>
          <button className='btn'>Explore</button>
        </div>

        <div className="service">
          <i className='bx bxl-react'></i>
          <h3>Cross-Platform App Developer</h3>
          <p>
            I am a skilled app developer with experience in designing and developing mobile apps using React Native and Flutter.
          </p>
          <button className='btn'>Explore</button>
        </div>
      </div>
    </section>
  )
}

export default Services;