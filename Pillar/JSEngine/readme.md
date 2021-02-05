# ALL ABOUT JS ENGINE : 

## Java Script Evironment : 

    We can run Java Script code anywhere like in the robot, web browser, coffee machine etc..,

    All it need is Java Script Runtime Environment need to be there

    add pic here JSrun ENV ---

    So Every JS Runtime Environment has JS Engine, API (to communicate with out world), call back Queue (cq), MicroTask Queue (mq), Event Loop.

    These are the Main things. With our above things JS Runtime Environment is nothing 

    Let's take Browser's Java Script Runtime Environment and NodeJS Runtime Environment :

        Both has almost same functionality but the implementation of them is difference 

        because Browser's Runtime Environment is totally different and NodeJS Runtime Environment is different

        also Browsers Runtime Environment has DOM API's but NodeJS don't

        Browsers has uniqe feature called Local Storage 

        but, Browser and NodeJS Runtime Environment have setTimeout() but their code implementation inside is different

## JS Engine : 

    add js engine first pic here --

    The common step to execute JS code in any Runtime Environment is:
         CODE -> PARSING -> COMPILATION -> EXECUTION

    After PARSING the js code is converted into tokens eg :
        var a = 10 [ this is code have 4 tokens => var, a, =, 10] 
    
    add js engine AST pic ----

    After tokens that is passed to Syntax Parser then it forms AST [Abstract Syntax Tree]

    see here https://astexplorer.net/ to uder stand the AST 

    add js engine JIT compailor ----

    After AST step the code is passed to JIT compilor [Just In Time Compailation]

    JIT compailes whenever it needs based on JSEngine 

    You Know about call stack and how it's works

    In Memory Heap it stores variables and functions

    Garbage collector(GC) is used to  clean up the Memory Heap it uses Special Algorithm called Mark and Sweep

    Some of the Other Optimization tasks are done in compilor(O)

    Based on Algorithms like :
            1. Linlining
            2. Copy elision
            3. inline caching

    
## Fastest JS Engine :

    Google's V8 engine is the fastet JS engine in the world

    It is build by C++

    add pic of v8 ;

    It has Special Garbage Collector called Orinoco


### Different JS Engines has Diferent Implementations based on thrir needs. so this is common for all JS Engines 
