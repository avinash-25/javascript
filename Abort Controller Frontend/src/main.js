import axios from "axios";

const BASE_URL = "http://localhost:3000/users";

// fetch(BASE_URL)
//   .then((response) => {
//     if (!response.ok) throw new Error("Failed to fetch!");
//     return response.json();
//   })
//   .catch((err) => {
//     console.log(err.name);
//     console.log(err.message);
//   });

// const controller = new AbortController();
// let signal = controller.signal;

// async function getUsers(url) {
//   try {
//     const response = await fetch(url, { signal });

//     if (!response.ok) throw new Error("Failed to fetch!");

//     const users = await response.json();
//     console.log("Users : ", users);
//   } catch (error) {
//     if (error.name === "AbortError") {
//       console.log("Request was aborted:", error.message);
//     } else {
//       console.log("Error:", error.message);
//     }
//   }
// }

// getUsers(BASE_URL);

// setTimeout(() => {
//   controller.abort("Too much time taking");
// }, 2000);

const getUsers = async (url) => {
  const { data } = await axios.get(url);
  console.log(data);
};

getUsers(BASE_URL);
