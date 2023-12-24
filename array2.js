const marvel = ["thor", "scarlet", "dr.strange"]
const DC = ["Superman", "Batman",  "flash"]

//______________________________________________________________________________________________________________________________________________
 
/*marvel.push(DC)*/   //this print only 4 array {1.thor , 2.scarlet, 3.dr.starnge , 4.'Superman', 'Batman', 'flash' }

//console.log(marvel)



//+++++++++++++++++++++++++++++++++++++++++++++++++spread and concat opretor+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//const allheroes = marvel.concat(DC)//this concat make (array1 + array2 = newarray) it make two array into one array
//console.log(allheroes);


//const all_heroes = [...DC, ...marvel]
//console.log( all_heroes);

//______________________________________________________________________________________________________________________________________________

                                       //++this is for make many array into one array++//
                                         
const another_array = [1, 2, 3, [4, 5], 6, [7, 8]]
const real_another_array = another_array.flat(3)// or write infinity inted of 3
console.log(real_another_array);

                             //++for conversion of anthing into aray {like from string,number etc}++//
                             

//we also chekk type 
console.log(Array.isArray("convert"));
console.log(Array.from("convert"));

//for many elemet to one array

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4));
