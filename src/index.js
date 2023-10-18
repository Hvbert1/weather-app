import { create } from 'lodash';
import './style.css';

fetch('https://api.weatherapi.com/v1/current.json?key=3a42f2ba01104ec98ac20757231610&q=sydney')
    .then(function(response) {
        return response.json();
    })
    .then(function(r) {
        console.log(r.location.localtime);
    })
    .catch(function(err) {
        console.log(err);
    });

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
