import { styled, Grid, Card } from "@mui/material";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";

const About: React.FC = () => {
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

  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "0.6rem 0.6rem",
    textAlign: "center",
    marginBottom: "0.6rem",
    // backgroundColor: "white",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.light,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.primary.light,
      transform: "scale(1.1)",
      borderRadius: "1rem",
    },
  }));

  return (
    <>
      <StyledAbout>
        <Container maxWidth="md">
          <Grid size={{ xs: 10, md: 4 }}>
            <AboutSection>
              <Typography
                variant="h2"
                fontStyle="italic"
                fontWeight="bold"
                textAlign="center"
              >
                About Me
              </Typography>
            </AboutSection>
          </Grid>
          <Grid
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            pb={3}
            flexWrap="wrap"
            alignItems="stretch"
          >
            <Grid size={{ xs: 9, md: 2.5 }} sx={{ display: "flex" }}>
              <StyledCard
                variant="outlined"
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRadius: "0.3rem",
                }}
              >
                <WorkspacePremiumIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Experience
                </Typography>
                <Typography textAlign="center">+1 years</Typography>
                <Typography textAlign="center">Frontend Development</Typography>
              </StyledCard>
            </Grid>
            <Grid size={{ xs: 9, md: 2.5 }} sx={{ display: "flex" }}>
              <StyledCard
                variant="outlined"
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <SchoolIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Education
                </Typography>
                <Typography textAlign="center">
                  Higher Technology Degree
                </Typography>
                <Typography textAlign="center">
                  Systems Analysis and Development
                </Typography>
              </StyledCard>
            </Grid>
          </Grid>
          <AboutSection>
            <Typography
              variant="body1"
              paragraph
              fontFamily={"serif"}
              fontSize={17}
            >
              Olá! Me chamo Wesley Amaro (mas pode me chamar de Wes). Tenho 28
              anos, moro em São Paulo e sou estudante de programação e
              profissional de T.I há quase 6 anos. Ao longo da minha trajetória,
              atuei em diversas áreas como Desenvolvimento, Suporte Técnico,
              Assistência em T.I., Atendimento e Liderança. Atualmente, curso
              Análise e Desenvolvimento de Sistemas (ADS), com foco em Front-End
              e Full-Stack. Tenho habilidades e certificações em tecnologias web
              como HTML, CSS, JavaScript, TypeScript, Node.js, React, Tailwind,
              Sass, Material UI e Figma. Também estou expandindo minha base Full
              Stack com Python e SQL, além de usar GitHub no meu dia a dia.
              Tenho ainda conhecimento introdutório em linguagens como Java, C,
              C++ e C#. Soma-se a isso mais de 10 anos de experiência no mercado
              de trabalho, sendo 6 deles dedicados à área de tecnologia. Nesse
              tempo, desenvolvi habilidades sólidas de organização, comunicação,
              resolução de problemas e foco em resultados. Durante esse período,
              contribuí para o crescimento da Niu Fibra, uma empresa júnior da
              cidade de Guarujá que hoje integra o grupo Alloha Fibra. Fui
              responsável por otimizar processos e melhorar a experiência do
              cliente com ferramentas como Excel, PowerPoint, Teams, 3CX,
              AnyDesk, além de oferecer suporte a softwares e hardwares
              internos.
            </Typography>
          </AboutSection>

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

            <Typography
              variant="body2"
              paragraph
              fontFamily={"serif"}
              fontWeight="bold"
              fontSize={16}
            >
              Institution: Ada Tech (Brazil)
              <br />
              Course: Front-End Development with a Full Stack Approach
              <br />
              <br />
              Institution: Udemy (Brazil)
              <br />
              Course: Web Development Bootcamp Certificate (Java, Python, C, C++
              and C#)
              <br />
              <br />
              Institution: Santander Open Academy (Brazil)
              <br />
              Course: Python Basics
              <br />
              <br />
              Institution: Udemy (Brazil)
              <br />
              Course: Python Basics
              <br />
              <br />
              Institution: Gustavo Guanabara (Brazil)
              <br />
              Course: Web Development Bootcamp Certificate (HTML, CSS and
              JavaScript)
              <br />
            </Typography>
          </AboutSection>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
