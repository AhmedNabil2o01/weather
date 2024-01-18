var data2 = [];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// search function to find current wether

async function search(mn) {
    let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=217f2d786f484a2cb3f182721232402&q=${mn}&days=3&aqi=no&alerts=no`);
    if (status = 200) {
        data2 = await t.json();
        displayCurrentWeather(),
            displayAnotherDay(),
            displayAnotherDay2()

        console.log(data2)

    }

}





////display current weather today

function displayCurrentWeather() {

    var e = new Date(data2.current.last_updated);
    let n = ` <div class=" divs today-forcast w-75 " id="today">
        <div class="head ">
            <div class="day  ">
            ${days[e.getDay()]}

            </div>
            <div class=" date ">
            ${e.getDate() + monthNames[e.getMonth()]}

            </div>

        </div>
        <div class="content">
            <div class="location">
           <h2> ${data2.location.name}</h2>
           
                
            </div>
           <div class="degree d-flex">
            <div class="number ">
            
                ${data2.current.temp_c}
                <sup>o</sup>
                c

            </div>
            <div class="icon">
                <img src="https:${data2.current.condition.icon}" alt="">
            </div>
           </div>
           <div>
           <h4>${data2.current.condition.text}</h4>
           <div class="wind">
       
               <span>
                 <p>  <img src="./images/icon-umberella.png" alt="">20%</p> 
                 
                   
               </span>
               <span>
                  <p> <img src="./images/icon-wind.png" alt="">18km/h</p>
                   
               </span>
               <span>
                 <p>  <img src="./images/icon-compass.png" alt=""> East</p>
                  
               </span>
              
              </div>
       </div>

        </div>`


    document.getElementById('today').innerHTML = n;

}



////// display weather 1 after 
function displayAnotherDay() {
    let dayy = "";
    for (let i = 1; i < data2.forecast.forecastday.length; i++) {

        dayy = `
    <div class="divs  " >    
     <div >   
        <div class="title text-center">
            <h3> ${days[new Date(data2.forecast.forecastday[1].date.replace(" ", "T")).getDay()]}</h3>
    
        </div>
        <div class="dayIcon">
            <img src="https:${data2.forecast.forecastday[1].day.condition.icon}" alt="" class="mb-5 mt-4 w-25">
        </div>
        <div class="max-degree mb-2">
           <h3> ${data2.forecast.forecastday[1].day.maxtemp_c}</h3>
        </div>
        <div>
            <h6 class="mb-5"> ${data2.forecast.forecastday[1].day.mintemp_c}</h6>
        </div>
        <div>
            ${data2.forecast.forecastday[1].day.condition.text}
        </div>
    
     </div>
    </div>

        `


    }

    document.getElementById('next').innerHTML = dayy;




}



// display the last day weather
function displayAnotherDay2() {
    let dayy = "";
    for (let i = 2; i < data2.forecast.forecastday.length; i++) {

        dayy = `
    <div class="divs  " >    
     <div >   
        <div class="title text-center">
            <h3> ${days[new Date(data2.forecast.forecastday[2].date.replace(" ", "T")).getDay()]}</h3>
    
        </div>
        <div class="dayIcon">
            <img src="https:${data2.forecast.forecastday[i].day.condition.icon}" alt="" class="mb-5 mt-4 w-25">
        </div>
        <div class="max-degree">
           <h3 class="mb-2"> ${data2.forecast.forecastday[2].day.maxtemp_c}</h3>
        </div>
        <div>
            <h6 class="mb-5"> ${data2.forecast.forecastday[2].day.mintemp_c}</h6>
        </div>
        <div>
            ${data2.forecast.forecastday[2].day.condition.text}
        </div>
    
     </div>
    </div>

        `


    }

    document.getElementById('next2').innerHTML = dayy;




}

search("paris");

