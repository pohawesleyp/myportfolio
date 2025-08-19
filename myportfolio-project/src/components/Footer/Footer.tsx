import {
  Container,
  IconButton,
  Stack,
  styled,
  Typography,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import theme from "../../theme";
import { WhatsApp } from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: "2rem",
  textAlign: "center",
}));

const iconButtonStyle = {
  transition: "transform 0.3s ease, color 0.3s ease",
  "&:hover": {
    transform: "scale(1.5)",
    color: `${theme.palette.secondary.main}`, // Ou uma cor específica, se quiser dar contraste
  },
};

const Footer: React.FC = () => {
  return (
    <>
      <StyledFooter>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              flexWrap="wrap"
              mb={2}
            >
              <IconButton
                href="https://github.com/pohawesleyp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={iconButtonStyle}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/wesley-amaro/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                sx={iconButtonStyle}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="mailto:wesley.amaro.1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
                sx={iconButtonStyle}
              >
                <EmailIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://wa.me/5513981726612?text=Olá%20Wesley,%20gostaria%20de%20entrar%20em%20contato%20com%20você!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={iconButtonStyle}
              >
                <WhatsApp fontSize="large" />
              </IconButton>
            </Stack>
            <Typography
              variant="body2"
              color="primary.contrastText"
              textAlign="center"
              fontWeight={"bold"}
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
              }}
              textTransform={"capitalize"}
            >
              © 2025 Wesley Amaro — All rights reserved.
            </Typography>
          </MotionBox>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
