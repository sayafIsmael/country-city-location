const allcountries =  require('country-city-location/country')
const allCities =  require('country-city-location/cities')

const getCountries = () =>{
    return allcountries
}

const getcities = () =>{
    return allCities
}

const getCitiesByCountryCode = (countryCode) =>{
    return cities.filter(city => city.countryCode.toLowerCase() === countryCode.toLowerCase())
}

const countries = getCountries()
const cities = getcities()

module.exports.countries = countries;
module.exports.cities = cities;
module.exports.getCitiesByCountryCode = getCitiesByCountryCode;

