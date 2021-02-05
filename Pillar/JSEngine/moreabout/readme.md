

JS Engine :

    Basically Programming languages has either Interpreter or Compilor

    but JS V8 engine has JIT Compilor which means it has both Compilor and Interprepter

        JIT -> Just In Time (It works when ever it needs)



                                JS file
                                  |
                                  |
                                Parser
                                  |
                                  |  (turn it into)
                             AST (Abstract Syntax Tree)
                                          \
                                           \
                                      Interpreter
                                       /      \
                                      /        \
                                     /        ByteCode
                                profiler
                                  /
                                 /
                             Compiler  ------> Optimized code 


    -> InterPreter start's fast but it will run slowly  (it is not going to optimize the code)

    -> Compailer Starts late but runs fast (it do optimization on the code eg: it makes optimization in for loop logic to make simplified code)

    -> Interpreter runs first it find anything difficult to run then it will pass it to the compailer (only that part of the code) then it will run for it

    -> Profiler is always looking for the Interpretor if any thing need to done for it , it is like a monitor

    -> then the code is passed to the Compiler

    -> If the code is passed to the compailer then the byte code replaced with optimized Machine code *** then at that point  
                      the Optimized machine code is used instead of Bytecode ***

    -> So this is the reason for JavaScript runs fast 

    -> byte code is nothing but Processed JS code but not the optimized code previous i.e, stage of machine code

    -> we Can make JS code run only by the compailer or the Interpreter Technically (by code implementation)

    -> In V8 Engine Compiler is called Turbo Fan

    -> In V8 Engine Interpreter is called Ignition

