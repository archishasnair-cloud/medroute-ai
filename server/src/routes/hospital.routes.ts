import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "Hospital API is working"
    });
});

export default router;


/*
1. import { Router } from "express";

Router is provided by Express.
It allows us to create API routes in a separate file instead
of putting every route inside server.ts.


2. const router = Router();

Creates a new Express router.

We will use this router for hospital-related endpoints.


3. router.get("/", ...)

Creates a GET endpoint for this router.

Later, when we connect this router to:

/api/hospitals

this "/" will represent:

GET /api/hospitals


4. req

req means Request.

It contains information sent by the client.


5. res

res means Response.

It is used to send information back to the client.


6. res.json(...)

Sends a JSON response.

Our response is:

{
    "message": "Hospital API is working"
}


7. export default router;

Exports the router so another file, such as server.ts,
can import and use these hospital routes.
*/