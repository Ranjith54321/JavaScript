

JS Engine :

    Basically Programming languages has either Interpreter or Compilor

    but JS V8 engine has JIT Compilor which means it has both Compilor and Interpreptor

        JIT -> Just In Time



                                JS file
                                  |
                                  |
                                Parser
                                  |
                                  |  (turn it into)
                             AST (Abstract Syntax Tree)
                                          \
                                           \
                                      Interpretor
                                       /      \
                                      /        \
                                     /        ByteCode
                                profiler
                                  /
                                /
                             Compilor  ------> Optimized code 


    -> InterPretor start's fast but it will run slowly 

    -> Compailor Starts late but runs fast

    -> Interpretor runs first it find anything difficult to run then it will pass it to the compailor (only that part of the code) then it will run for it

    -> byte code is nothing but Processed JS code but not the machine code previous stage of machine code

    -> we Can make JS code run only by the compailor or the Interpretor Technically (by code implementation)

