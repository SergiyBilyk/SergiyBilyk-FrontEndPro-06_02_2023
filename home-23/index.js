'use strict'

const select = document.querySelector('select');
const div = document.querySelector('.result-weather');
const title = document.querySelector('.title');
const cityArr = document.querySelectorAll('select');

select.addEventListener('input', getCity);

function getCity() {
  let city = select.value;
  let selectedOption = select.options[select.selectedIndex];
  let cityUa = selectedOption.textContent;

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
  .then(response => response.json())
  .then(handleWeather);

  function handleWeather(data) {
    div.innerHTML = "";
    title.classList.remove('red');
    div.insertAdjacentHTML("beforeend", `<img src = 'http://openweathermap.org/img/w/${data.weather[0].icon}.png'>
                                        <p>Ваше місто - ${cityUa}</p>
                                        <p>Tемпература - ${data.main.temp} градусів</p>
                                        <p>Тиск - ${data.main.pressure}</p>
                                        <p>Опис - ${data.weather[0].description}</p>
                                        <p>Вологість - ${data.main.humidity}</p>
                                        <p>Швидкість вітру - ${data.wind.speed}</p>
                                        <p>Напрям у градусах - ${data.wind.deg}</p>`);
};
};

document.querySelector('button').onclick = function() {
  div.innerHTML = "";
};