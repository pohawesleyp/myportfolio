import { styled, Grid } from "@mui/material";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import TypewriterBody from "../../../../components/Typewriter/TypewriterBody";
import AboutHeader from "./AboutHeader";
import AboutCards from "./AboutCards";
import AboutDescription from "./AboutDescription";

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  color: theme.palette.primary.contrastText,
}));

const AboutSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: "left",
}));

const About: React.FC = () => {
  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
          <br />
          <AboutHeader />
          <AboutCards />
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position="relative" pb={3}>
                <Box
                  position="absolute"
                  width={"150%"}
                  top={-100}
                  left={0}
                  sx={{ zIndex: 0 }}
                >
                  <AnimatedBackground />
                </Box>
              </Box>
            </Grid>
          </Grid>

          <AboutDescription />

          <AboutSection>
            <Typography
              variant="h3"
              gutterBottom
              fontStyle="italic"
              fontWeight="bold"
              textAlign="center"
            >
              Courses with Certificates
            </Typography>

            <TypewriterBody
              text="        Institution: Ada Tech (Brazil)"
              delay={40}
              variant="body1"
              color="white"
            ></TypewriterBody>
            <br />
            <TypewriterBody
              text="Course: Front-End Development with a Full Stack Approach"
              delay={40}
              variant="body1"
              color="white"
            ></TypewriterBody>
            <br />
            <TypewriterBody
              text="Institution: Udemy (Brazil)"
              delay={40}
              variant="body1"
              color="white"
            ></TypewriterBody>
            <br />
            <TypewriterBody
              text="Course: Web Development Bootcamp Certificate (Java, Python, C, C++
              and C#)"
              delay={40}
              variant="body1"
              color="white"
            ></TypewriterBody>
            <br />
            <TypewriterBody
              text=" Institution: Santander Open Academy (Brazil)"
              delay={40}
              variant="body1"
              color="white"
            ></TypewriterBody>
            <br />
            <TypewriterBody
              text=" Course: Python Basics"
              delay={40}
              variant="body1"
              color="white"
            ></TypewriterBody>
            <br />
            <TypewriterBody
              text="Institution: Udemy (Brazil)"
              delay={40}
              variant="body1"
              color="white"
            ></TypewriterBody>
            <br />
            <TypewriterBody
              text="Course: Python Basics"
              delay={40}
              variant="body1"
              color="white"
            ></TypewriterBody>
            <br />
            <TypewriterBody
              text="Institution: Gustavo Guanabara (Brazil)"
              delay={40}
              variant="body1"
              color="white"
            ></TypewriterBody>
            <br />
            <TypewriterBody
              text="Course: Web Development Bootcamp Certificate (HTML, CSS and
              JavaScript)"
              delay={40}
              variant="body1"
              color="white"
            ></TypewriterBody>
          </AboutSection>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
