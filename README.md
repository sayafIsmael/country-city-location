# country-city-location
[![npm](https://img.shields.io/npm/v/country-city-location)](https://www.npmjs.com/package/country-city-location)
[![npm](https://img.shields.io/npm/l/country-city-location)]()
[![npm](https://img.shields.io/npm/dw/country-city-location)](https://www.npmjs.com/package/country-city-location)


A very usefull package for getting country name, country code, longitude, latitude. Get all cities of a country by country code.

### Why should you use `country-city-location`?

- Easy to use
- No api request
- Offline use


**Live Demo :** 


## Getting Started
### Installation

```
npm install --save country-city-location
```

## Usage

You need to import countries first.

```javascript
import {countries, cities, getCitiesByCountryCode} from 'country-city-location'; 
//or
const {countries, cities, getCitiesByCountryCode} = require('country-city-location'); 

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
    "country": "AD",
    "name": "Sant Julia de Loria",
    "lat": "42.46372",
    "lng": "1.49129"
  },
  {
    "country": "AD",
    "name": "Pas de la Casa",
    "lat": "42.54277",
    "lng": "1.73361"
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
    "country": "US",
    "name": "Bay Minette",
    "lat": "30.88296",
    "lng": "-87.77305"
  },
  {
    "country": "US",
    "name": "Edna",
    "lat": "28.97859",
    "lng": "-96.64609"
  }
]
```