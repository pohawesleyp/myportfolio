import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

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
const DURATION = 500;

const NavBar: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleSetActive = (name: string) => {
    // quando o link vira ativo, dá foco na seção (acessibilidade)
    const el = document.getElementById(name);
    if (el) el.focus({ preventScroll: true });
  };

  return (
    <>
      <AppBar position="absolute">
        <StyledTooBar>
          <ScrollLink
            to="about"
            spy={true}
            smooth={!prefersReducedMotion}
            offset={-NAV_HEIGHT}
            duration={DURATION}
            onSetActive={() => handleSetActive("about")}
          >
            <MenuItem sx={StyledIconNavBar}>About</MenuItem>
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={!prefersReducedMotion}
            offset={-NAV_HEIGHT}
            duration={DURATION}
            onSetActive={() => handleSetActive("skills")}
          >
            <MenuItem sx={StyledIconNavBar}>Skills</MenuItem>
          </ScrollLink>
          <ScrollLink
            to="courses"
            spy={true}
            smooth={!prefersReducedMotion}
            offset={-NAV_HEIGHT}
            duration={DURATION}
            onSetActive={() => handleSetActive("courses")}
          >
            <MenuItem sx={StyledIconNavBar}>Courses</MenuItem>
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={!prefersReducedMotion}
            offset={-NAV_HEIGHT}
            duration={DURATION}
            onSetActive={() => handleSetActive("projects")}
          >
            <MenuItem sx={StyledIconNavBar}>Projects</MenuItem>
          </ScrollLink>

          <ScrollLink
            to="contactForm"
            spy={true}
            smooth={!prefersReducedMotion}
            offset={-NAV_HEIGHT}
            duration={DURATION}
            onSetActive={() => handleSetActive("contactForm")}
          >
            <MenuItem
              component={RouterLink}
              to="/contact"
              sx={StyledIconNavBar}
            >
              Contact Form
            </MenuItem>
          </ScrollLink>
        </StyledTooBar>
      </AppBar>
    </>
  );
};

export default NavBar;
