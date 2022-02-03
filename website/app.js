/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Function to GET Web API Data*/
const getData = async (url, apiKey, zip) => {
    const apiLink = url + zip + ',us' +apiKey;
    const response = await fetch(apiLink);
    try {
        const temp = response.json().main.temp;

    }catch(error){
        console.log("error", error);

    }


}
