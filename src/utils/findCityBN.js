const all_the_cities = require('all-the-cities')

const findCityByName = function(cityName) {
    const result = all_the_cities.find(function(item) {
        return item.name === cityName
    })

    return result
}

module.exports = findCityByName