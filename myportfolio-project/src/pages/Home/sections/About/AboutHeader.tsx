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
}));

const AboutHeader: React.FC = () => {
  return (
    <>
      <Element name="about">
        <AboutSectionHeader id="" tabIndex={-1} aria-labelledby="about-header">
          <Typography variant="h2" fontStyle="italic" fontWeight="bold">
            About Me 👨🏽‍💻
          </Typography>
        </AboutSectionHeader>
      </Element>
    </>
  );
};

export default AboutHeader;
