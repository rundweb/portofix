import "./css/service.css";

const ServicesPages = () => {
  return (
    <section className="service" id="service">
      <div className="service-content">
        <div className="service-text">
          <div className="service-text-left">
            <h1>
              Selamat datang dihalaman resmi rundweb<span>.</span>
            </h1>
            <p>
              Kami melayani anda dengan sebuah ide dan gagasan sehingga anda
              tidak kesulitan dalam membuat situs website impian anda.
            </p>
          </div>
          <div className="service-text-right">
            <h3>Layanan yang kami sajikan sangat bervariasi</h3>
          </div>
        </div>
        <div className="service-list">
          <div className="service-link">
            <div className="service-icon">
              <i className="bx bx-laptop"></i>
            </div>
            <h1>Website Builder</h1>
            <div className="service-view">
              <a href=""></a>
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>
          <div className="service-link">
            <div className="service-icon">
              <i className="bx bx-notepad"></i>
            </div>
            <h1>UI & UX Design</h1>
            <div className="service-view">
              <a href=""></a>
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>
          <div className="service-link">
            <div className="service-icon">
              <i className="bx bx-book-content"></i>
            </div>
            <h1>Landing Page</h1>
            <div className="service-view">
              <a href=""></a>
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>
          <div className="service-link">
            <div className="service-icon">
              <i className="bx bx-buildings"></i>
            </div>
            <h1>Company Profile</h1>
            <div className="service-view">
              <a href=""></a>
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPages;
