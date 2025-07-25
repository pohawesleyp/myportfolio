import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

const NavBar = () => {
  const StyledTooBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.primary.main,
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledTooBar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledTooBar>
      </AppBar>
    </>
  );
};

export default NavBar;
