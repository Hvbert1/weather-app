import './style.css';

async function getWeather(city) {
    let response = await fetch('https://api.weatherapi.com/v1/current.json?key=3a42f2ba01104ec98ac20757231610&q=sydney', {
        mode: 'cors'
    });

    let weather = await response.json();
    
    let feelsLike = weather.current.feelslike_c;
    console.log(feelsLike);

    let wind = weather.current.wind_kph;
    console.log(wind);

    let humidity = weather.current.humidity;
    console.log(humidity);

    let time = weather.location.localtime;
    console.log(time);
}

getWeather();

function createForm() {
    let formArea = document.createElement("div");
    formArea.id = "formArea";

    let formInput = document.createElement("input");
    formInput.setAttribute("type", "text");
    formInput.placeholder = "Enter city";
    formInput.id = "formInput";

    let btn = document.createElement("button");
    btn.innerHTML = "Search";
    btn.setAttribute("type", "submit");
    btn.onclick = function test(e) {
        e.preventDefault();
        getCity();  
    }

    formArea.append(formInput);
    formArea.append(btn);

    document.getElementById("content").appendChild(formArea);
}

function getCity() {
    let city = formInput.value;
    console.log(city);
}

createForm();
