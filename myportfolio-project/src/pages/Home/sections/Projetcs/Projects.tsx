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
import React from "react";

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

  flexDirection: "column",
  borderRadius: "2rem",
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.primary.light,

  WebkitTransition: "transform 0.3s ease, box-shadow 0.3s ease",
  MozTransition: "transform 0.3s ease, box-shadow 0.3s ease",
  transition: "transform 0.3s ease 0.3s ease-out, box-shadow 0.3s ease",
  "&:hover": {
    transform: "perspective(1000px) rotateY(10deg) rotateX(10deg) scale(1.05)",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.light,
    borderRadius: "2.5rem",
    zIndex: 10,
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
    status: "Status: Finished",
  },
  {
    title: "'To-Do List'",
    description: "Responsive To-Do List in React + Tailwind",
    tech: "Technology: React, JavaScript, CSS",
    repository: "https://github.com/pohawesleyp/listaDeTarefas-react-tailwind",
    status: "Status: Finished",
  },
  {
    title: "'Google Glas WebSite'",
    description: "Google site in HTML, CSS and pure JavaScript",
    tech: "Technology: HTML, CSS, JavaScript",
    repository: "https://github.com/pohawesleyp/projeto-aula-google-glass",
    status: "Status: Finished",
  },
  {
    title: "'My Portfolio'",
    description: "Responsive website in React + TS with animations and deploy",
    tech: "Technology: React, TypeScript, Material Ui",
    repository: "https://github.com/pohawesleyp/myportfolio",
    status: "Status: Finished",
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
              gutterBottom
              paddingBottom={4}
              paddingTop={4}
            >
              <TypewriterCourse
                text="Projects 🚧"
                variant="h3"
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
                          variant="h6"
                          color="theme.palette.primary.light"
                          fontFamily={""}
                          fontWeight={"bold"}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          fontFamily={""}
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
                          variant="subtitle2"
                          fontWeight={"bold"}
                          color="theme.palette.primary.light"
                          sx={{
                            p: 0.5, // padding opcional pra hover não ficar estranho
                            borderRadius: 4, // borda arredondada no hover (opcional)
                            cursor: "pointer", // mostra que é interativo
                            transition: "background-color 0.3s ease", // suaviza a transição
                            "&:hover": {
                              color: "white",
                              backgroundColor: "secondary.light", // muda o fundo no hover
                            },
                          }}
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
