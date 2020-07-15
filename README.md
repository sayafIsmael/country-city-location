# country-city-location

[![npm](https://img.shields.io/npm/v/country-city-location)](https://www.npmjs.com/package/country-city-location)
[![npm](https://img.shields.io/npm/l/country-city-location)]()
[![npm](https://img.shields.io/npm/dw/country-city-location)](https://www.npmjs.com/package/country-city-location)

A very usefull package for getting country name, country code, longitude, latitude. Get all cities of a country by country code.

### Why should you use `country-city-location`?

- Easy to use
- No api request
- Offline use

## Getting Started

### Installation

```
npm install --save country-city-location
```

## Usage

You need to import countries first.

```javascript
import {
  countries,
  cities,
  getCitiesByCountryCode,
} from "country-city-location";
//or
const {
  countries,
  cities,
  getCitiesByCountryCode,
} = require("country-city-location");
```

### `countries`

Get all country name and country code in array

```
console.log(countries)
//response example
[
    {"name": "Afghanistan", "code": "AF"},
    {"name": "Aland Islands", "code": "AX"}
]

```

### `All cities`

Get all city with country code, longitude and latitude

```
console.log(cities)

//response example

[
  {
    "countryCode": "AD",
    "city": "Sant Julia de Loria",
    "lat": "42.46372",
    "lng": "1.49129",
    "country":"Andorra"
  },
  {
    "countryCode": "AD",
    "city": "Pas de la Casa",
    "lat": "42.54277",
    "lng": "1.73361",
    "country":"Andorra"
  }
]

```

### `Get Cities By CountryCode`

Put country code in the parameter and get all city with country code, longitude and latitude

```
console.log(getCitiesByCountryCode('US'))

//response example
[
  {
    "city":"Renton",
    "lat":"47.4758",
    "lng":"-122.1905",
    "country":"United States",
    "countryCode":"US"
  },
  {
    "city":"Chehalis",
    "lat":"46.6637",
    "lng":"-122.9647",
    "country":"United States",
    "countryCode":"US"
  }
]
```
