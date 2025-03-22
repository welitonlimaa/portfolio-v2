function Footer({
  name,
  phoneNumber,
  email,
  socialLinks,
  phrase,
  author
}) {
  return (
    <footer id="footer" className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-2">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Contato</span>
            </h2>
            <div className="main-footer__social-cont">
              <p className="contact-address">{ email }</p>
              <p className="contact-address">{ phoneNumber }</p>
              {
                socialLinks.map((data, index) => {
                  return(
                    <a
                      href={ data.link }
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <img
                        src={ data.iconimg.url } 
                        alt={ data.socialname } 
                        className="main-footer__icon"
                      />
                    </a>
                  )
                })
              }
            </div>
          </div>
          <div className="main-footer__row main-footer__row-1">
            <br />
            <h4 className="heading heading-sm text-lt">{ name }</h4>
            <blockquote>
              <p className="main-footer__short-desc">
                <i>
                  { phrase }
                </i>
              </p>
              <footer className="main-footer__short-descautor">
                { author ? `~ ${author}`: null }
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="main-footer__lower">
          &copy; Copyright 2025. Made by
          <a href="https://github.com/welitonlimaa" rel="noreferrer" target="_blank">Weliton Lima</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;