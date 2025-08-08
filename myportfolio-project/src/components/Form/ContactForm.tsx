import React from "react";
import { useState } from "react";
import axios from "axios";
import { ContactPage } from "@mui/icons-material";
import { IconButton, Typography, Grid, Container } from "@mui/material";
import { styled } from "@mui/material";
import theme from "../../theme";

const StyledForm = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  color: theme.palette.primary.contrastText,
  // paddingBottom: "4rem",
  // display: "flex",
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
      alert("Por favor, preencha todos os campos!");
      return;
    }

    if (!isValidEmail(form.email)) {
      alert("Por favor, insira um email valido!");
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      const response = await axios.post("http://localhost:8000/contact", form);

      if (response.status === 200) {
        setStatus("success");
        setform({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StyledForm id="contactForm" tabIndex={-1} aria-labelledby="form-contact">
        <Container maxWidth="lg">
          <Grid size={{ xs: 12, md: 5 }}>
            <form
              onSubmit={handleSubmit}
              style={{ maxWidth: 400, margin: "auto" }}
            >
              <ContactPage />
              <Typography variant="h2">Contact</Typography>
              <label>
                Name: <br />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </label>
              <br /> <br />
              <label>
                Email: <br />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </label>
              <br /> <br />
              <label>
                Message: <br />
                <input
                  type="text"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </label>
              <br /> <br />
              <IconButton
                type="submit"
                disabled={loading}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.secondary.main,
                  borderRadius: "0.5rem",
                  "&:hover": {
                    transform: "scale(1.3)",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    backgroundColor: theme.palette.secondary.main,
                    color: "white",
                    borderRadius: "1rem",
                    fontWeight: "bold",
                  },
                }}
              >
                {loading ? "Enviado..." : "Enviar"}
              </IconButton>
              {status === "success" && (
                <p style={{ color: "green" }}>
                  Mensagem enviada com sucesso!🎉
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "red" }}>
                  Ocorreu um erro ao enviar. Tente novamente em alguns
                  minutos.🎉
                </p>
              )}
            </form>
          </Grid>
        </Container>
      </StyledForm>
    </>
  );
};

export default ContactForm;
