const restaurants = {
    name: "Ocean Delight ,Ocean Delight2",
    location: "123 Beach Ave, Miami, FL",
    categories: ["Seafood", "Fine Dining", "Fine Dining2"],
    starterMenu: ["Shrimp Cocktail", "Clam Chowder", "Crab Cakes"],
    mainMenu: ["Grilled Lobster", "Seared Scallops", "Seafood Paella"],
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 12,
        close: 23,
      },
      sat: {
        open: 0,
        close: 24,
      },
    },
    order: function (startIndex, mainIndex) {
      return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({
      starterIndex = 1,
      mainIndex = 0,
      time = "20",
      address,
    }) {
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
              will be delivered to ${address} at ${time}`);
    },
    orderpanta: function(ing1,ing2,ing3){
      console.log(`Here is your delicious pata with ${ing1},${ing2} and ${ing3}`);
    },
    orderPizza: function(mainIngredients, ...otherIngredients){
        console.log(mainIngredients);
        console.log(otherIngredients);
    }
  };
//SPREAD, because on RIGHT side of = [trải]
const arr = [1,2,...[3,4]]; 
console.log(arr) // [1,2,3,4]
// REST, because on LEFT side of = [gom]
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b, others); [1,2,[3,4,5]];

const [aF, ,bF, ...otherFood] = [...restaurants.starterMenu, ...restaurants.mainMenu];
console.log(aF,bF,otherFood);


// 2) function

const add = function (...numbers){
    let num = 0;
    for (let i = 0; i < numbers.length; i++) {
        num += numbers[i]; 
    }
    console.log(num);
    
}
add(1,2,3);
add(4,3,4);
add(6,4,3);

const x = [3,4,3];
add(...x);

restaurants.orderPizza("water", "butter", "egg", "milk")



