import './style.css';

async function getWeather(city) {
    let response = await fetch('https://api.weatherapi.com/v1/current.json?key=3a42f2ba01104ec98ac20757231610&q=' + city, {
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

function loadHeader() {
    let headerContainer = document.createElement("div");
    headerContainer.id = "headerContainer";
    
    //create form here
    let headerTitle = document.createElement("div");

    let cityName = document.createElement("div");
    cityName.id = "cityName";
    cityName.innerText = "City"

    let dateContainer = document.createElement("div");
    
    let day = document.createElement("div");
    day.id = "day";
    day.innerText = "Thu";

    let time = document.createElement("div");
    time.id = "time";
    time.innerText = "06:59:47";

    dateContainer.appendChild(day);
    dateContainer.appendChild(time);

    let tempButton = document.createElement("button");
    tempButton.innerText = "F/C";

    headerTitle.appendChild(cityName);
    headerTitle.appendChild(dateContainer);

    headerContainer.appendChild(createForm());
    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(tempButton);
    
    document.getElementById("content").appendChild(headerContainer);
}

function loadMain() {
    let mainContainer = document.createElement("div");
    mainContainer.id = "mainContainer";

    let icon = document.createElement("div");
    icon.innerText = "🌞";

    let mainTemp = document.createElement("div");
    mainTemp.id = "mainTemp";
    mainTemp.innerText = "4°"

    let secondaryTemp = document.createElement("div");
    secondaryTemp.id = "secondaryTemp";

    let minTemp = document.createElement("div");
    minTemp.id = "minTemp";
    minTemp.innerText = "Lowest: 4°"

    let maxTemp = document.createElement("div");
    maxTemp.id = "maxTemp";
    maxTemp.innerText = "Highest: 6°"

    secondaryTemp.appendChild(minTemp);
    secondaryTemp.appendChild(maxTemp);

    mainContainer.appendChild(icon);
    mainContainer.appendChild(mainTemp);
    mainContainer.appendChild(secondaryTemp);

    document.getElementById("content").appendChild(mainContainer);
}

function createForm() {    
    let formArea = document.createElement("div");
    formArea.id = "formArea";

    let formInput = document.createElement("input");
    formInput.setAttribute("type", "text");
    formInput.placeholder = "Enter city";
    formInput.id = "formInput";

    let btn = document.createElement("button");
    btn.innerText = "Search";
    btn.setAttribute("type", "submit");
    btn.onclick = function test(e) {
        e.preventDefault();
        getWeather(getCity());  
    }
    formArea.append(formInput);
    formArea.append(btn);

    return formArea;
}

function getCity() {
    let city = formInput.value;
    console.log(city);

    return city
}

loadHeader();
loadMain();
