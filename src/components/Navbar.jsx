import './Navbar.css';

const Navbar = () => {
  /*======toggle icon navbar======*/
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active')
  }

  return (
    <header className="header">
        <a href="/" className="cname">Vin-Tech</a>
        <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
