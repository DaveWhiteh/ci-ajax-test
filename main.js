// var xhr = new XMLHttpRequest();
// var data;

// xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
// xhr.send();

// xhr.onreadystatechange = function() {
//     if(this.readyState == 4 && this.status == 200) {
//         // document.getElementById("data").innerHTML = this.responseText; // add response to html div
//         // console.log(JSON.parse(this.responseText)); // parse the json as an object
//         data = JSON.parse(this.responseText);
//     }
// };

// setTimeout(function() {
//     console.log(data);
// }, 500);




function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("data").innerHTML = this.responseText; // add response to html div
            // console.log(JSON.parse(this.responseText)); // parse the json as an object
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);