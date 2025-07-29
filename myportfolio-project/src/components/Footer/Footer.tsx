import {
  Container,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  const StyledFooter = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "2rem",
    textAlign: "center",
  }));

  const iconButtonStyle = {
    transition: "transform 0.3s ease, color 0.3s ease",
    "&:hover": {
      transform: "scale(1.2)",
      color: "#ffffff", // Ou uma cor específica, se quiser dar contraste
    },
  };

  return (
    <>
      <StyledFooter>
        <Container maxWidth="md">
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            mb={2}
          >
            <IconButton
              href="https://github.com/pohawesleyp"
              target="blank"
              rel="noopener"
              aria-label="GitHub"
              sx={iconButtonStyle}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/wesley-amaro/"
              target="blank"
              rel="noopener"
              aria-label="Linkedin"
              sx={iconButtonStyle}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="mailto:wesley.amaro.1@gmail.com"
              target="blank"
              rel="noopener"
              aria-label="Gmail"
              sx={iconButtonStyle}
            >
              <EmailIcon fontSize="large" />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            color="primary.contrastText"
            textAlign="center"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
            textTransform={"capitalize"}
          >
            © 2025 Wesley Amaro — All rights reserved.
          </Typography>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
