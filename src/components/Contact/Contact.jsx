
import "./Contact.scss"
import mailimg from "/images/mail.png"
import phoneimg from "/images/phone.png"
function Contact(){
    return<>
    <section className="contact" id="contact">
<div className="contact__container">
    <h1 className="contact__title"> Our Contact</h1>
    <p className="contact__heading">Fast answers at your fingertips.</p>
    </div>
    <div className="contact__info">
    
    <div className="contact__email-container"><img className="contact__img" src={mailimg} alt="mail image" /><p>Drop us a message at gurneerbedi@gmail.com</p></div>
    
    <div className="contact__phone-container"><img className="contact__img2" src={phoneimg} alt="phone image" /><p>Give us a call at 647-673-0098</p></div></div>


    </section>
    </>
}

export default Contact;
