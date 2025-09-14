<img width="1920" height="968" alt="Screenshot (23)" src="https://github.com/user-attachments/assets/9f1d5bc3-cb9e-4b0a-bb8c-8591333e1adb" />
<img width="1920" height="961" alt="Screenshot (24)" src="https://github.com/user-attachments/assets/cc78a8f7-766d-49a9-adb5-2d27796cd9cc" />
<img width="1920" height="970" alt="Screenshot (25)" src="https://github.com/user-attachments/assets/1167556b-bc42-4ecf-9160-0515b1f868ab" />

# 🌦️ Weather Forecast App

A simple Node.js + Express weather application that shows the **current weather and 5-day forecast** for any city using the [WeatherAPI](https://www.weatherapi.com/).

## 🚀 Features
- 🌍 Search weather by city name  
- 🌡️ Shows temperature, humidity, wind speed, and rain chance  
- 🌤️ Dynamic weather icons for sunny, cloudy, rainy, etc.  
- ☔ Umbrella alert if rain probability is high  
- 📍 Default location set to **Bangalore**  
- 🛠️ Built with **Express, EJS, Axios, and dotenv**

---

## 🛠️ Tech Stack
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Axios](https://axios-http.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [WeatherAPI](https://www.weatherapi.com/)

---

## 📂 Project Structure
```
project/
├── public/           # Static assets (CSS, images)
├── views/            # EJS templates
│   └── index.ejs
├── .env              # API key and environment variables
├── index.js          # Main server file
├── package.json
└── README.md
```


## 🔑 Setup & Installation

1. Clone the repository
git clone https://github.com/your-username/weather-forecast-app.git
cd weather-forecast-app

2.Install dependencies
npm install

3.Create a .env file
API_KEY=your_weatherapi_key_here

4.Start the server
node index.js

Open in browser
http://localhost:3000

