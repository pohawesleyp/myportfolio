import { styled, Typography, Box } from "@mui/material";
import wesleyPerfil from "../../../../assets/images/wesley-perfil.jpg";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import DownloadIcon from "@mui/icons-material/Download";
import MailIcon from "@mui/icons-material/Mail";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

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
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      // backgroundColor: "#814ea3",
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      // >= mobile
      // backgroundColor: "#020336",
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `0.1rem solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={wesleyPerfil} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
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
                paddingBottom={2}
              >
                I'm a Front-End Developer
              </Typography>

              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                paddingTop={3}
              >
                <Grid
                  size={{ xs: 10, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={() => console.log("download")}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>

                <Grid
                  size={{ xs: 10, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={() => console.log("contact")}>
                    <MailIcon />
                    <Typography>Contact Me</Typography>
                  </StyledButton>
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
