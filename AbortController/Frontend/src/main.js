import axios from "axios";

let controller;
let signal;
/**
 * ! Older way
 * fetch(BASE_URL)
    .then(response =>{
        if(!response.ok)
        {
            throw new Error("Failed to fetch!");
        }
           return  response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err =>{
        console.log(err.name)
        console.log(err.message)
    });
 */

/**
 * ! Abort Controller and async await
const controller = new AbortController();
let signal = controller.signal;

async function getUsers(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      signal: signal,
    });

    if (!response.ok) {
      throw new Error("Failed to Fetch");
    }
    const users = await response.json();
    console.log("users:", users);
  } catch (error) {
        

    if (error.name === "AbortError") {
      console.log("Bhai mene cancel kia...");
    } else {
        console.log(error);    
    }
  }
}

getUsers(BASE_URL);

setTimeout(() => {
  controller.abort("Bhai bohot samay le rha hai");
}, 2000);
 */

/**
 * ! New Tab Logic
 */

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  },
});

const getUsers = async () => {
  controller = new AbortController();
  signal = controller.signal; // Store the signal

  try {
    const { data, status } = await instance.get("/users", { signal });
    console.log(data);
  } catch (error) {
    console.log(error);
    if (error.name === "CanceledError") {
      console.log("Tab change hua hai ya minimize hua h..!");
      console.log(signal.reason);
    } else if (error.code === "ECONNABORTED") {
      console.log("Request timeout ho gaya!");
    } else {
      console.log("Koi dusra error hai...!");
    }
  }
};

getUsers();

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Cancel request when tab is hidden
    if (controller) {
      controller.abort("Tab changed");
    }
  } else {
    // Tab is visible again - restart the request
    console.log("👁️ Tab wapas visible hua");
    // getUsers();
  }
});

// await axios.get(url)

// {
//     config:{},
//     data:[],
//     headers:{}
//     request:{}
//     status:200
//     statusText:ok
// }

// URL Object
const url = new URL("http://localhost:3000/users");

// Request Object
const request = new Request(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    cache: "default",
  },
});

fetch(request).then().then();
