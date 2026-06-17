// let weather = { 
//     apiKey: "c5f824d05731ae935364f88494129309",
//     fetchWeather: function(city) {
//         fetch(
//             "https://api.openweathermap.org/data/2.5/weather?q="
//             + city
//             + "&units=metric&appId=" 
//             + this.apiKey
//         )
//         .then((response) => response.json())
//         .then((data) => this.displayWeather(data));
//     },
//     displayWeather: function(data) {
//       const {name} = data;
//       const {icon,description} = data.weather[0];
//       const {temp, humidity} = data.main;
//       const {speed} = data.wind;
//       document.querySelector(".city").innerText = " Weather in " + name;
//       document.querySelector(".icon").src = 
//         "https://openweathermap.org/img/wn/" +icon + ".png"
//       document.querySelector(".description").innerText = description;
//       document.querySelector(".temp").innerText = temp + "°C"
//       document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%"
//       document.querySelector(".wind").innerText = "Wind Speed:" + speed + "km/h"
//       document.querySelector(".weather").classList.remove("loading");
//       const condition = data.weather[0].main.toLowerCase();
//       const backgrounds = {
//         clear: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600',
//         clouds: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=1600',
//         rain: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1600',
//         snow: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1600',
//         thunderstorm: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1600',
//         drizzle: 'https://images.unsplash.com/photo-1556485689-33e55ab56127?w=1600',
//         mist: 'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?w=1600',
//       };
//       document.body.style.backgroundImage = `url('${backgrounds[condition] || backgrounds.clear}')`;
//       document.body.style.backgroundSize = 'cover';
//     },
//     search: function(){
//         this.fetchWeather(document.querySelector(".search-bar").value);
//     },
// };

// document.querySelector(".search button").addEventListener('click', function(){
//     weather.search();
// });

// document.querySelector(".search-bar").addEventListener("keyup", function(event){
//     if(event.key == "Enter") {
//         weather.search();
//     }
// });

// weather.fetchWeather("denver");

let weather = { 
    apiKey: "KrbWAj91iWaklhrTMg8PvfkwntiY1v4dhkmXnydB7Ss",
    unsplashKey: "Gea9Zi7Rqc9ss6RCipMAeXmP05ufVmIOBAif5zMI4ds",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appId=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
      const {name} = data;
      const {icon, description} = data.weather[0];
      const {temp, humidity} = data.main;
      const {speed} = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
      document.querySelector(".wind").innerText = "Wind Speed:" + speed + "km/h";
      document.querySelector(".weather").classList.remove("loading");

      // Fetch location-based background from Unsplash
      fetch(`https://api.unsplash.com/photos/random?query=${name}&orientation=landscape&client_id=${this.unsplashKey}`)
        .then(res => res.json())
        .then(photo => {
            document.body.style.backgroundImage = `url('${photo.urls.full}')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
        })
        .catch(() => {
            // Fallback to condition-based background if Unsplash fails
            const condition = data.weather[0].main.toLowerCase();
            const backgrounds = {
                clear: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600',
                clouds: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=1600',
                rain: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1600',
                snow: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1600',
                thunderstorm: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1600',
                drizzle: 'https://images.unsplash.com/photo-1556485689-33e55ab56127?w=1600',
                mist: 'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?w=1600',
            };
            document.body.style.backgroundImage = `url('${backgrounds[condition] || backgrounds.clear}')`;
            document.body.style.backgroundSize = 'cover';
        });
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener('click', function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("denver");

