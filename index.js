// Import stylesheets
import './style.css';

// async await: 

function makeRequest(location) {

    return new Promise((resolve,reject)=> {
     console.log(`making request to ${location}`)
     if (location==="Google") {

        resolve("hello google")
     } else {

        reject("Errror")
     }

    })
}

function processRequest(response) {

    return new Promise((resolve,reject)=> {

        console.log("processing respnose")

        resolve(`Extra info ${response}`)
    })
}

async function doWork() {

    try {
    const response = await makeRequest("Googlepp")
    console.log("respnose received")
    const processRespnose = await processRequest(response)
    console.log(processRespnose)
    }
    catch (err){

        console.log(err)

    }
}

doWork()














const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
