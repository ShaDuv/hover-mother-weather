export class WeatherService {
  getWeatherByCity(city) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8dd66e6a045597f1ce5f28b0149c8e9`;
request.onload = function() {
  if (this.status === 200) {
    resolve(request.response);
  } else {
    reject(Error(request.statusText));
  }
}
request.open("GET", url, true);
request.send();
});
}
}
export class MomNag {
  constructor (name) {
    this.name = name;
    this.nag = [
      `...and are you wearing clean underwear, what if you get in an accident, ${this.name}?`,
      `...and did, you wash behind your ears? ${this.name} cleanliness matters!`,
      `...and you really should visit your mother, ${this.name} I was in labor for 120 hours and for what?!?`,
      `...and are you eating ${this.name}? You look thin. You should eat a banana or something. I worry.`,
      `...also, would it hurt you to call your mother once in a while?`,
      `...but you know you could worry less about the weather and more about visiting your mother once in a while.`,
      `...when are you going to settle down ${this.name}? Give me some beautiful grand-babies`]

    };
    randomNag() {
      return Math.floor(Math.random() * 7) + 1;
    };
  }
