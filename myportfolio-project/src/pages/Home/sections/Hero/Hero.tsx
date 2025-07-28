import { styled, Typography, Box } from "@mui/material";
import wesleyPerfil from "../../../../assets/images/wesley-perfil.jpg";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import DownloadIcon from "@mui/icons-material/Download";
import MailIcon from "@mui/icons-material/Mail";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import Typewriter from "../../../../components/Typewriter/Typewriter";

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
      // display: "block",
      // padding: "20px",
      paddingTop: "100px",
      // paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      // >= mobile
      // backgroundColor: "#020336",
      // display: "flex",
      // alignItems: "center",
      paddingTop: "0",
      // height: "100vh",
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
              <Box position="relative" pb={3}>
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box textAlign="center">
                  <StyledImg src={wesleyPerfil} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
                pb={2}
              >
                Wesley Amaro
              </Typography>
              <Typewriter
                text="I'm a Front-End Developer"
                delay={115}
                variant="h2"
                color="white"
              ></Typewriter>

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
