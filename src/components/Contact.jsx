import './Contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>
        <form action="#" method="post">
            <div className="input-box">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-box">
                <input type="number" placeholder="Phone Number" />
                <input type="text" placeholder="Email Subject" />
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" className="btn" />
        </form>
    </section>
  )
}

export default Contact