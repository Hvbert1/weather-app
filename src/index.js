import './style.css';

async function getWeather(city) {
    let response = await fetch('https://api.weatherapi.com/v1/current.json?key=3a42f2ba01104ec98ac20757231610&q=' + city, {
        mode: 'cors'
    });

    let weather = await response.json();

    let place = weather.location.name;
    document.getElementById("cityName").innerText = place;

    document.getElementById("tempIcon").src = "https://" + weather.current.condition.icon;

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
    document.getElementById("humidity").innerText = humidity + "%";

    let pressure = weather.current.pressure_mb;
    document.getElementById("pressure").innerText = pressure + "hPa";

    let uv = weather.current.uv;
    document.getElementById("uv").innerText = uv;
}

function loadHeader() {
    let headerContainer = document.createElement("div");
    headerContainer.id = "headerContainer";
    
    let headerMid = document.createElement("div");
    headerMid.id = "headerMid";

    let cityName = document.createElement("div");
    cityName.id = "cityName";
    cityName.innerText = "City";

    let dateContainer = document.createElement("div");
    dateContainer.id = "dateContainer";
    
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
    tempButton.id = "tempButton";

    headerMid.appendChild(cityName);
    headerMid.appendChild(dateContainer);

    headerContainer.appendChild(createForm());
    headerContainer.appendChild(headerMid);
    headerContainer.appendChild(tempButton);
    
    document.getElementById("content").appendChild(headerContainer);
}

function loadMain() {
    let mainContainer = document.createElement("div");
    mainContainer.id = "mainContainer";

    let icon = document.createElement("img");
    icon.id = "tempIcon";
    icon.alt = "Weather Icon"; // Set the alt text for accessibility

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

    const cardIcons = ["device_thermostat", "air", "invert_colors", "compress", "brightness_6"];
    const cardTitles = ["Feels Like", "Wind", "Humidity", "Pressure", "UV"];
    const cardIds = ["feelsLike", "wind", "humidity", "pressure", "uv"];

    for (let i = 0; i < 5; i++ ) {
        const card = document.createElement("div");
        const cardIcon = document.createElement("i");
        const cardTitle = document.createElement("p");;
        const cardInfo = document.createElement("p");;

        cardIcon.className = "material-icons";
        cardIcon.innerText = cardIcons[i];
        cardTitle.innerText = cardTitles[i]; // Assign the custom ID
        cardInfo.id = cardIds[i]; // Assign the custom ID

        card.append(cardIcon);
        card.appendChild(cardTitle);
        card.appendChild(cardInfo);

        infoContainer.appendChild(card);
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