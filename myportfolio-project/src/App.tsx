import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/Home/sections/About/About";
import Hero from "./pages/Home/sections/Hero/Hero";
import Projects from "./pages/Home/sections/Projetcs/Projects";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
