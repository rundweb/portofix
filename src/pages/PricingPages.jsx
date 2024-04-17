import "./css/pricing.css";
import logos from "../assets/logos.svg";

const PricingPages = () => {
  return (
    <div className="pricing" id="pricing">
      <div className="pricing-content">
        <div
          className="pricing-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>
            Pilihan Paket Dari RundWeb<span>.</span>
          </h1>
          <p>
            Pilih paket terbaik yang sesuai dengan kebutuhan anda, dan jadikan
            website impian anda jadi kenyataan bersama RundWeb
          </p>
        </div>
        <div className="pricing-list">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="pricing-link ">
              <div className="pricing-logo">
                <img src={logos} alt="" />
                
              </div>
              <div className="pricing-text">
                <h4>Dream Website</h4>
                <p>Paket pembuatan website</p>
                <h1>100k</h1>
                <p>Revisi Seumur Hidup</p>
                <a href="">Pilih Paket</a>
                <ul>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className="pricing-link rekomendasi">
              <div className="pricing-logo-rekomendasi">
                <img src={logos} alt="" />
                <span>Rekomendasi</span>
              </div>
              <div className="pricing-text">
                <h4>Landing Page</h4>
                <p>Paket pembuatan website</p>
                <h1>200k</h1>
                <p>Revisi Seumur Hidup</p>
                <a href="">Pilih Paket</a>
                <ul>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <div className="pricing-link">
              <div className="pricing-logo">
                <img src={logos} alt="" />
              </div>
              <div className="pricing-text">
                <h4>Company Profile</h4>
                <p>Paket pembuatan website</p>
                <h1>300k</h1>
                <p>Revisi Seumur Hidup</p>
                <a href="">Pilih Paket</a>
                <ul>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
            <div className="pricing-link">
              <div className="pricing-logo">
                <img src={logos} alt="" />
              </div>
              <div className="pricing-text">
                <h4>Website Custom</h4>
                <p>Paket pembuatan website</p>
                <h1>400k</h1>
                <p>Revisi Seumur Hidup</p>
                <a href="">Pilih Paket</a>
                <ul>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i> Keuntungan nombor 1
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPages;
