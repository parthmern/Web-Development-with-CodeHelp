const userTab = document.querySelector("[data-userWeather]");
console.log("userTab",userTab);

const searchTab = document.querySelector("[data-searchWeather]");
console.log("searchTab",searchTab);

const userContainer = document.querySelector(".weather-container");
console.log("userContainer",userContainer);

const grantAccessContainer = document.querySelector(".grant-location-container");
console.log("grantAccessContainer",grantAccessContainer);

const searchForm = document.querySelector("[data-searchForm]");
console.log("searchForm",searchForm);

const loadingScreen = document.querySelector(".loading-container");
console.log("loading-container",loadingScreen);

const userInfoContainer = document.querySelector(".user-info-container");
console.log("user-info-container",userInfoContainer);

// initial variables

let oldTab = userTab;
const API_KEY = "1186bc21de9620a4ed19881973539abb";

oldTab.classList.add("current-tab");

getfromSessionStorage();

// do me se kisi ko bhi click kroge toh ek function run ho jayega
// matalb according to that function -- clicked tab = current Tab

function switchTab(newTab){
    if(newTab != oldTab){

        oldTab.classList.remove("current-tab");
        oldTab = newTab ;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active")
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active"); 
        }

        else{
            //main pehle search wale tab pr tha , ab yourweather tab visible karna hai

            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }

    }
}

userTab.addEventListener("click", () => {
    // function call kr rhe - pass clicked tab as input paramter 
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});


//check if cordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        //agar local coordinates nahi mile
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates){
    const {lat,lon} = coordinates;

    grantAccessContainer.classList.remove("active");

    loadingScreen.classList.add("active");

    //api call

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");

        // render values in UI

        renderWeatherInfo(data);

    }

    catch(err){
        loadingScreen.classList.remove("active");
        //hw
        grantAccessContainer.classList.add("active");
    }
}

function renderWeatherInfo(weatherInfo){
    // fetch all elements then Render it to the UI

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");
    console.log("clod=",cloudiness);

    // fetch values from weather info object and RENDER it to the ui

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    //array hai WEATHER isliye [0] index par {object} pada hua hai JSO FORMATTOR mei
    desc.innerText = weatherInfo?.weather?.[0]?.description ;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText =`${weatherInfo?.main?.temp} C` ;
    windspeed.innerText =`${weatherInfo?.wind?.speed} M/S` ;
    humidity.innerText =`${weatherInfo?.main?.humidity} %` ;
    cloudiness.innerText = weatherInfo?.clouds?.all;


}

// GET LOCATION BUTTON SNIPPETS

function getLocation(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    else {
        //HW 
        alert("No GeoLocation support available");
        
    }
}

function showPosition(position){

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    // save in session storage == API STORAGE in setItem()
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector("[data-grantAccess]");

grantAccessButton.addEventListener("click",getLocation);

console.log(grantAccessButton);

// search button process snippet

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName == ""){
        return;
    }
    else{
        fetchSearchWeatherInfo(cityName);
    }
})

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);

    }

    catch(err) {
        //hW ==
        console.log("ERROR");
    }

};



