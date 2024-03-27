import "./css/home.css";
import home1 from "../assets/home (1).png";
import home2 from "../assets/home (2).png";
const HomePages = () => {
  return (
    <section className="home" id="home">
      <img src={home1} alt="" className="home1" />
      <img src={home2} alt="" className="home2" />

      <div className="social-content">
        <a href="">
          <i className="bx bxl-github"></i>
        </a>
        <a href="">
          <i className="bx bxl-dribbble"></i>
        </a>
        <a href="">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="">
          <i className="bx bxl-meta"></i>
        </a>
        <a href="">
          <i className="bx bxl-tiktok"></i>
        </a>
      </div>

      <div className="home-content">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Website adalah <span>segalanya</span> jadi
        </h1>
        <h1 data-aos="fade-up" data-aos-duration="1000">
          buatlah website <span>impian</span> anda sekarang
        </h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          Rundweb bekerja dengan sangat praktis dan efisien sehingga website impian yang anda inginkan akan
          cepat terwujud dengan hasil yang memuaskan dan pastinya kualitas yang sangat baik.
          ayo jadikan impian anda menjadi kenyataan bersama Rundweb !
        </p>

        <a href="#" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          Learn More <i className="bx bx-right-arrow-alt"></i>
        </a>
      </div>
    </section>
  );
};

export default HomePages;
