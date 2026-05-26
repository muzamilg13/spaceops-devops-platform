from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import os

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# NASA API KEY FROM KUBERNETES SECRET
API_KEY = os.getenv("NASA_API_KEY")

# =========================
# NASA APOD
# =========================

@app.get("/api/apod")
def get_apod():

    url = f"https://api.nasa.gov/planetary/apod?api_key={API_KEY}"

    response = requests.get(url)

    return response.json()


# =========================
# ISS TRACKER
# =========================

@app.get("/api/iss")
def get_iss():

    url = "http://api.open-notify.org/iss-now.json"

    response = requests.get(url)

    return response.json()


# =========================
# SPACE LAUNCHES
# =========================

@app.get("/api/launches")
def get_launches():

    url = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/"

    response = requests.get(url)

    return response.json()


# =========================
# SPACE WEATHER
# =========================

@app.get("/api/weather")
def get_space_weather():

    url = "https://services.swpc.noaa.gov/json/planetary_k_index_1m.json"

    response = requests.get(url)

    return response.json()


# =========================
# SPACE NEWS
# =========================

@app.get("/api/news")
def get_news():

    url = "https://api.spaceflightnewsapi.net/v4/articles/"

    response = requests.get(url)

    return response.json()