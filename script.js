let arr = [2, 3, 4, 5, 6, 7, 8];

//Find even number the array
let bag1 = "";
for(let i=0; i<arr.length; i++){
    if (arr[i]%2 == 0) {
        bag1 = bag1 + arr[i] + " ";
    }
    console.log(bag1);
}

//Find odd number the array
let bag2 = "";
for(let i=0; i<arr.length; i++){
    if (arr[i]%2 != 0) {
        bag2 = bag2 + arr[i] + " ";
    }
    console.log(bag2);
}

//Pattren printing
/*
                    *
                    * *
                    * * *
                    * * * * 
                    * * * * *
*/

for(let i=1; i<=5; i++){
    let bag3 = "";
    for(let j=1; j<=i; j++){
        bag3 = bag3+ "*" + " ";
    }
    console.log(bag3);
}


