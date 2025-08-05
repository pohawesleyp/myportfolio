import {
  styled,
  Grid,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import {
  StarBorderOutlined,
  Html,
  Css,
  Javascript,
  Language,
  Construction,
} from "@mui/icons-material";
import { Element } from "react-scroll";
// import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const skills = [
  { name: "HTML", level: "Advanced", icon: Html },
  { name: "CSS", level: "Advanced", icon: Css },
  { name: "JavaScript", level: "Advanced", icon: Javascript },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Sass", level: "Advanced" },
  { name: "Tailwind", level: "Advanced" },
  { name: "Material UI", level: "Intermediary" },
  { name: "Python", level: "Intermediary" },
  { name: "Java", level: "Intermediary" },
  { name: "C", level: "Basic" },
  { name: "Project Management", level: "Advanced", icon: Construction },
  { name: "English", level: "Advanced", icon: Language },
  { name: "Spanish", level: "Intermediary", icon: Language },
];

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  color: theme.palette.primary.contrastText,
  paddingBottom: "4rem",
  //   paddingBottom: "30%",
  //   [theme.breakpoints.up("sm")]: {
  //     paddingTop: "2rem",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     paddingTop: "0",
  //   },
}));

const StyledCardSkill = styled(Card)(({ theme }) => ({
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
    // transform: "scale(1.1)",
    borderRadius: "1rem",
    zIndex: 10,
    transform: "perspective(1000px) rotateY(10deg) rotateX(10deg) scale(1.05)",
    boxShadow: "0 20px 40px rgba(12, 22, 103, 0.3)",
  },
}));

const AboutSkills: React.FC = () => {
  return (
    <>
      <Element name="skills">
        <StyledSkills id="skills" tabIndex={-1} aria-labelledby="about-title">
          <Container maxWidth="lg">
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography
                variant="h3"
                textAlign={"center"}
                fontStyle={"italic"}
                fontWeight={"bolder"}
                gutterBottom
                paddingBottom={4}
                paddingTop={4}
                gap={2}
              >
                My Skills 🚀
              </Typography>
            </Grid>
            <Grid container spacing={2} justifyContent={"center"}>
              {skills.map((skills, index) => (
                <Grid
                  key={index}
                  alignItems={"center"}
                  size={{ xs: 12, sm: 6, md: 3 }}
                >
                  <StyledCardSkill variant="elevation">
                    <StarBorderOutlined />

                    <CardContent>
                      <Typography
                        variant="h6"
                        textAlign={"center"}
                        fontWeight={"bold"}
                      >
                        {skills.name}
                      </Typography>

                      <Typography variant="h6" textAlign={"center"}>
                        {skills.level}
                      </Typography>
                    </CardContent>
                  </StyledCardSkill>
                </Grid>
              ))}
            </Grid>
          </Container>
        </StyledSkills>
      </Element>
    </>
  );
};

export default AboutSkills;
