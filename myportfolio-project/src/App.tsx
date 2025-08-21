import { Box, styled } from "@mui/material";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/Form/ContactForm";
import NavBar from "./components/NavBar/NavBar";
import AboutCards from "./pages/Home/sections/About/AboutCards";
import AboutCouses from "./pages/Home/sections/About/AboutCourses";
import AboutDescription from "./pages/Home/sections/About/AboutDescription";
import AboutHeader from "./pages/Home/sections/About/AboutHeader";
import AboutSkills from "./pages/Home/sections/About/AboutSkills";
import Hero from "./pages/Home/sections/Hero/Hero";
import Projects from "./pages/Home/sections/Projetcs/Projects";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AboutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.palette.primary.contrastText,
  overflow: "hidden",
  paddingBottom: "4rem", // adiciona espaço embaixo para o botão
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "8rem", // mais espaço em telas pequenas
  },
}));

const HomePage: React.FC = () => (
  <>
    <Hero />

    <AboutContainer>
      <AboutHeader />

      <AboutCards />

      <Suspense fallback={<div />}>
        <AboutDescription />
        <AboutCouses />
      </Suspense>
    </AboutContainer>

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
