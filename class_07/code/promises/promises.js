function myExecutor(resolve, reject) {
  // Let's pretend this takes a couple of seconds...
  if (Math.random() < 0.5) {
    resolve("THIS WORKED!"); // This goes to .then
  } else {
    reject("SOMETHING WENT WRONG"); // This goes to .catch
  }
}

function successHandler(data) {
  console.log("SUCCESS", data);
}

function errorHandler(err) {
  console.log("FAILURE", err);
}

// let myPromise = new Promise(myExecutor);
// myPromise.then(successHandler).catch(errorHandler);

let heading = document.querySelector("h2");

function apiExecutor(resolve, reject) {
  setTimeout(function () {
    if (Math.random() < 0.5) {
      let err = { error: true, message: "Server timed out" };
      reject(err);
    } else {
      let data = { success: true, message: "Data returned" };
      resolve(data);
    }
  }, 3000 * Math.random());
}

function apiSuccess() {
  heading.innerHTML = "Successful!";
}

function apiError() {
  heading.innerHTML = "Something went wrong";
}

heading.innerHTML = "Loading...";
let fakeRequest = new Promise(apiExecutor);
fakeRequest.then(apiSuccess).catch(apiError);
