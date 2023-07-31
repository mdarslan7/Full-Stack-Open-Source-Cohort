// function logResponseBody(jsonBody) {
//     console.log(jsonBody);
// }

function callbackFn(result) {
    result.json().then( (jsonBody) => {
        console.log(jsonBody);
    });
}

let sendObj = {
    method: "GET"
}

fetch("http://localhost:3000/Page1?counter=100", sendObj).then(callbackFn);