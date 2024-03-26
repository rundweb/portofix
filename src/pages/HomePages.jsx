import "./css/home.css";
import home1 from '../assets/home (1).png'
import home2 from '../assets/home (2).png'
const HomePages = () => {
  return (
    <section className="home" id="home">
      <img src={home1} alt="" className="home1" />
      <img src={home2} alt="" className="home2" />
      <div className="home-content">
        <h1>
          Website adalah <span>segalanya</span> jadi
        </h1>
        <h1>
          buatlah website <span>impian</span> anda sekarang <span>!</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          nobis optio labore, necessitatibus quae dicta neque ad maxime
          voluptatem voluptas, repellat consequuntur ullam nam a eligendi
          repellendus quod dignissimos mollitia.
        </p>

        <a href="#">
          Learn More <i className="bx bx-right-arrow-alt"></i>
        </a>
      </div>
    </section>
  );
};

export default HomePages;
