from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import json
from typing import List

app = FastAPI()

DATA_FILE = "dataset.json"

# Function to load JSON data
def load_data():
    with open(DATA_FILE, "r") as f:
        return json.load(f)

# Function to save JSON data
def save_data(data):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=2)

# Pydantic model for request
class BookingRequest(BaseModel):
    turf_id: int
    date: str          
    time: str       

@app.post("/book-slot/")
def book_slot(request: BookingRequest):
    data = load_data()

    # Find turf by ID
    turf = next((t for t in data if t["id"] == request.turf_id), None)
    if not turf:
        raise HTTPException(status_code=404, detail="Turf not found")

    # Check for matching slot
    for slot in turf["slots"]:
        if slot["date"] == request.date and slot["time"] == request.time:
            if slot["is_booked"]:
                return {"success": False, "message": "Slot already booked"}
            else:
                slot["is_booked"] = True
                save_data(data)
                return {"success": True, "message": "Slot booked successfully"}

    raise HTTPException(status_code=404, detail="Slot not found for the given date and time")

@app.get("/")
def root():
    return {"message":"API running"}
