# Day 8 of Backend module of Devsnest.

### About middleware in express in node.

## What is Middleware in express.?
    Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
    It is the various function which we use before response on varius HTTP's request.

#### Middleware functions can perform the following tasks:

    1. Execute any code.
    2. Make changes to the request and the response objects.
    3. End the request-response cycle.
    4. Call the next middleware function in the stack.

#### You can use midleware in 2 ways.
    1. Globally i.e. Run before any response.
    2. Locally i.e. Run before specific response.

### How to use middleware with various request ?

    We can use middleware as a argument in HTTP method and as a seperate method.

    const middleware = (req,res,next)=>{
        if(req.query === anything) next()
        else res.sendStatus(404);
    }

    1. Middleware as a argument in HTTP methods
    app.get('/',middleware,(req,res)=>{
    res.send('Hello...')
    })

    2. app.use(middleware); // It will execute after every http request
        app.use('/abc',middleware) // It will execute after every request which will start with '/abc'
        Like:- '/abc/ds', '/abc/a/as/' etc
    
    3. app.all(mmiddleware); //It will act like use method but it will support multiple middleware.

### execution precedence
    use >> all >> http method