from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.orm import sessionmaker, declarative_base


app = FastAPI()

# Habilitando o acesso do Front-End
app.add_middleware (
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], #Porta onde o React roda
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = "sqlite:///./contacts.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100))
    message = Column(Text)

Base.metadata.create.all(bind=engine)

#Modelo do formulário de contato
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str



# Endpoint POST /contact
@app.post("/contact")
def receive_contact(form: ContactForm):
    db = SessionLocal()
    contact = Contact(name=form.name, email=form.email, message=form.message)
    db.add(contact)
    db.commit()
    db.refresh(contact)
    db.close()
    print(f"\n📬 Nova mensagem de {form.name} ({form.email}):\n{form.message}\n")
    return {"success": True, "message": "Mensagem recebida com sucesso!"}