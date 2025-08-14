from fastapi import APIRouter, Request, Form, Depends, Response, Cookie
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
from main import get_db, Contact
from .auth import authenticate, create_acess_token, verify_token
from datetime import timedelta

router = APIRouter()
templates = Jinja2Templates(directory="admin_panel/templates")

COOKIE_NAME = "admin_token"

# Login page
@router.get("/admin", response_class=HTMLResponse)
def login_page(request: Request, token: str | None = Cookie(None)):
    if token and verify_token(token):
        return RedirectResponse(url="/admin/dashboard", status_code=302)
    return templates.TemplateResponse("login.html", {"request": request})

# Process login
@router.get("/admin", response_class=HTMLResponse)
def login_post(request: Request, response: Response, username: str = Form(...), password: str = Form (...)):
    if authenticate(username, password):
        token = create_acess_token({"subr": username}, expires_delta=timedelta(hours=1))
        response = RedirectResponse(url="/admin/dashboard", status_code=302)
        response.set_cookie(key=COOKIE_NAME, value=token, httponly=True, max_age=3600)
        return response
    return templates.TemplateResponse("login.html", {"request": request, "error": "Credenciais invalidas"})


# Função para checar token
def require_login(token: str | None = Cookie(None)):
    if not token or not verify_token(token):
        raise RedirectResponse(url="/admin", status_code=302)
    


# Dashboard com busca e paginação
@router.get("/admin/dashboard", response_class=HTMLResponse)
def dashboard(request: Request, token: str | None = Cookie(None), q: str = "", page: int = 1, db: Session = Depends(get_db)):
    if not token or not verify_token(token):
        return RedirectResponse(url="/admin", status_code=302)
    
    per_page = 5
    query = db.query(Contact)
    if q:
        query = query.filter(Contact.name.contains(q) | Contact.email.contains(q))

    total = query.count()
    contacts = query.offset((page - 1) *  per_page).limit(per_page).all()
    total_pages = (total + per_page - 1) // per_page

    return templates.TemplateResponse(
        "dashboard.html",
        {
            "request": request,
            "contacts": contacts,
            "q": q,
            "page": page,
            "total_pages": total_pages,
        }
    )

# Deletar contato
@router.get("/admin/delete/{contact_id}")
def delete_contact(contact_id: int, token: str | None = Cookie(None), db: Session = Depends(get_db)):
    if not token or not verify_token(token):
        return RedirectResponse(url="/admin", status_code=302)
    
    contact = db.query(Contact).filter(Contact.id == contact_id).first()
    if contact:
        db.delete(contact)
        db.commit()
    return RedirectResponse(url="/admin/dashboard", status_code=302)


# Logout
@router.get("/admin/logout")
def logout (response: Response):
    response = RedirectResponse(url="/admin", status_code=302)
    response.delete_cookie(COOKIE_NAME)
    return response