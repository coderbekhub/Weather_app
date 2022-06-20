let weather = {
  apiKey: "5d88f69ef3120ed2f8e996803fbffaa5",
  fetchWeather: function (city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
      )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data))
  },
  displayWeather: function (data) {
    console.log(data)
    const {
      name
    } = data;
    const {
      icon,
      description
    } = data.weather[0];
    const {
      temp,
      humidity
    } = data.main;
    const {
      speed
    } = data.wind;
    document.querySelector('.city').innerHTML = name + "dagi ob-havo";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Namlik:" + humidity + "%";
    document.querySelector(".wind").innerText = "Shamol tezligi:" + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading")
    document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    if(isNaN(document.querySelector(".search_bar").value)) {
      this.fetchWeather(document.querySelector(".search_bar").value);
    
    } else {
      alert("Error");
    }
    
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search_bar").addEventListener('keyup', function(event) {
  if (event.key == 'Enter') {
    weather.search();
  }
});

