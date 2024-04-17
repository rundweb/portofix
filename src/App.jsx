import FooterComponents from "./components/FooterComponents";
import NavbarComponents from "./components/NavbarComponents";
import HomePages from "./pages/HomePages";
import ServicesPages from "./pages/ServicesPages";

function App() {
  return (
    <>
      <NavbarComponents />
      <HomePages />
      <ServicesPages />
      <FooterComponents />
    </>
  );
}

export default App;
