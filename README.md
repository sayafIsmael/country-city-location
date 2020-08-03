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
   {
        "Name": "United States of America",
        "Alpha2Code": "US",
        "Alpha3Code": "USA",
        "NativeName": "United States",
        "Region": "Americas",
        "SubRegion": "Northern America",
        "Latitude": "38",
        "Longitude": "-97",
        "Area": 9629091,
        "NumericCode": 840,
        "NativeLanguage": "eng",
        "CurrencyCode": "USD",
        "CurrencyName": "United States dollar",
        "CurrencySymbol": "$",
        "Flag": "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/usa.svg",
        "FlagPng": "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/usa.png"
    }
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