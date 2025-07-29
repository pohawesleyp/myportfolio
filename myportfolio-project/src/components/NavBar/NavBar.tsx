import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

const NavBar = () => {
  const StyledTooBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.primary.main,
  }));

  const StyledIconNavBar = {
    transition: "transform 0.3s ease, color 0.3s ease",
    "&:hover": {
      transform: "scale(1.3)",
      backgroundColor: "#35d8e3",
      color: "black", // Ou uma cor específica, se quiser dar contraste
      borderRadius: "1rem",
    },
  };

  return (
    <>
      <AppBar position="absolute">
        <StyledTooBar>
          <MenuItem sx={StyledIconNavBar}>About</MenuItem>
          <MenuItem sx={StyledIconNavBar}>Skills</MenuItem>
          <MenuItem sx={StyledIconNavBar}>Projects</MenuItem>
        </StyledTooBar>
      </AppBar>
    </>
  );
};

export default NavBar;
