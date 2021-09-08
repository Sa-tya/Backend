# Day 7 of Backend module of Devsnest.

## About Express Module and CRUD operations on different HTTP methods.

### Express installation command
    npm install --save express

### nodemon installation commmand
    npm install --save-dev nodemon

## What is Express in NODE ?
    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Basically it makes HTTP request handling easy.

### why we use nodemon ?
    It will update your server after every changes else you have to do ctrl + c then start again every times.

## What is HTTP?
    HTTP(Hyper Text Transfer Protocol) is a protocol to communicate between client and server.
    It works as a request-response protocol between a client and server.

## HTTP methods:-

### GET:-
    Data request from specified resource.

    It can be saved in your cached memory of browser as well as history.
    Reques length is restricted and it can be bookmarked.
    You should not use this when you will deal with sensetive data.
    Query string is in key value pair.

### POST:-
    It is used to send data to server to create or update a resource.
    
    It can't be bookmarked.
    It will not save in history or cached memory.
    It has no any length restriction.

### PUT:-

### DELETE:-
### OPTIONS:-
### HEAD:-
### PATCH:-

## HTTP status code:-
### 1XX:-
    Information

### 2XX:-
    Successful
### 3XX:-
    Redirection
### 4XX:-
    Client side error
### 5XX:-
    erver side error

## requst and response in HTTP methods:-
    It is the 2 arguments in every method of HTTP.
    Request argument will carry the information which client has sent with request.
    Response is the argument which will sent data as response as well as status code.

### Response method
    response.status() - It is used when you wanted to send statusCode as well as some information.

    response.sendstatus() - It is used when you wanted to send only statusCode.

    response.send() - It will contain your response data.

    response.json() - It will contain your response on fomatted way.

### Request method

    request.query - You can access the data which is sent by client.

    request.params - It specifiy the dynamic data in URL.
    
### url slash

    1. + :-
    ab+c I.e. Any thing between ab and c.
    Ex - abGFHGSFHGAFSc
    2. * :-
    ab*c
    Ex - ab

    3. ? :-
    ab?c I.e. b is optional
    Ex - abc, ac

    4. () :- (budle a no of characters)
    ab(cd)?e
    Ex - abe, abcde

