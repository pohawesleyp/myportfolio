import { styled, Grid, Card, Fade, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TypewriterCourse from "../../../../components/Typewriter/TypewriterCourse";
import SchoolIcon from "@mui/icons-material/School";
import { Description } from "@mui/icons-material";
import { Element } from "react-scroll";

const AboutSection = styled(Box)(({ theme }) => ({
  // paddingBottom: "4rem",
  marginBottom: theme.spacing(1),
  textAlign: "left",
  padding: "0.6rem 0.5rem",
}));

const CourseCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.primary.light,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "default",
  padding: "0.6rem 0.5rem",
  marginBottom: "0.6rem",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: theme.palette.primary.light,
    color: "white",
    boxShadow: "0 20px 40px rgba(117, 194, 245, 0.3)",
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
        <Grid container spacing={3} justifyContent={"center"}>
          {courses.map(({ institution, course }, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <Fade in={true} style={{ transitionDelay: `${index * 300}ms` }}>
                <CourseCard elevation={3}>
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      fontWeight={"bold"}
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                    >
                      <SchoolIcon /> {institution}
                    </Typography>
                    <Typography
                      variant="body1"
                      mt={1}
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                    >
                      <Description /> {course}
                    </Typography>
                  </CardContent>
                </CourseCard>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Element>
    </>
  );
};

export default AboutCouses;
