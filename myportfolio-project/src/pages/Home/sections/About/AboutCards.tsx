import { styled, Grid, Card, Box } from "@mui/material";
import { Typography } from "@mui/material";
// import { Box } from "@mui/system";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const StyledCard = styled(Card)(({ theme }) => ({
  flex: "1",
  padding: theme.spacing(3),
  maxWidth: 800,
  textAlign: "center",
  marginBottom: "0.6rem",
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.secondary.light,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.light,
    transform: "scale(1.2)",
    borderRadius: "1.5rem",
    zIndex: 10,
  },
}));

const AboutCards: React.FC = () => {
  return (
    <>
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          pb={3}
          flexWrap="wrap"
        >
          <Grid size={{ xs: 9, md: 2.5 }} sx={{ display: "flex" }}>
            <StyledCard variant="outlined">
              <WorkspacePremiumIcon />
              <Typography fontWeight={600}>Experience</Typography>
              <Typography>+1 years</Typography>
              <Typography>Frontend Development</Typography>
            </StyledCard>
          </Grid>
          <Grid size={{ xs: 9, md: 2.5 }} sx={{ display: "flex" }}>
            <StyledCard variant="outlined">
              <SchoolIcon />
              <Typography fontWeight={600}>Education</Typography>
              <Typography>Higher Technology Degree</Typography>
              <Typography>Systems Analysis and Development</Typography>
            </StyledCard>
          </Grid>
        </Grid>
      </MotionBox>
    </>
  );
};

export default AboutCards;
