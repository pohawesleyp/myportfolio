import { styled, Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import AboutHeader from "./AboutHeader";
import AboutCards from "./AboutCards";
import AboutDescription from "./AboutDescription";
import AboutCouses from "./AboutCourses";

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  color: theme.palette.primary.contrastText,
  overflow: "hidden",
  maxWidth: "150%",
}));

const AboutMain: React.FC = () => {
  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
          <br />
          <AboutHeader />
          <AboutCards />

          <Grid size={{ xs: 12, md: 5 }}>
            <Box position="relative" pb={3}>
              <Box
                position="absolute"
                width="46rem"
                height={"100%"}
                top={0}
                left="80%"
                sx={{
                  zIndex: 0,
                  transform: {
                    xs: "translateX(calc(-13rem + -5vw))",
                    md: "translateX(calc(1rem + 1vw))",
                  },
                }}
              >
                <AnimatedBackground />
              </Box>
            </Box>
          </Grid>

          <AboutDescription />
          <AboutCouses />
        </Container>
      </StyledAbout>
    </>
  );
};

export default AboutMain;
