const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=d32b54c1a83714a38c42fc5b2b424234'
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback("Can't connect to weather service", undefined)
        }
        else if (body.message) {
            callback(body.message, undefined)
        }
        else{
            callback(undefined, body.name)
        }
        
    })
}

module.exports = forecast
