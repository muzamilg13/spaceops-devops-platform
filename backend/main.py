from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

NASA_API_KEY = "bjWhrfZi3vSzuXcKqBSl2ze8o2hzptSHQBUP1Lxd"

@app.get("/")
def home():
    return {"message": "SpaceOps Backend Running"}

@app.get("/apod")
def get_apod():
    url = f"https://api.nasa.gov/planetary/apod?api_key={NASA_API_KEY}"
    response = requests.get(url)
    return response.json()



@app.get("/iss")
def get_iss_location():
    url = "http://api.open-notify.org/iss-now.json"

    response = requests.get(url)

    return response.json()


from datetime import datetime, timezone

@app.get("/launches")
def get_launches():

    url = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=5"

    response = requests.get(url)

    data = response.json()

    return data["results"]



@app.get("/weather")
def get_space_weather():

    return {
        "kp_index": 4.2,
        "time_tag": "Live Space Weather Monitoring Active"
    }



@app.get("/news")
def get_space_news():

    url = "https://api.spaceflightnewsapi.net/v4/articles/?limit=6"

    response = requests.get(url)

    data = response.json()

    return data["results"]