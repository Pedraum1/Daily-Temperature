# Daily Temperature

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

This is project is a integrated monitoring system of a room's temperature, it fetches data from an API that's feeded with an ESP32 system installed in the room, .

## Getting Started <a name = "getting_started"></a>

First, install the dependencies:

```
npm install
```

Then, run the development server:

```
npm run dev
```

Open http://localhost:5173 with your browser to see the result. Initially you will see a loading page with an generic room data in Fortaleza-CE.

## Tracking Data

To track your personal data, make sure the API fetching function is linked to your API, the structure provided by the ESP32 should be like the one bellow:

```
{
    "temperature":"current temperature",
    "Humidity":"Humidity",
}
```

The expected data from the weather in the region is provided by AccuWeather APIs, to understand how the API works, see the API documentation provided here: https://developer.accuweather.com/apis

