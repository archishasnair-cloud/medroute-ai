import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("MedRoute AI API is running");
});

app.listen(PORT, () => {
    console.log(`MedRoute AI server running on port ${PORT}`);
});



/*   
# MedRoute AI - First Express Server

## 1. Import Express

Code:

import express from "express";

Explanation:

Express is a Node.js web framework.

We installed Express using:

npm install express

The import statement allows us to use Express inside server.ts.

---

## 2. Create Express Application

Code:

const app = express();

Explanation:

express() creates an Express application.

We store the application inside the variable:

app

The app variable represents our backend application.

We will later use it for:

app.get()

app.post()

app.put()

app.delete()

app.use()

---

## 3. Define the Port

Code:

const PORT = 5000;

Explanation:

A port is a communication endpoint used by an application.

Our backend will run on port:

5000

Therefore the local backend address will be:

http://localhost:5000

localhost means our own computer.

5000 is the port used by our backend.

---

## 4. Create a GET Route

Code:

app.get("/", (req, res) => {
    res.send("MedRoute AI API is running");
});

Explanation:

app.get() creates a route that handles an HTTP GET request.

"/" represents the root route.

Therefore:

GET /

represents a GET request to:

http://localhost:5000/

---

## 5. req - Request

req means Request.

It contains information sent by the client to the server.

Examples include:

- URL parameters
- Query parameters
- Headers
- Request body

We are not using req yet.

Later MedRoute AI may use it to receive information such as:

- User location
- Latitude
- Longitude
- Required medical department
- Search filters

---

## 6. res - Response

res means Response.

It is used by the server to send information back to the client.

Example:

res.send("MedRoute AI API is running");

This sends the text:

MedRoute AI API is running

back to the client.

---

## 7. Start the Server

Code:

app.listen(PORT, () => {
    console.log(`MedRoute AI server running on port ${PORT}`);
});

Explanation:

app.listen() starts the Express server.

PORT tells Express which port to listen on.

Since:

PORT = 5000

the server listens on:

http://localhost:5000

---

## 8. console.log()

Code:

console.log(`MedRoute AI server running on port ${PORT}`);

Explanation:

console.log() prints information in the terminal.

When our server successfully starts, the terminal should display:

MedRoute AI server running on port 5000

---

# Complete Request Flow

When the user opens:

http://localhost:5000/

the following happens:

Browser

↓

Sends GET request

↓

Express server receives the request

↓

app.get("/") finds the matching route

↓

Route function executes

↓

res.send() sends the response

↓

Browser receives:

MedRoute AI API is running

---

# Current Backend Structure

server/

├── src/
│   └── server.ts
│
├── node_modules/
├── package.json
├── package-lock.json
└── tsconfig.json

---

# Important Concepts Learned

Express

Web framework used to create our backend.

app

Represents our Express application.

PORT

Communication port used by the backend.

app.get()

Handles HTTP GET requests.

req

Request received from the client.

res

Response sent to the client.

res.send()

Sends a response to the client.

app.listen()

Starts the Express server.

localhost

Refers to our own computer.
*/