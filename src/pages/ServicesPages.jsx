import "./css/service.css";

const ServicesPages = () => {
  return (
    <section className="service" id="service">
      <div className="service-content">
        <div className="service-text">
          <div className="service-text-left">
            <h1 data-aos="fade-right" data-aos-duration="1000">
              Selamat datang dihalaman resmi rundweb<span>.</span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="1000">
              Kami melayani anda dengan sebuah ide dan gagasan sehingga anda
              tidak kesulitan dalam membuat situs website impian anda.
            </p>
          </div>
          <div className="service-text-right" data-aos="fade-left" data-aos-duration="1000">
            <h3>Layanan yang kami sajikan sangat bervariasi</h3>
          </div>
        </div>
        <div className="service-list">
          <div className="service-link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <div className="service-icon">
              <i className="bx bx-laptop"></i>
            </div>
            <h1>Website Builder</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            </p>
          </div>
          <div className="service-link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
            <div className="service-icon">
              <i className="bx bx-notepad"></i>
            </div>
            <h1>UI & UX Design</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            </p>
          </div>
          <div className="service-link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
            <div className="service-icon">
              <i className="bx bx-book-content"></i>
            </div>
            <h1>Landing Page</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            </p>
          </div>
          <div className="service-link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
            <div className="service-icon">
              <i className="bx bx-buildings"></i>
            </div>
            <h1>Company Profile</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPages;
