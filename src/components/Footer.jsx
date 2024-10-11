import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
        <div className="footer-text">
           <p>&copy; Copyright {currentYear} by Vincent | All Rights Reserved</p> 
        </div>

        <div className="footer-iconTop">
            <a href="#home"><i className='bx bxs-up-arrow-square'></i></a>
        </div>
    </footer>
  )
}

export default Footer