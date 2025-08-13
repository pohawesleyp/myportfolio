from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.ext.declarative import declarative_base


# ============ Configuração do banco =============
DATABASE_URL = "sqlite:///./contacts.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


# Modelo do banco
class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    message = Column(Text, nullable=False)

# Criação das tabelas no banco
Base.metadata.create_all(bind=engine)


# ============ FastAPI e Middleware =============
app = FastAPI()


# Habilitando o acesso do Front-End
app.add_middleware (
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], #Porta onde o React roda
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


#Modelo do formulário de contato ### ============ Schemas Pydantic ============
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactResponse(ContactForm):
    id: int

    class Config:
        orm_mode = True

# ============ Dependência ============
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

#Endpoint POST /contact
@app.post("/contact")
def receive_contact(form: ContactForm, db: Session = Depends(get_db)):
    contact = Contact(name=form.name, email=form.email, message=form.message)
    db.add(contact)
    db.commit()
    db.refresh(contact)
    print(f"\n📬 Nova mensagem de {form.name} ({form.email}):\n{form.message}\n")
    return {"success": True, "message": "Mensagem recebida com sucesso!"}

@app.get("/contacts", response_model=list[ContactResponse])
def list_contacts(db: Session = Depends(get_db)):
    return db.query(Contact).all()