//+++++++++++++++++++++++++++++++++++++object litrels +++++++++++++++++++++++++++++++++++++++//
const obj = {
    name: "aayush",
    "full name": "Aayush chauhan",
    //now there is no method by which we can accress it by /*1*/ console
    age: 16,
    class: 11,
    location : "UP" ,
}
/*1*/console.log(obj.location);
/*1*/console.log(obj["location"]);
/*3*/console.log(obj["full name"]);