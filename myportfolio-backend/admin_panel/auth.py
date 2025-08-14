from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt, JWTError

SECRET_KEY = "troque-por-uma-chave-secreta"
ALGORITHM = "HS256"
ACESS_TOKEN_EXPIRE_MINUTES = 60     #1 hora

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
ADMIN_USERNAME = "wesley"
ADMIN_PASSWORD_HASH = pwd_context.hash("wesadmin1234*#")

def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)

def authenticate(username: str, password: str):
    return username == ADMIN_USERNAME and verify_password(password, ADMIN_PASSWORD_HASH)

def create_acess_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username == ADMIN_USERNAME:
            return True
    except JWTError:
        return False
    return False