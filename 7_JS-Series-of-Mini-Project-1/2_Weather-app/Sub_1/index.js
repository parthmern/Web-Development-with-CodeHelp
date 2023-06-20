console.log("parth");

const API_KEY = "1186bc21de9620a4ed19881973539abb";

async function fetchWeatherDetails(){

    try{

    let city = "goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    const data = await response.json();

    console.log("weather data = ",data);

    console.log("---------------------");

    // to know about this just open the above fetch link by putting the value of city and api-key then open it
    // then copy the JSON file that you can see
    // go to JSON FORMATTOR and convert this json file to human readable then you can easy see the main objects with their sub objects

    let newPara = document.createElement("p");

    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;   //OP- 302.36 C
    
    //newPara.textContent = data.main.temp;   //OP- 302.36

    document.body.appendChild(newPara);

    renderWeatherInfo(data); // ab jo data mil gyaa usko dusre function mei send kr do

    }

    catch(err){

        // handle the ERROR here
        // in case of wrong CITY , wrong API_KEY
        console.log("eroor agaya bhai thoda CITY-NAME thik kar le",err);

    }

    
}

// idhar ASYNC use karna hoga because AWAIT chiye hame
// hum dusri jagah se data la rahe hai toh time lagega so AWAIT use karna padega
// and .JSON() =javascript object notation file me convert karne me bhi time lageaga so AWAIT use krna padega

fetchWeatherDetails();


//=======================================================================
//=======================================================================

async function getCustomWeatherDeatils(){

    try{
    
        let latitude = 15.6333;
        let longitude = 18.3333;

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);

        let result = await response.json();

        console.log(result);

        renderTheData(result);

    }

    catch(err){

        console.log("ERROR aagaya sambhal le bhai",err);

    }

}

function renderTheData(){

    let newPara1 = document.createElement("p");

    newPara1.textContent = `${data?.main?.temp.toFixed(2)} C`;   //OP-  C
    
    //newPara.textContent = data.main.temp;   //OP- 

    document.body.appendChild(newPara1);
}

