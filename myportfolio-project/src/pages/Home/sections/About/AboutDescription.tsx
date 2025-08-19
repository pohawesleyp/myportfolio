import { styled, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

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
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <AboutSection id="" tabIndex={-1} aria-labelledby="about-title">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="body2"
              paragraph
              fontFamily="serif"
              fontWeight="bold"
              fontSize={16}
              textAlign="center"
              flexDirection="column"
            >
              Prazer, eu sou Wesley Amaro (mas pode me chamar de Wes). Tenho 28
              anos, moro em São Paulo e sou apaixonado por dar vida a interfaces
              incríveis. Sou estudante de ADS, dev Front-End por vocação,
              Full-Stack em evolução e curioso profissional de T.I. há 6 anos.
              <br />
              <br />
              Ao longo da minha trajetória profissional, atuei em áreas como
              Desenvolvimento, Suporte Técnico, Assistência em T.I., Atendimento
              e Liderança. Essa bagagem me deu visão ampla, foco em resultados e
              jogo de cintura pra resolver qualquer pepino.
              <br />
              <br />
              Atualmente finalizando minha graduação em Análise e
              Desenvolvimento de Sistemas (ADS), com foco em Front-End e
              Full-Stack. Tenho certificações em tecnologias web como HTML, CSS,
              JavaScript, TypeScript, Node.js, React, Tailwind, Sass, Material
              UI e Figma.
              <br />
              <br />
              Também estou expandindo minha base Full Stack com Python e SQL, e
              faço do GitHub meu companheiro diário. De quebra, tenho noções de
              linguagens como Java, C, C++ e C#, porque conhecer várias
              linguagens é sempre poder de fogo extra.
              <br />
              <br />
              São mais de 10 anos de experiência no mercado, 6 deles dedicados à
              tecnologia. Nesse tempo, contribuí para o crescimento da Niu Fibra
              (empresa júnior de Guarujá que hoje integra o grupo Alloha Fibra),
              otimizando processos, criando soluções e melhorando a experiência
              dos clientes com ferramentas como Excel, PowerPoint, Teams, 3CX,
              AnyDesk, além de muito suporte a softwares e hardwares internos.
              <br />
              <br />
              Meu objetivo? Seguir evoluindo como desenvolvedor, criando
              soluções que impactem pessoas e negócios de verdade.
            </Typography>
          </Grid>
        </AboutSection>
      </MotionBox>
    </>
  );
};

export default AboutDescription;
