const { getSunrise, getSunset } = require('sunrise-sunset-js');
const findCityByName = require('./utils/findCityBN')

const getCitySunriseSunset = function(cityName) {
    var cityLoc = findCityByName(cityName).loc.coordinates.reverse()
    const sunset = getSunset(cityLoc[0], cityLoc[1]);
    const sunrise = getSunrise(cityLoc[0], cityLoc[1]);
    const result = {
        'sunrise': sunrise,
        'sunset': sunset,
    }
    return result
}

console.log(getCitySunriseSunset('Liverpool'))