import { styled, Grid, Card } from "@mui/material";
import { Typography } from "@mui/material";
// import { Box } from "@mui/system";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";

// const StyledAbout = styled("div")(({ theme }) => ({
//   backgroundColor: theme.palette.secondary.contrastText,
//   minHeight: "100vh",
//   display: "flex",
//   alignItems: "center",
//   color: theme.palette.primary.contrastText,
// }));

// const AboutSection = styled(Box)(({ theme }) => ({
//   marginBottom: theme.spacing(4),
//   textAlign: "left",
// }));

const StyledCard = styled(Card)(({ theme }) => ({
  flex: "1",
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
    zIndex: 10,
  },
}));

const AboutCards: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default AboutCards;
