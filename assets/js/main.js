// API = 2977f2f5baff48583374c4b88dc8051a

const apiKey = "2977f2f5baff48583374c4b88dc8051a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const address = document.getElementById("address");
const temperature = document.getElementById("temperature");
const weatherIcon = document.getElementById("weather-icon");

let city = "Ho Chi Minh City";

const btnSearch = document.querySelector('#btn-search');

btnSearch.onclick = () => {
    let cityName = document.querySelector('input[name="search-city"]').value;
    // city = cityName;
    if (cityName !== '' ) {
        let url = `${apiUrl}?q=${cityName}&appid=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    let tempNumber = data.main.temp - 273.15;
                    let iconId = data.weather[0].icon;
                    let addressName = `${data.name}, ${data.sys.country}`;
                    address.innerHTML = addressName;
                    temperature.innerHTML = `${tempNumber.toFixed(0)}°`;
                    weatherIcon.innerHTML = `<img src="/Weather/assets/img/${iconId}.png" alt="">`;
                } else {
                    alert("City not found");
                }
            })
    } else alert('Please fill all fields');
}

// key Enter
document.querySelector('input[name="search-city"]').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnSearch.click();
    }
});
