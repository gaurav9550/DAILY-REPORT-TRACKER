const apiKey = "YOUR_API_KEY";


const cityInput = document.getElementById("cityInput");


const searchButton = document.getElementById("searchWeather");

searchButton.addEventListener("click",()=>{


    let city =
    cityInput.value;


    getWeather(city);


});


async function getWeather(city){

    try{

        let response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        let data = await response.json();


        document.getElementById("temperature").innerText = `${data.main.temp}°C`;

        document.getElementById("city").innerText = data.name;

        document.getElementById("condition").innerText = data.weather[0].description;

        document.getElementById("humidity").innerText = data.main.humidity;

        document.getElementById("wind").innerText = data.wind.speed;

    }

    catch(error){

        alert("City not found");

    }
}