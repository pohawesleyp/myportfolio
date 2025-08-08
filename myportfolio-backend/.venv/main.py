from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI()

# Habilitando o acesso do Front-End
app.add_middleware (
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], #Porta onde o React roda
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Modelo do formulário de contato
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str



# Endpoint POST /contact
@app.post("/contact")
def receive_contact(form: ContactForm):
    print(f"\n📬 Nova mensagem de {form.name} ({form.email}):\n{form.message}\n")
    return {"success": True, "message": "Mensagem recebida com sucesso!"}