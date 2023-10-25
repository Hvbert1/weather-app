import './style.css';

async function getWeather(city) {
    let response = await fetch('https://api.weatherapi.com/v1/current.json?key=3a42f2ba01104ec98ac20757231610&q=' + city, {
        mode: 'cors'
    });

    let weather = await response.json();

    let place = weather.location.name;
    document.getElementById("cityName").innerText = place;

    let localTime = weather.location.localtime;
    let day = localTime.substr(0, 10);
    const dateObject = new Date(day);
    const dayOfWeek = dateObject.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById("day").innerText = dayOfWeek;

    let time = localTime.substr(11, 16);
    document.getElementById("time").innerText = time;

    let condition = weather.current.condition.text;
    document.getElementById("tempInfo").innerText = condition;

    let temp = weather.current.temp_c;
    document.getElementById("mainTemp").innerText = temp + "°";

    let feelsLike = weather.current.feelslike_c;
    document.getElementById("feelsLike").innerText = feelsLike + "°";

    let wind = weather.current.wind_kph;
    document.getElementById("wind").innerText = wind + " kph";

    let humidity = weather.current.humidity;
    document.getElementById("humidity").innerText = humidity;

    let pressure = weather.current.pressure_mb;
    document.getElementById("pressure").innerText = pressure;

    let uv = weather.current.uv;
    document.getElementById("uv").innerText = uv;
}

function loadHeader() {
    let headerContainer = document.createElement("div");
    headerContainer.id = "headerContainer";
    
    //create form here
    let headerTitle = document.createElement("div");

    let cityName = document.createElement("div");
    cityName.id = "cityName";
    cityName.innerText = "City";

    let dateContainer = document.createElement("div");
    
    let day = document.createElement("div");
    day.id = "day";
    day.innerText = "";

    let time = document.createElement("div");
    time.id = "time";
    time.innerText = "";

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

    let tempInfo = document.createElement("div");
    tempInfo.id = "tempInfo";

    let mainTemp = document.createElement("div");
    mainTemp.id = "mainTemp";
    mainTemp.innerText = "";

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
    mainContainer.appendChild(tempInfo);
    mainContainer.appendChild(mainTemp);
    mainContainer.appendChild(secondaryTemp);

    document.getElementById("content").appendChild(mainContainer);
}

function loadSecondContent() {
    let secondContainer = document.createElement("div");
    secondContainer.id = "secondContainer";

    let infoContainer = document.createElement("div");
    infoContainer.id = "infoContainer";

    const gridIds = ["feelsLike", "wind", "humidity", "pressure", "uv"];

    for (let i = 0; i < 5; i++ ) {
        const gridCell = document.createElement("div");
        gridCell.id = gridIds[i]; // Assign the custom ID
        gridCell.classList.add('grid-item');

        infoContainer.appendChild(gridCell);
    }

    secondContainer.appendChild(infoContainer);
    document.getElementById("content").appendChild(secondContainer);
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
loadSecondContent();