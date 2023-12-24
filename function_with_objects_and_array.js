//+++++++++++++++++++++++++++++++++++++++++++++Function with array++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//function calculatecartprices(val1, val2, ...number1) /*in this function these three dotes arte speks as (rest operator)*/{
//  return number1                       /*rest operator convert all value into bundle or array*/

/*these val1 and val2 takes the value of 200 and 500 */
//}
//console.log(calculatecartprices(200, 500, 400, 2000, 5000));


//++++++++++++++++++++++++++++++++++++++++++++Functions with objects+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

const user = {
    username: "Aayush",
    price: 1999
}
function userdetails(mine) {
            console.log(`username is ${mine.username} and price is ${mine.price}`);

}

//userdetails(user)
//++++or++++++++//
userdetails({
    username: "aayush",
    price:299
})
