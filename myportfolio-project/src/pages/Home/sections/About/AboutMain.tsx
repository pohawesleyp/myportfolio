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
                width={"100%"}
                top={-100}
                left={800}
                sx={{
                  zIndex: 0,
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
