# Asynchronous JavaScript

## How JS Engine Executes code Using Call Stack :

    you know JS is synchronous single threaded language

    It executes one line at a time lets see the below example

   ![Basic Call Stack](https://github.com/Ranjith54321/JavaScript/blob/main/Pillar/AysncJS_and_EventLoop/images/1.jpg)

    so here every function ecxcutes in the *call stack* only like C Programming*

    so call stack is the main source to execute the code (call stack is available inside the JS ENgine) 
                    JS Engine basically available inside every browsers, we have Node JS as a runtime env for outside browsers

    also JS call stack waiting for none what ever inside it has it executes with a fraction on sec's


## Behind the scene in Browser : 

    But some of the tasks need to be done in after particular amount of time 

    here we ustilize the power of call back function's, most of the call back functions functionality not Available in Normal JavaScript

    later most of the features are introduced in  Chrome and NodeJS engines 

  ![WEB API's connection](https://github.com/Ranjith54321/JavaScript/blob/main/Pillar/AysncJS_and_EventLoop/images/2.jpg) 

    So here lets assume

    in our Programe we need to access the local storage, location, bluetooth functionality, Console, timer and more 

    now these are the functionalities  given by Chrome in the form of API 

## Web API's In JS :

    Below are the some of most common WEB API's that we mostly use 

   ![Few WEB API's](https://github.com/Ranjith54321/JavaScript/blob/main/Pillar/AysncJS_and_EventLoop/images/3.jpg) 

    These API's are comes uder global object of the borwser in Chrome Browser Global object called as *window*

    you call call these API's directly or window.(API name) both are same 

    In NodeJS Global Object Is called **global**

## How setTimeout works Behid the scene in Browser :

   ![setTimeout API](https://github.com/Ranjith54321/JavaScript/blob/main/Pillar/AysncJS_and_EventLoop/images/4.jpg)

    in this funtion 1st global Executon Context will go to the call stack and executes the code line by line 

    when it see the callback functions then this call back fuction along with it's timer registred in side the browser's WEB API ENVIRONMENT

    so now rest of the code will execute now then global Executon Context get deleted 

   ![after Global Execution Deleted From Call stack](https://github.com/Ranjith54321/JavaScript/blob/main/Pillar/AysncJS_and_EventLoop/images/5.jpg)

    after that particular amount of time the call back function get enter in to the call stack and executes it's part

## Event Loops and CallBack Queue in JS :

   ![call Back funtion](https://github.com/Ranjith54321/JavaScript/blob/main/Pillar/AysncJS_and_EventLoop/images/7.jpg)

    the callback function that registred for excution not able to enter call stack directly it will go through via CallBack Queue only

    So after timer ends the call back function go to the CallBack Queue 

    here **Event Loop** is there it continuously checks the callback queue 

    if anything is available inside the callback queue , the EventLoop insert that into the call stack

    then now the call back function execute line by line

    after pushes inside the call stack the content of the Call back Queue will get deleted 

## How Event Listeners works in JS :

   ![For Onclick Event](https://github.com/Ranjith54321/JavaScript/blob/main/Pillar/AysncJS_and_EventLoop/images/8.jpg) 

    in this example this Event listener is not like timer function it needs to be clicked then only it will execute 

    so while global excution context executing line by line when ever it see the call back function it will register inside web API Environment

    Now in this case the call back function will register inside the WEB API ENVIRONMENT with *click* event

    so when ever user click the button then the call back function goes in side the call back Queue

    then here Event Loop Continuously monitor the Call Back Queue, when see anythin inside the call back Queue it pushes inside the call stack

    after pushes inside the call stack the content of the Call back Queue will get deleted 

    Note : here we use button click event this is will available alwasy inside WEB API ENVIRONMENT 


## Why we need Call Back Queue :

   ![multiple Call Back's](https://github.com/Ranjith54321/JavaScript/blob/main/Pillar/AysncJS_and_EventLoop/images/9.jpg)

    when ever call back function  needs to execute we can directly push into the call stack but why we need call back Queue

    like in every web page or any programe there are lot of call back functions may register inside Environments

    At that time Call back Queue only the solution for this problem

    so Event Loop make continuous monitoring there 

## How fetch() works :

   ![Fetching API](https://github.com/Ranjith54321/JavaScript/blob/main/Pillar/AysncJS_and_EventLoop/images/10.jpg)

    In this programe while Blobal execution context runs line by line the call back fuction wil gets registred inside the WEB API ENVIRONMENT

    after that fetch function also gets registred 

    and then event loop will pass them to call stack after call stack gets Empty ***

## Micro Task Queue in JS :

    Micro Task Queue is same like Call Back Queue 

    But Micro Task Queue higher priority than Call Back Queue 

   ![Micro Task Queue](https://github.com/Ranjith54321/JavaScript/blob/main/Pillar/AysncJS_and_EventLoop/images/11.jpg)


    like in this example *cbt* will goes to Call back Queue

    *cbf* goes to the Micro Task Queue 

    lets say but in Gloabl Execution context has still 1000000 lines of code to execute 

    So Event loop wait until 1000000 lines of code to execute ******

    Now here The Event loop starts checking onlu after the call stack gets Empty**

    now Micro Task Queue higher priority than Call Back Queue 

    so Event Loop push all the functions available inside the Micro Task Queue 

    After that only it looks the all Back Queue

## What are Micro Task Queues in JS :

   ![Micro Task Queue Accepts](https://github.com/Ranjith54321/JavaScript/blob/main/Pillar/AysncJS_and_EventLoop/images/12.jpg)

    Now you wondering what are the call back functions go to Micro Task Queue 

    So 1.) Promises and 2.) Mutation Observer are goes to the Micro Task Queue  ***

    All the other call back functions are goes to Call Back  Queue 

    So Promise function and If any Mutation in DOM Tree these are goes to Micro Task Queue

    Call Back Queue Also Called as **Task Queue**

## Starvation of Funtions in Call Back Queue :

   ![Starvation](https://github.com/Ranjith54321/JavaScript/blob/main/Pillar/AysncJS_and_EventLoop/images/13.jpg)

    Like in this case In the Micro Task Queue functions make Another Moicro Task it goes like this,
        then the Call back Queue Task will Execute after all functions Execute in the Micro Task Queue
    
    This is Called Starvation**











    



