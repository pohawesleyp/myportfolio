import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import React from "react";

const StyledTooBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: theme.palette.primary.main,

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center", // centraliza links em telas pequenas
    flexWrap: "wrap", // evita que ultrapasse a largura
  },
}));

const StyledIconNavBar = {
  transition: "transform 0.3s ease, color 0.3s ease",
  "&:hover": {
    transform: "scale(1.3)",
    backgroundColor: `${theme.palette.secondary.main}`,
    color: "#504e4e", // Ou uma cor específica, se quiser dar contraste
    borderRadius: "1rem",
    fontWeight: "bold",
  },
};

const NAV_HEIGHT = 72;
// const DURATION = 500;

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Redireciona para a página inicial
    navigate("/");

    setTimeout(() => {
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
        offset: -NAV_HEIGHT,
      });
    }, 100);
  };

  return (
    <>
      <AppBar position="fixed">
        <StyledTooBar>
          <MenuItem
            sx={StyledIconNavBar}
            onClick={() => scrollToSection("home")}
          >
            Home
          </MenuItem>

          <MenuItem
            sx={StyledIconNavBar}
            onClick={() => scrollToSection("about")}
          >
            About
          </MenuItem>

          <MenuItem
            sx={StyledIconNavBar}
            onClick={() => scrollToSection("courses")}
          >
            Courses
          </MenuItem>

          <MenuItem
            sx={StyledIconNavBar}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </MenuItem>

          <MenuItem
            sx={StyledIconNavBar}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </MenuItem>
          <MenuItem
            component={RouterLink}
            to="/contact"
            onClick={() => {}}
            sx={StyledIconNavBar}
          >
            Contact Form
          </MenuItem>
        </StyledTooBar>
      </AppBar>
    </>
  );
};

export default NavBar;
