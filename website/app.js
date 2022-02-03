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
getData('https://api.openweathermap.org/data/2.5/weather?zip=', '&appid=ae8dc7d1b918f20a8becea7657780e34', '94040')