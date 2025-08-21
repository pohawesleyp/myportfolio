import { styled, Grid, Card, Fade, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import TypewriterCourse from "../../../../components/Typewriter/TypewriterCourse";
import SchoolIcon from "@mui/icons-material/School";
import { Description } from "@mui/icons-material";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AboutSection = styled(Box)(({ theme }) => ({
  paddingBottom: "4rem",
  marginBottom: theme.spacing(1),
  textAlign: "left",
  padding: theme.spacing(3),
}));

const CourseCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.primary.light,
  cursor: "default",
  padding: "0.6rem 0.5rem",
  marginBottom: theme.spacing(1),

  textAlign: "center",
  borderRadius: "1.5rem",
  maxWidth: 800,
  marginLeft: "auto",
  marginRight: "auto",
  minHeight: 200,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  WebkitTransition: "transform 0.3s ease, box-shadow 0.3s ease",
  MozTransition: "transform 0.3s ease, box-shadow 0.3s ease",
  transition: "transform 0.3s ease 0.3s ease-out, box-shadow 0.3s ease",
  "&:hover": {
    transform: "perspective(1000px) rotateY(10deg) rotateX(10deg) scale(1.05)",
    backgroundColor: theme.palette.primary.light,
    color: "white",
    boxShadow: "0 20px 40px rgba(97, 147, 180, 0.3)",
    textAlign: "center",
  },
}));

const courses = [
  {
    institution: "Ada Tech (Brazil)",
    course: "Front-End Development with a Full Stack Approach",
  },
  {
    institution: "Udemy (Brazil)",
    course:
      "Web Development Bootcamp Certificate (Java, Python, C, C++ and C#)",
  },
  { institution: "Santander Open Academy (Brazil)", course: "Python Basics" },
  { institution: "Udemy (Brazil)", course: "Python Basics" },
  {
    institution: "Gustavo Guanabara (Brazil)",
    course: "Web Development Bootcamp Certificate (HTML, CSS and JavaScript)",
  },
];

const AboutCouses: React.FC = () => {
  return (
    <>
      <Element name="courses">
        <AboutSection
          id="courses"
          tabIndex={-1}
          aria-labelledby="courses-title"
        >
          <Grid container spacing={1} justifyContent={"center"}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography>
                <TypewriterCourse
                  text="Courses With Certificates ⭐"
                  delay={40}
                  variant="h3"
                  color="white"
                  fontWeight="bolder"
                />
              </Typography>
            </Grid>
          </Grid>
        </AboutSection>
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={2}
              justifyContent={"center"}
              alignItems="stretch"
            >
              {courses.map(({ institution, course }, index) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}
                  key={index}
                  display={"flex"}
                >
                  <Fade
                    in={true}
                    style={{
                      transitionDelay: `${index * 300}ms`,
                      width: "100%",
                      justifyContent: "center",
                      textAlign: "initial",
                    }}
                  >
                    <CourseCard variant="elevation">
                      <CardContent>
                        <Typography
                          variant="subtitle1"
                          fontWeight={"bold"}
                          display={"flex"}
                          alignItems={"center"}
                          gap={2}
                        >
                          <SchoolIcon /> {institution}
                        </Typography>
                        <Typography
                          variant="body1"
                          mt={1}
                          display={"flex"}
                          alignItems={"center"}
                          gap={2}
                        >
                          <Description /> {course}
                        </Typography>
                      </CardContent>
                    </CourseCard>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Container>
        </MotionBox>
      </Element>
    </>
  );
};

export default AboutCouses;
