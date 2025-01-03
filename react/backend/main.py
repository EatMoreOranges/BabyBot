from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins =[
    #your frontend url
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"]
)
@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.get("/message")
def send_message():
    return "The King is seated. The books are open. 🙌"


# backend instructions 
# 1. send user response to LLM and return LLM answer to user
# 2. alter Mr. Krabs' crabiness level in the LLM responses (📌figure out how to rep that in LLM params)
#     - default crabiness level 5 
#     - low crabiness level is like he's talking to he's daughter Pearl = 1
#     - high crabiness level is as if you send all his money = 10
# 3. customize which LLM model you'd like to use and how to connect with the model
#     - gemini, GPT, transformer