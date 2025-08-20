import {
  styled,
  Grid,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import {
  StarBorderOutlined,
  Html,
  Css,
  Javascript,
  Language,
  Construction,
} from "@mui/icons-material";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import TypewriterCourse from "../../../../components/Typewriter/TypewriterCourse";

const MotionBox = motion(Box);

const skills = [
  { name: "HTML", level: "Advanced", icon: Html },
  { name: "CSS", level: "Advanced", icon: Css },
  { name: "JavaScript", level: "Advanced", icon: Javascript },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Sass", level: "Advanced" },
  { name: "Tailwind", level: "Advanced" },
  { name: "Material UI", level: "Intermediary" },
  { name: "Python", level: "Intermediary" },
  { name: "Java", level: "Intermediary" },
  { name: "C", level: "Basic" },
  { name: "Project Management", level: "Advanced", icon: Construction },
  { name: "English", level: "Advanced", icon: Language },
  { name: "Spanish", level: "Intermediary", icon: Language },
];

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(3),
}));

const StyledCardSkill = styled(Card)(({ theme }) => ({
  flex: "1",
  padding: "0.6rem 0.5rem",
  textAlign: "center",
  marginBottom: theme.spacing(4),

  backgroundColor: theme.palette.primary.light,
  color: theme.palette.secondary.light,

  maxWidth: 800,
  marginLeft: "auto",
  marginRight: "auto",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.light,
    borderRadius: "1rem",
    zIndex: 10,
    transform: "perspective(1000px) rotateY(10deg) rotateX(10deg) scale(1.05)",
    boxShadow: "0 20px 40px rgba(12, 22, 103, 0.3)",
  },
}));

const AboutSkills: React.FC = () => {
  return (
    <>
      <Element name="skills">
        <StyledSkills id="skills" tabIndex={-1} aria-labelledby="about-skills">
          <Container maxWidth="lg">
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Typography
                  textAlign={"center"}
                  fontStyle={"italic"}
                  gutterBottom
                  paddingBottom={4}
                  paddingTop={4}
                >
                  <TypewriterCourse
                    text="My Skills 🚀"
                    variant="h3"
                    delay={40}
                    fontWeight="bold"
                    color="white"
                  />
                </Typography>
                <br />
              </Grid>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <Grid container spacing={2} justifyContent={"center"}>
                {skills.map((skills, index) => (
                  <Grid
                    key={index}
                    alignItems={"center"}
                    size={{ xs: 12, sm: 6, md: 3 }}
                  >
                    <StyledCardSkill variant="elevation">
                      <StarBorderOutlined />

                      <CardContent>
                        <Typography
                          variant="h6"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          {skills.name}
                        </Typography>

                        <Typography variant="h6" textAlign={"center"}>
                          {skills.level}
                        </Typography>
                      </CardContent>
                    </StyledCardSkill>
                  </Grid>
                ))}
              </Grid>
            </MotionBox>
          </Container>
        </StyledSkills>
      </Element>
    </>
  );
};

export default AboutSkills;
