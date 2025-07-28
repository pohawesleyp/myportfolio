import { styled, Typography } from "@mui/material";

const Footer: React.FC = () => {
  const StyledFooter = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "2rem",
    textAlign: "center",
  }));

  return (
    <>
      <StyledFooter>
        <Typography variant="body2" color="primary.contrastText">
          © 2025 Wesley Pietro — Todos os direitos reservados.
        </Typography>
      </StyledFooter>
    </>
  );
};

export default Footer;
