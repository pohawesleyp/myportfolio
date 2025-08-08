import Footer from "./components/Footer/Footer";
import ContactForm from "./components/Form/ContactForm";
import NavBar from "./components/NavBar/NavBar";
import AboutMain from "./pages/Home/sections/About/AboutMain";
import AboutSkills from "./pages/Home/sections/About/AboutSkills";
import Hero from "./pages/Home/sections/Hero/Hero";
import Projects from "./pages/Home/sections/Projetcs/Projects";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage: React.FC = () => (
  <>
    <Hero />
    <AboutMain />
    <AboutSkills />
    <Projects />
  </>
);

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
