import express from "express";
import hospitalRoutes from "./routes/hospital.routes";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("MedRoute AI API is running");
});

app.use("/api/hospitals", hospitalRoutes);

app.listen(PORT, () => {
    console.log(`MedRoute AI server running on port ${PORT}`);
});



/*
============================================================
SERVER.TS EXPLANATION
============================================================

1. import express from "express";

Imports Express into our backend.


2. import hospitalRoutes from "./routes/hospital.routes";

Imports the hospital router that we created inside:

src/routes/hospital.routes.ts

This allows server.ts to use all hospital-related routes.


3. const app = express();

Creates our Express application.


4. const PORT = 5000;

Defines the port on which our backend server will run.

Backend address:

http://localhost:5000


5. app.get("/", ...)

Creates the root GET route.

When we open:

http://localhost:5000/

the server responds:

MedRoute AI API is running


6. app.use("/api/hospitals", hospitalRoutes);

Connects our hospital router to the main Express application.

"/api/hospitals" is the base URL.

Inside hospital.routes.ts we created:

router.get("/")

Therefore Express combines them:

/api/hospitals + /

Result:

GET /api/hospitals

So opening:

http://localhost:5000/api/hospitals

will execute the route inside hospital.routes.ts.


7. app.listen(PORT, ...)

Starts the Express server and listens for requests
on port 5000.


============================================================
CURRENT REQUEST FLOW
============================================================

Browser

    ↓

GET /api/hospitals

    ↓

server.ts

    ↓

app.use("/api/hospitals", hospitalRoutes)

    ↓

hospital.routes.ts

    ↓

router.get("/")

    ↓

res.json(...)

    ↓

Browser receives JSON response


============================================================
WHY ARE ROUTES SEPARATE?
============================================================

We could put every API inside server.ts.

But MedRoute AI will eventually have many APIs such as:

/api/hospitals
/api/users
/api/auth
/api/recommendations

Keeping everything inside server.ts would make the file
very large and difficult to maintain.

Therefore we separate routes into different files.

Example:

routes/

hospital.routes.ts
user.routes.ts
auth.routes.ts
recommendation.routes.ts

This makes the backend organized and scalable.
============================================================
*/