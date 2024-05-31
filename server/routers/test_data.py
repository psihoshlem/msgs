from typing import TypedDict


class FormUser(TypedDict):
    login: str
    password: str


users: list[User] = [{"login": "senks", "password": "qwert"}]
