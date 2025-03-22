import whatsIcon from '../assets/imgs/png/whatsappicon.png';
import gmailIcon from '../assets/imgs/png/gmailicon.png';

function Contact({
  phoneNumber,
  email
}) {
  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <h2 className="heading heading-sec heading-sec__mb-med">
        <span className="heading-sec__main heading-sec__main--lt">Contato</span>
        <span className="heading-sec__sub heading-sec__sub--lt">
          Entre em contato comigo!
        </span>
      </h2>
      <div className="contact-main-container">
        <a
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
          target="_blank" 
          rel="noreferrer"
          className="contact__btn"
        >
          <img
            src={whatsIcon}
            alt="whatsapp" 
          />
        </a>
        <a
          href={`https://mail.google.com/mail/?view=cm&to=${email}`}
          target="_blank" 
          rel="noreferrer"
          className="contact__btn"
        >
          <img
            src={gmailIcon}
            alt="gmail" 
          />
        </a>
      </div>
    </section>
  )
}

export default Contact;