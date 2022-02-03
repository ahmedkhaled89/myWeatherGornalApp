/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Function to GET Web API Data*/
const getData = async (url, apiKey, zip) => {
    const apiLink = url + zip + ',us' +apiKey;
    console.log(apiLink)
    const response = await (await fetch(apiLink)).json();
    console.log(response);
    try {
        const newdata = response;
        console.log(newdata);
        console.log(newdata.main.temp);

    }catch(error){
        console.log("error", error);

    }


}

/* Function to POST data */
const postData = async (url ='', data = {}) => {
    console.log(data);
    const response = await fetch(url,{
        method : "POST",
        credentials: 'same-origin',
        headers: {
        
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data), 
    });
    try{
        const newDate = await response.json();
        console.log(newDate);
        return newDate;
    }catch(error){
        console.log("error", error);

    }

}

const updateUI = async () => {
    const res = await fetch('/all');
    try{
        console.log('update UI Function')
        const weatherData = await res.json();
        console.log(weatherData);
        document.getElementById('date').innerHTML =weatherData.date;
        document.getElementById('temp').innerHTML = weatherData.temp;
        document.getElementById('content').innerHTML = weatherData.content;
    }catch(error){
        console.log("error", error)
    }
}

//getData('https://api.openweathermap.org/data/2.5/weather?zip=', '&appid=ae8dc7d1b918f20a8becea7657780e34', '94040')
postData('/addWeatherData', {date: newDate, temp:'5264waadsfs', content:"hahahah"})
updateUI()