import "./css/footercomponents.css";

const FooterComponents = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="">
            RundWeb<span>.</span>
          </a>
          <div className="footer-icon">
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
        </div>
        <div className="footer-contatc">
          <ul>
            <li><h3>Contact Us</h3></li>
            <li>example@gmail.com</li>
            <li>Jawa Barat, Indonesia</li>
            <li>081234567890</li>
          </ul>
        </div>
        <div className="footer-wa-link">
          <h3>Your Dream</h3>
          <p>Jadikan website impianmu menjadi kenyataan bersama RundWeb</p>
          <a href="">Contact Us <i className='bx bxl-whatsapp'></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 RundWeb Productions. All right reserved</p>
      </div>
    </div>
  );
};

export default FooterComponents;
