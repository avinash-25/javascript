// post request  -----> create/ upload/ add

export const createTodo = async (url, obj) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        if (!response.ok) {
            throw new Error("Failed to Upload..!");
        }
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log("Error Name:", error.name);
        console.log("Error Message:", error.message);
    }
}

// get request ---> read
export const getTodos = async (url) => {
    try {
        const response = await fetch(url, {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const todos = await response.json();
        return todos;
    } catch (error) {
        console.log("Error Name:", error.name);
        console.log("Error Message:", error.message);
    }
}

/**
 when we use rest api and if want to send data from ui to backend then firstly we have to convert that in json using strigify then data will send

 headers : Headers tells the type of the data

Rest API
GRAPH QL
gRPC 
Webhook
WebRTc
Socket
SOAP

// POSTMAN tool where we test the API
 */