import { Box, Typography } from "@mui/material";

const AboutHeader: React.FC = () => {
  return (
    <>
      <Box mb={4} textAlign="center">
        <Typography variant="h2" fontStyle="italic" fontWeight="bold">
          About Me
        </Typography>
      </Box>
    </>
  );
};

export default AboutHeader;
