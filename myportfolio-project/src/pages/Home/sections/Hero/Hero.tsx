import React, { Suspense } from "react";
import { styled, Typography, Box, Menu, MenuItem } from "@mui/material";
import wesleyPerfil from "../../../../assets/images/wesley-perfil.jpg";

import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import DownloadIcon from "@mui/icons-material/Download";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ButtonRoot from "../../../../components/StyledButton/StyledButton";
import Typewriter from "../../../../components/Typewriter/Typewriter";
import { MarkEmailUnread } from "@mui/icons-material";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "75%",
  borderRadius: "50%",
  border: `0.1rem solid ${theme.palette.primary.contrastText}`,
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(5), // aumenta espaço em telas pequenas
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: theme.spacing(6), // ajuste para telas intermediárias
  },
}));

const AnimatedBackground = React.lazy(
  () => import("../../../../components/AnimatedBackground/AnimatedBackground")
);

const HERO_CV_PATH = "/resume.pdf";

const Hero: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleContactClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  // Download simples: usa link com download (funciona bem com arquivos em /public)
  const handleDownloadCV = () => {
    // cria um <a> e dispara o download automaticamente
    const link = document.createElement("a");
    link.href = HERO_CV_PATH;
    link.download = "Wesley_Amaro_CV.pdf"; // nome do arquivo quando baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Mailto e WhatsApp
  const email = "wesley.amaro.1@gmail.com";
  const emailSubject = encodeURIComponent("Contato via Portfólio");
  const emailBody = encodeURIComponent(
    "Olá Wesley, vi seu Portfólio e gostaria de..."
  );

  // WhatsApp:
  const whatsappNumber = "5513981726612";
  const whatsappText = encodeURIComponent(
    "Olá Wesley, vi seu Portfólio e gostaria de conversar..."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <>
      <Element name="home">
        <StyledHero aria-labelledby="Home-Page">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 5 }}>
                <MotionBox
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                >
                  <Box position="relative" pb={3}>
                    <Box
                      position="absolute"
                      width={"150%"}
                      top={-100}
                      right={0}
                      sx={{ zIndex: 0 }}
                    >
                      <Suspense fallback={<div />}>
                        <AnimatedBackground />
                      </Suspense>
                    </Box>
                    <Box
                      textAlign="center"
                      position="relative"
                      sx={{ zIndex: 1 }}
                    >
                      <StyledImg src={wesleyPerfil} alt="Wesley-Image" />
                    </Box>
                  </Box>
                </MotionBox>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <MotionBox
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                >
                  <Typography
                    color="primary.contrastText"
                    variant="h1"
                    textAlign="center"
                    pb={2}
                  >
                    Wesley Amaro
                  </Typography>
                  <Typewriter
                    text="I'm a Front-End Developer"
                    delay={115}
                    variant="h2"
                    color="white"
                  ></Typewriter>

                  <Grid
                    container
                    display="flex"
                    justifyContent="center"
                    spacing={3}
                    paddingTop={3}
                  >
                    <Grid
                      size={{ xs: 10, md: 4 }}
                      display="flex"
                      justifyContent="center"
                    >
                      <ButtonRoot
                        onClick={handleDownloadCV}
                        arial-label="Download-CV"
                      >
                        <DownloadIcon />
                        <Typography>Download CV</Typography>
                      </ButtonRoot>
                    </Grid>

                    <Grid
                      size={{ xs: 10, md: 4 }}
                      display="flex"
                      justifyContent="center"
                    >
                      <ButtonRoot
                        onClick={handleContactClick}
                        arial-control={open ? "contact-menu" : undefined}
                        aria-haspopup="true"
                        aria-expaned={open ? "true" : undefined}
                        arial-label="Contact-Me"
                      >
                        <MailIcon />
                        <Typography>Contact Me</Typography>
                      </ButtonRoot>
                    </Grid>
                    <Menu
                      id="contact-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;
                          handleClose();
                        }}
                      >
                        <MarkEmailUnread
                          fontSize="small"
                          style={{ marginRight: 8 }}
                        />
                        E-mail
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          window.open(
                            whatsappLink,
                            "_blank",
                            "noopener noreferrer"
                          );
                          handleClose();
                        }}
                      >
                        <WhatsAppIcon
                          fontSize="small"
                          style={{ marginRight: 8 }}
                        />
                        WhatsApp
                      </MenuItem>
                    </Menu>
                  </Grid>
                </MotionBox>
              </Grid>
            </Grid>
          </Container>
        </StyledHero>
      </Element>
    </>
  );
};

export default Hero;
