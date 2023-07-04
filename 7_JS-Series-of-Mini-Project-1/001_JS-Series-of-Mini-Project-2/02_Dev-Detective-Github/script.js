//variables
const url = "https://api.github.com/users/";
const root = document.documentElement.style;


//DOM
const avatar = document.querySelector("#avatar");
const profileName = document.querySelector('.profile-name h2');
const user = document.querySelector('#user');
const date = document.querySelector('#date');
const bio = document.querySelector('#bio');
const repos = document.querySelector('#repos');
const followers = document.querySelector('#followers');
const following = document.querySelector('#following');
const locations = document.querySelector('#location');
const blog = document.querySelector('#page');
const twitter = document.querySelector('#twitter');
const company = document.querySelector('#company');

const searchBar = document.querySelector('#input');
const submit = document.querySelector('#submit');

const err = document.querySelector('#no-results');

const profileContainer = document.querySelector('.profile-container');

const modetext = document.querySelector("#mode-text");
const modeicon = document.querySelector("#mode-icon");

//initial running Function

let searchUserName = 'parthmern';


const init = async () =>{
    
    try{

        console.log("working");
        profileContainer.style.display = "flex";
        err.style.display = "none";
        

        console.log(url+`${searchUserName}`);
    
        const response =await fetch(url+`${searchUserName}`);
        const data = await response.json();
        console.log(data);

        // if(data.message == "Not Found"){
        //     err.classList.add("active");
        // }
    
        updateUserInfo(data);

    }

    catch(error){
        err.style.display = "flex";
        profileContainer.style.display = "none";
        console.log("erooooor");
        
    }
    

}

init();

// RENDER USER INFO

function updateUserInfo(data){

    avatar.src = `${data ?. avatar_url}`;
    
    //sometime name is not defined by user in this situation take LOGIN as name
    if(data?.name == null){
        profileName.innerText = data ?.login ;
    }
    else{
        profileName.innerText = data ?.name ;
    }

    user.href = `${data ?.html_url}`;
    user.innerText = `@${data ?.login}`;

    console.log(data ?. created_at);
    const nDate = data ?. created_at ;
    console.log(typeof(nDate));

    const mainDate = nDate.split('T');
    console.log(mainDate[0]);

    const day = mainDate[0].slice(8,10);
    const month = mainDate[0].slice(5,7);
    const year = mainDate[0].slice(0,4)
    console.log(day);
    console.log(month);
    console.log(year);

    const mth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    date.innerText = `Joined ${day} ${mth[month-1]} ${year}`;

    // handle same situation like NAME 
    bio.innerText = data.bio == null ? "This profile has no bio" : `${data.bio}`;

    repos.innerText = data ?. public_repos;
    followers.innerText = data ?. followers;
    following.innerText = data ?. following ;
    locations.innerText = (data?.location == null) ? "not available" :  `${data?.location}`;

    blog.innerText = (data?.blog == "" || data?.blog == null) ? "not available" :  `${data?.blog}`;
    blog.href = (data?.blog == "" || data?.blog == null) ? "" :  `${data?.blog}`;

    twitter.innerText = (data?.twitter_username == null) ? "not available" :  `${data?.twitter_username}`;
    twitter.href = (data?.twitter_username !== null) ? `https://twitter.com/${data.twitter_username}` : "";

    company.innerText = (data?.company == null) ? "not available" :  `${data?.company}`;

}


// searchBar event listner

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("clicked");
    console.log(searchBar.value);

    searchUserName = searchBar.value;
    init();

})



//-------------------
const btnmode = document.querySelector("#btn-mode");

darkMode = false;

btnmode.addEventListener("click", function () {
    if (darkMode == false) {
      darkModeProperties();
    } else {
      lightModeProperties();
    }
});


//SWITCH TO DARK MODE - activateDarkMode()
function darkModeProperties() {
  root.setProperty("--lm-bg", "#141D2F");
  root.setProperty("--lm-bg-content", "#1E2A47");
  root.setProperty("--lm-text", "white");
  root.setProperty("--lm-text-alt", "white");
  root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
  modetext.innerText = "LIGHT";
  modeicon.src = "./assets/images/sun-icon.svg";
  root.setProperty("--lm-icon-bg", "brightness(1000%)");
  darkMode = true;
  console.log("darkmode changed to " + darkMode);
  localStorage.setItem("dark-mode", true);  
  console.log("setting dark mode to true");

}

//SWITCH TO LIGHT MODE - activateLightMode()
function lightModeProperties() {
  root.setProperty("--lm-bg", "#F6F8FF");
  root.setProperty("--lm-bg-content", "#FEFEFE");
  root.setProperty("--lm-text", "#4B6A9B");
  root.setProperty("--lm-text-alt", "#2B3442");
  root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
  modetext.innerText = "DARK";
  modeicon.src = "./assets/images/moon-icon.svg";
  root.setProperty("--lm-icon-bg", "brightness(1000%)");
  darkMode = false;
  console.log("darkmode changed to " + darkMode);

  localStorage.setItem("dark-mode", false);
  console.log("setting dark mode to false");
}