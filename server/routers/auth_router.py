from typing import TypedDict, Optional

from fastapi import APIRouter

from test_data import users

router = APIRouter()


class FormUser(TypedDict):
    login: str
    password: str


class AuthResponse(TypedDict):
    status: bool
    message: Optional[str]


@router.post("/auth")
async def auth(user_data: FormUser) -> AuthResponse:
    return {"item_id": 123, "name": f"Item {123}"}


@router.post("/items/")
async def create_item(name: str):
    return {"name": name, "message": "Item created successfully"}
