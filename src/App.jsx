import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App