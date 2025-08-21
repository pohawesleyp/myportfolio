import { styled, Grid, Link } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import React, { Suspense } from "react";

const MotionBox = motion(Box);

const AnimatedBackground = React.lazy(
  () => import("../../../../components/AnimatedBackground/AnimatedBackground")
);

const AboutSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  textAlign: "left",
  padding: theme.spacing(3),
  maxWidth: 800,
  marginLeft: "auto",
  marginRight: "auto",

  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
}));

const AboutDescription: React.FC = () => {
  return (
    <>
      <AboutSection id="" tabIndex={-1} aria-labelledby="about-description">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h5"
              gutterBottom
              fontWeight="bold"
              fontSize={16}
              textAlign="center"
            >
              Olá, eu sou Wesley Amaro 👋
              <br />
              <br />
            </Typography>
            <Typography
              variant="body1"
              paragraph
              textAlign={"justify"}
              sx={{ mb: 2 }}
            >
              Tenho 28 anos, moro em São Paulo e sou apaixonado por dar vida a
              interfaces incríveis. Sou estudante de Analise e Desenvolvimento
              de Sistemas (ADS), Dev Front-End por vocação, Full-Stack em
              evolução e curioso profissional de T.I.
            </Typography>
            <br />
            <Typography variant="subtitle1" fontWeight={"bold"} gutterBottom>
              Experiência Profissional ⚡
            </Typography>
            <Box position="relative" pb={3}>
              <Box
                position="absolute"
                minWidth={"80%"}
                top={-100}
                right={0}
                sx={{
                  zIndex: 0,
                  filter: "blur(0.1rem)", // dá um leve desfoque
                  top: { xs: -50, sm: -80, md: -100 }, // top ajusta conforme a tela
                  right: 0,
                }}
              >
                <Suspense fallback={<div />}>
                  <AnimatedBackground />
                </Suspense>
              </Box>
            </Box>

            <Typography
              variant="body1"
              paragraph
              textAlign={"justify"}
              sx={{ mb: 2 }}
            >
              Tenho mais de 10 anos de experiência no mercado de trabalho, sendo
              6 dedicados à área de tecnologia. Ao longo desse tempo, desenvolvi
              habilidades profissionais sólidas com destaque para organização,
              comunicação, resolução de problemas e foco em resultados. Durante
              esse período, contribuí diretamente para o crescimento da Niu
              Fibra (hoje parte do grupo Alloha Fibra), otimizando processos e
              melhorando a experiência do cliente por meio de ferramentas como
              Excel, PowerPoint, Teams, 3CX, AnyDesk, além do suporte a
              softwares e hardwares utilizados internamente pela empresa.
            </Typography>

            <br />
            <Typography variant="subtitle1" fontWeight={"bold"} gutterBottom>
              Formação 💻
            </Typography>
            <Typography
              variant="body1"
              paragraph
              textAlign={"justify"}
              sx={{ mb: 2 }}
            >
              Estou finalizando minha graduação em ADS com foco em Front-End,
              porém estou migrando pra Full Stack. Tenho certificações em
              tecnologias web: HTML, CSS, JavaScript, TypeScript, Node.js,
              React, Tailwind, Sass, Material UI e Figma. Além de certificação
              em noções de linguagens de programação em: Python, Java, C, C++ e
              C#.
              <br />
              Minha base Full Stack está sendo desenvolvida com Python e SQL,
              além de fazer o uso diário do GitHub.
            </Typography>
            <Typography variant="subtitle1" fontWeight={"bold"} gutterBottom>
              Objetivos 📚
            </Typography>
            <Typography variant="body1" paragraph textAlign="justify">
              Meu objetivo é seguir evoluindo como desenvolvedor, criando
              soluções que impactem pessoas e negócios de verdade. Confira meus{" "}
              <Link
                href="https://github.com/pohawesleyp?tab=repositories"
                target="_blank"
                underline="hover"
                color="white"
                fontWeight={"bold"}
              >
                outros Portfólios
              </Link>
              , me siga no{" "}
              <Link
                href="https://github.com/pohawesleyp"
                target="_blank"
                rel="noopener"
                underline="hover"
                color="white"
                fontWeight={"bold"}
              >
                {" "}
                GitHub{" "}
              </Link>
              e entre em contato comigo no{" "}
              <Link
                href="https://www.linkedin.com/in/wesley-amaro"
                target="_blank"
                underline="hover"
                color="white"
                fontWeight={"bold"}
              >
                {" "}
                Linkedin
              </Link>
            </Typography>
          </Grid>
        </MotionBox>
      </AboutSection>
    </>
  );
};

export default AboutDescription;
