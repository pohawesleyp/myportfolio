import React from "react";
import { useState } from "react";
import axios from "axios";
import { ContactPage } from "@mui/icons-material";
import {
  Typography,
  Container,
  Card,
  CardHeader,
  CardContent,
  Grid,
  CardActions,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material";
// import theme from "../../theme";
import Button from "@mui/material/Button";

const StyledForm = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  color: theme.palette.primary.contrastText,
  height: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  overflowX: "hidden",

  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
    boxSizing: "border-box",
    overflowX: "hidden",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingBottom: "2rem",
  },
}));

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [form, setform] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  // Atualizando os campos do Form

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  //Validação simples
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setOpenSnackbar(true);
      return;
    }

    if (!isValidEmail(form.email)) {
      setStatus("error");
      setOpenSnackbar(true);
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      const response = await axios.post("http://localhost:8000/contact", form, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setStatus("success");
        setOpenSnackbar(true);
        setform({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      setStatus("error");
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StyledForm id="contactForm" tabIndex={-1} aria-labelledby="form-contact">
        <Container maxWidth="sm">
          <Card elevation={4}>
            <CardHeader
              avatar={<ContactPage color="primary" />}
              title={
                <Typography variant="h5" fontWeight={"bold"}>
                  Contact Me
                </Typography>
              }
              subheader="Fill in the fields below to send me a message"
            />
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      disabled={loading}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      type="email"
                      label="E-mail"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      disabled={loading}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      disabled={loading}
                      required
                      multiline
                      minRows={4}
                    />
                  </Grid>
                </Grid>
                <CardActions sx={{ justifyContent: "flex-end", mt: 2 }}>
                  <Button type="submit" variant="contained" loading={loading}>
                    Enviar
                  </Button>
                </CardActions>
                <ContactPage />
              </form>
            </CardContent>
          </Card>
        </Container>

        {status && (
          <Snackbar
            open={openSnackbar}
            autoHideDuration={4000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={status}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {status === "success"
                ? "Message sent successfully!🎉"
                : "An error occurred while sending. Please try again."}
            </Alert>
          </Snackbar>
        )}
      </StyledForm>
    </>
  );
};

export default ContactForm;
