import allcountries from './country.json'
import allCities from './cities.json'

const getCountries = () =>{
    return allcountries
}

const getcities = () =>{
    return allCities
}

const getCityByCountryCode = (countryCode) =>{
    return cities.filter(city => city.country.toLowerCase() === countryCode.toLowerCase())
}

const countries = getCountries()
const cities = getcities()

export {countries, cities, getCityByCountryCode}