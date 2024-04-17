import FooterComponents from "./components/FooterComponents";
import NavbarComponents from "./components/NavbarComponents";
import HomePages from "./pages/HomePages";
import PricingPages from "./pages/PricingPages";
import ServicesPages from "./pages/ServicesPages";

function App() {
  return (
    <>
      <NavbarComponents />
      <HomePages />
      <ServicesPages />
      <PricingPages />
      <FooterComponents />
    </>
  );
}

export default App;
