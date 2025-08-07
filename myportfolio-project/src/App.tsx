import Footer from "./components/Footer/Footer";
import ContactForm from "./components/Form/ContactForm";
import NavBar from "./components/NavBar/NavBar";
import AboutMain from "./pages/Home/sections/About/AboutMain";
import AboutSkills from "./pages/Home/sections/About/AboutSkills";
import Hero from "./pages/Home/sections/Hero/Hero";
import Projects from "./pages/Home/sections/Projetcs/Projects";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMain />
      <AboutSkills />
      <Projects />
      <ContactForm />

      <Footer />
    </>
  );
};

export default App;
