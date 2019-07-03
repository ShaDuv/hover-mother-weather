import $ from 'jquery';
import { WeatherService, MomNag } from './weather-service.js'


$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    let name = $('#name').val();
    $('#location').val("");

    let mom = new MomNag(name);
    console.log('mom: ', mom);
    console.log(mom.nag[mom.randomNag()]);
    let weatherService = new WeatherService();
    let promise = weatherService.getWeatherByCity(city);

    promise.then(function(response) {
      let body = JSON.parse(response);
      let temp = Math.floor((body.main.temp - 273.15) + 32)
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text('The temperature is ' + temp + ' degrees!');

        if ( temp <= 50) {
          $('.showTemp').append(" I am cold you should wear a jacket")

        } else if ( temp >= 75){
          $('.showTemp').append(" You should wear your sunscreen")
        };

        $('.showNag').text(mom.nag[mom.randomNag()]);
      },
        function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        });

  });
});
