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
console.log(countries) // All country name and country code in array

```

```
### `All cities`
console.log(cities) //All city with country code, longitude and latitude

### `Get Cities By CountryCode`
console.log(getCitiesByCountryCode('US')) //Put country code in the parameter. Get all city with country code, longitude and latitude

