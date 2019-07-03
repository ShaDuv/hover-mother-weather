import $ from 'jquery';
import { WeatherService, MomNag } from './weather-service.js'


$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

    let mom = new MomNag("Hilda");
    console.log('mom: ', mom);
    console.log(mom.nag[mom.randomNag()]);
    let weatherService = new WeatherService();
    let promise = weatherService.getWeatherByCity(city);

      promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`${Math.floor((body.main.temp - 273.15) + 32)} degrees`);
      $('.showNag').text(mom.nag[mom.randomNag()]);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
