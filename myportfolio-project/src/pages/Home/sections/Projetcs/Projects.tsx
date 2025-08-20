import { Element } from "react-scroll";

import {
  Container,
  styled,
  Typography,
  Grid,
  CardContent,
  Card,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import TypewriterCourse from "../../../../components/Typewriter/TypewriterCourse";

const MotionBox = motion(Box);

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  color: theme.palette.primary.contrastText,
  paddingBottom: "4rem",
}));

const StyledCardProjects = styled(Card)(({ theme }) => ({
  display: "flex",
  height: "100%",
  padding: "0.6rem 0.6rem",
  textAlign: "center",
  // marginBottom: "0.6rem",
  flexDirection: "column",
  borderRadius: "2rem",
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.primary.light,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.light,
    transform: "scale(1.1)",
    borderRadius: "1.4rem",
    zIndex: 10,
    // transform: "perspective(1000px) rotateY(10deg) rotateX(10deg) scale(1.05)",
    boxShadow: "0 20px 40px rgba(215, 216, 227, 0.3)",
  },
}));

const project = [
  {
    title: "'My Family's App'",
    description: "Responsive website in React + TS with animations and deploy",
    tech: "Technology: React, TypeScript, Tailwind, Sass, Python, SQL",
    repository: "https://github.com/pohawesleyp/my-family-app",
    status: "Status: Under construction",
  },
  {
    title: "'GitHub Portfólio'",
    description:
      "GitHub's responsive design, transforming your page into a Portfolio",
    tech: "Technology: HTML, CSS, JavScript",
    repository: "https://github.com/pohawesleyp/pohawesleyp",
    status: "Finished",
  },
  {
    title: "'To-Do List'",
    description: "Responsive To-Do List in React + Tailwind",
    tech: "Technology: React, JavaScript, CSS",
    repository: "https://github.com/pohawesleyp/listaDeTarefas-react-tailwind",
    status: "Finished",
  },
  {
    title: "'Google Glas WebSite'",
    description: "Google site in HTML, CSS and pure JavaScript",
    tech: "Technology: HTML, CSS, JavaScript",
    repository: "https://github.com/pohawesleyp/projeto-aula-google-glass",
    status: "Finished",
  },
  {
    title: "'My Portfolio'",
    description: "Responsive website in React + TS with animations and deploy",
    tech: "Technology: React, TypeScript, Material Ui",
    repository: "https://github.com/pohawesleyp/myportfolio",
    status: "Finished",
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <Element name="projects">
        <StyledAbout id="projects" tabIndex={-1} aria-labelledby="about-title">
          <Container maxWidth="lg">
            <Typography
              textAlign={"center"}
              fontStyle={"italic"}
              //   fontWeight={"bolder"}
              gutterBottom
              paddingBottom={4}
              paddingTop={4}
            >
              <TypewriterCourse
                text="Projects 🚧"
                variant="h2"
                delay={40}
                fontWeight="bold"
                color="white"
              />
            </Typography>
            <br />
            <br />
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <Grid container spacing={3} justifyContent={"center"}>
                {project.map((project, index) => (
                  <Grid
                    key={index}
                    alignItems={"stretch"}
                    size={{ xs: 12, sm: 6, md: 5 }}
                    justifyContent={"space-between"}
                  >
                    <StyledCardProjects>
                      <CardContent>
                        <Typography
                          variant="h4"
                          color="#ffffff"
                          fontFamily={"-moz-initial"}
                          fontWeight={"bold"}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          fontFamily={"cursive"}
                          fontWeight={"bold"}
                        >
                          {project.description}
                        </Typography>
                        <Typography variant="subtitle1" fontWeight={"bold"}>
                          {project.tech}
                        </Typography>
                        <Typography variant="body2" fontWeight={"bold"}>
                          <a
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "inherit",
                              textDecoration: "underline",
                            }}
                          >
                            View Repository
                          </a>
                        </Typography>
                        <Typography
                          variant="h6"
                          fontWeight={"bold"}
                          color="white"
                        >
                          {project.status}
                        </Typography>
                      </CardContent>
                    </StyledCardProjects>
                  </Grid>
                ))}
              </Grid>
            </MotionBox>
          </Container>
        </StyledAbout>
      </Element>
    </>
  );
};

export default Projects;
