function Banner({
  name,
  title,
  subTitle,
  photo,
  socialLinks
}) {
  return (
    <section id="banner" className="home-hero">
      <div className="home-hero__content">
        <article className="article">
          <h1 id="banner-title">{ title }</h1>
          <p id="banner-text">{ subTitle }</p>
        </article>
        <figure className="figure">
          <span
            style={{ backgroundImage: `url(https://avatars.githubusercontent.com/u/108986668?v=4)` }}
            className="handsome"
            aria-label={ name }
          />
        </figure>
      </div>
      <div className="home-hero__socials">
        {
          socialLinks.map((data, index) => {
            return(
              <div key={ index } className="home-hero__social">
                <a
                  href={ data.link }
                  className="home-hero__social-icon-link"
                  target="_blank" rel="noreferrer"
                >
                  <img
                    src={ data.iconimg.url } 
                    alt={ data.socialname } 
                    className="home-hero__social-icon" />
                </a>
              </div>
            )
          })
        }
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <a className="mouse" href='#about' />
      </div>
    </section>
  );
}

export default Banner;