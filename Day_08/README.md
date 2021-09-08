# Day 8 of Backend module of Devsnest.

### About middleware in express in node.

## What is Middleware in express.?
    Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

#### Middleware functions can perform the following tasks:

    1. Execute any code.
    2. Make changes to the request and the response objects.
    3. End the request-response cycle.
    4. Call the next middleware function in the stack.

#### You can use midleware in 2 ways.
    1. Globally i.e. Run before any response.
    2. Locally i.e. Run before specific response.
