import { styled, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TypewriterBody from "../../../../components/Typewriter/TypewriterBody";

const AboutSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: "left",
}));

const AboutCouses: React.FC = () => {
  return (
    <>
      <Grid size={{ xs: 12, md: 5 }}>
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
      </Grid>
    </>
  );
};

export default AboutCouses;
