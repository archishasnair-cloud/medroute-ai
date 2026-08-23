# Module 2 - How Web Applications Work

---

# Introduction

A web application is software that runs inside a web browser and communicates with one or more servers over the Internet.

Examples of web applications include:

- Gmail
- YouTube
- Amazon
- GitHub
- WhatsApp Web
- ChatGPT

Unlike static websites, web applications allow users to interact with data, log in, upload files, search, make payments, and perform many other actions.

MedRoute AI is also a web application.

---

# What is the Internet?

The Internet is a global network of interconnected computers and devices that communicate using standard communication protocols.

It allows billions of devices around the world to exchange information.

Examples of services provided through the Internet include:

- Websites
- Email
- Cloud Storage
- Video Streaming
- Online Gaming
- Video Calls

Without the Internet, web applications cannot communicate with remote servers.

---

# What is an IP Address?

An IP (Internet Protocol) Address is a unique numerical identifier assigned to every device connected to a network.

Example:

142.250.183.14

Every server on the Internet has an IP address.

The browser uses the IP address to locate the server.

Think of an IP address like a house address.

Without the address, no one knows where to deliver the request.

---

# What is a Domain Name?

Humans cannot easily remember numerical IP addresses.

Therefore websites use domain names.

Examples:

google.com

github.com

amazon.in

chat.openai.com

A domain name is simply a readable name that points to an IP address.

---

# What is DNS?

DNS stands for Domain Name System.

DNS converts domain names into IP addresses.

Example:

google.com

↓

DNS Lookup

↓

142.250.xxx.xxx

DNS works like the phonebook of the Internet.

Instead of remembering numbers, users remember names.

---

# What is a Browser?

A browser is software used to access websites and web applications.

Examples:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

The browser performs several tasks:

- Sends requests
- Receives responses
- Displays HTML pages
- Executes JavaScript
- Applies CSS styling

---

# What is a Client?

A Client is a software application or device that requests information from another computer.

Examples:

- Chrome
- React Application
- Mobile App
- Desktop Application

In MedRoute AI

The React application running inside the browser acts as the Client.

Responsibilities of the Client:

- Display user interface
- Collect user input
- Send requests
- Display responses

---

# What is a Server?

A Server is a computer or software application that receives requests, processes them and returns responses.

Examples:

- Node.js
- Express
- Apache
- Nginx

Responsibilities of the Server:

- Process business logic
- Authenticate users
- Communicate with databases
- Call external APIs
- Return responses

In MedRoute AI

The Node.js + Express application acts as the Server.

---

# What is a Request?

A Request is a message sent by the Client to the Server asking it to perform an action.

Examples:

Login User

Register User

Find Nearby Hospitals

Display Search History

Save Favourite Hospital

Every interaction with a web application begins with a Request.

---

# What is a Response?

A Response is the result returned by the Server after processing a Request.

A Response may contain:

- Requested data
- Success message
- Error message
- JSON data
- Images
- HTML pages

Example:

The user searches for nearby hospitals.

The Server returns:

- Hospital list
- Distance
- Travel time
- Coordinates

---

# What is HTML?

HTML stands for HyperText Markup Language.

HTML defines the structure of a webpage.

HTML creates:

- Headings
- Paragraphs
- Forms
- Tables
- Buttons
- Images
- Navigation

Think of HTML as the skeleton of a building.

---

# What is CSS?

CSS stands for Cascading Style Sheets.

CSS controls the appearance of a webpage.

CSS is responsible for:

- Colours
- Fonts
- Layout
- Spacing
- Animations
- Responsive Design

Think of CSS as the interior design of a building.

---

# What is JavaScript?

JavaScript controls the behaviour of a webpage.

JavaScript makes websites interactive.

Examples:

- Button Clicks
- Form Validation
- Login
- Search
- API Calls
- Maps
- Animations

Without JavaScript, webpages would only display static information.

---

# Complete Journey of Opening a Website

When the user enters:

www.google.com

the following sequence occurs:

Step 1

The browser reads the domain name.

↓

Step 2

DNS converts the domain into an IP Address.

↓

Step 3

The browser contacts Google's server.

↓

Step 4

The browser sends an HTTP Request.

↓

Step 5

The Server processes the request.

↓

Step 6

The Server prepares the Response.

↓

Step 7

The Response is sent back.

↓

Step 8

The Browser renders HTML, CSS and JavaScript.

↓

Step 9

The webpage becomes visible.

---

# How MedRoute AI Uses These Concepts

Example:

User clicks

"Find Nearby Hospitals"

↓

React Frontend sends Request

↓

Express Backend receives Request

↓

Backend checks:

- User Location
- Hospital API
- Recommendation Engine

↓

Backend prepares Hospital Recommendations

↓

Backend returns JSON Response

↓

React displays:

- Hospital Cards
- Map
- Distance
- Recommendation Score

---

# Why do we need a Backend?

The frontend should never directly communicate with the database.

Reasons:

- Security
- Authentication
- Validation
- Business Logic
- API Integration

Instead,

React

↓

Express Backend

↓

MongoDB

↓

Response

This architecture protects sensitive data.

---

# What is an API?

API stands for Application Programming Interface.

An API allows two software applications to communicate with each other.

In MedRoute AI:

React Frontend

↓

API Request

↓

Express Backend

↓

API Response

For example:

The frontend may request nearby hospitals using:

GET /api/hospitals/nearby

The backend processes the request and sends hospital data back.

---

# What is HTTP?

HTTP stands for HyperText Transfer Protocol.

HTTP is the communication protocol used between clients and servers on the web.

When the frontend communicates with our backend, it will use HTTP requests.

Common HTTP methods include:

## GET

Used to retrieve data.

Example:

GET /api/hospitals

Meaning:

"Give me the hospital data."

## POST

Used to create or send new data.

Example:

POST /api/users

Meaning:

"Create a new user."

## PUT

Used to update existing data.

Example:

PUT /api/users/10

Meaning:

"Update user 10."

## DELETE

Used to delete data.

Example:

DELETE /api/users/10

Meaning:

"Delete user 10."

---

# What is JSON?

JSON stands for JavaScript Object Notation.

JSON is a lightweight format used for exchanging data between applications.

Modern REST APIs commonly send and receive JSON.

Example:

{
  "name": "City Hospital",
  "distance": 2.4,
  "rating": 4.5
}

For MedRoute AI, our backend will usually return hospital information to the React frontend in JSON format.

---

# Example MedRoute AI API Flow

Suppose the user clicks:

"Find Nearby Hospitals"

The frontend may send:

GET /api/hospitals/nearby?lat=11.0168&lng=76.9558

The backend receives:

Latitude = 11.0168

Longitude = 76.9558

Then the backend:

1. Searches nearby hospitals.
2. Calculates distance.
3. Calls required external APIs.
4. Applies recommendation logic.
5. Creates the response.

Example JSON response:

{
  "hospitals": [
    {
      "name": "ABC Hospital",
      "distance": 2.1,
      "rating": 4.6
    }
  ]
}

The React frontend then displays this information to the user.

# Key Takeaways

✔ A web application consists of a Client, Server and Database.

✔ The Client sends Requests.

✔ The Server processes Requests.

✔ The Server returns Responses.

✔ DNS converts Domain Names into IP Addresses.

✔ HTML creates structure.

✔ CSS provides styling.

✔ JavaScript adds interactivity.

✔ MedRoute AI follows the Client → Server → Database architecture.

---

# Interview Questions

1. What is the Internet?

2. What is an IP Address?

3. What is DNS?

4. Explain the difference between a Domain Name and an IP Address.

5. What is the difference between a Client and a Server?

6. What is a Request?

7. What is a Response?

8. What is HTML?

9. What is CSS?

10. What is JavaScript?

11. What happens when you type google.com into a browser?

12. Why should a frontend never directly communicate with a database?

---

# Summary

Modern web applications work by allowing a Client to communicate with a Server over the Internet.

The Client sends Requests.

The Server processes the Requests, communicates with databases or external services and returns Responses.

This Client–Server architecture forms the foundation of almost every modern software application, including MedRoute AI.