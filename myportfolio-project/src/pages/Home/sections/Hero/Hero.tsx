import { styled, Typography, Button } from "@mui/material";
import wesleyPerfil from "../../../../assets/images/wesley-perfil.jpg";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import DownloadIcon from "@mui/icons-material/Download";
import MailIcon from "@mui/icons-material/Mail";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
// }));

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <StyledImg src={wesleyPerfil} />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                Wesley Amaro
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                I'm a Front-End Developer
              </Typography>

              <Grid container display="flex" justifyContent="center">
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <Button color="secondary">
                    <DownloadIcon></DownloadIcon> Download CV
                  </Button>
                </Grid>

                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <Button color="secondary" variant="outlined">
                    <MailIcon></MailIcon> Contact Me
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
