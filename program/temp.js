// const a = 10;
// const b = 20;

// if(a > b){
//     console.log("A is Bigger.");
// }
// else if( a == b){
//     console.log("A is similar to B");
// }
// else if( a < b){
//     console.log("A is less than B");
// }
// else{
//      console.log("B is Bigger.");
// }

for(let i = 1;i<= 10;i++){
    console.log("i is",i);
}

// const a = [ 10,2,32,4,5];
// const c = [ "v", "i","v"];

// for(let b of c){
//      console.log("c is",b);
// }


const a = [ 10,2,32,4,5];

for(let b of a){
    switch(b){
        case 2:
            console.log("2 is even.");
            break;
        case 4:
        console.log("4 is also even.");
            break;
        case 10:
            console.log("10 is also even number.");
            break;

    }
}