const request = require('request');

const weatherAPIKey = 'e7f9c521f7b8078d70e7594c070690ba';

var getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${weatherAPIKey}/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                windSpeed: body.currently.windSpeed
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
}

module.exports.getWeather = getWeather;

