import { Box, Typography } from "@mui/material";
import { Element } from "react-scroll";
import { styled } from "@mui/material";

const AboutSectionHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: "center",
  padding: theme.spacing(3),
  maxWidth: 800,
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(6), // aumenta espaço em telas pequenas
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: theme.spacing(8), // ajuste para telas intermediárias
  },
}));

const AboutHeader: React.FC = () => {
  return (
    <>
      <Element name="about">
        <AboutSectionHeader id="" tabIndex={-1} aria-labelledby="about-header">
          <Typography variant="h3" fontStyle="italic" fontWeight="bold">
            About Me 👨🏽‍💻
          </Typography>
        </AboutSectionHeader>
      </Element>
    </>
  );
};

export default AboutHeader;
