import { Box, Typography } from "@mui/material";
import { Element } from "react-scroll";

const AboutHeader: React.FC = () => {
  return (
    <>
      <Element name="about">
        <Box
          mb={4}
          textAlign="center"
          id="about"
          tabIndex={-1}
          aria-labelledby="about-title"
        >
          <Typography variant="h2" fontStyle="italic" fontWeight="bold">
            About Me 👨🏽‍💻
          </Typography>
        </Box>
      </Element>
    </>
  );
};

export default AboutHeader;
