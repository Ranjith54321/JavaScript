// step's
/*
    -> create the obj's
    -> add the obj's into the map with key's
    -> access one by one
    -> iterate using for of loop
    -> iterate ussing for each loop

    */

    var ranjith = {
        name : 'I am Ranjith',
        age : 21,
        isActive : true,
    }
    var dot = {
        name : 'I am dot',
        age : 21,
        isActive : true,
    }
    var vr46 = {
        name : 'I am vr46',
        age : 15,
        isActive : false,
    }

    let users = new Map()

    //console.log(typeof users)

    users.set('ran',ranjith);
    users.set('dot',dot);
    users.set('vr',vr46);

    // to find the size of the map
    console.log(users.size)

    // to access one by one
    console.log(users.get('ran'))

    // get all the keys
    console.log(users.keys())

    // get all the values
    console.log(users.values())

    

    // --> for of loop and for each loop eaxmples in ex2.js file bascically these are iterators