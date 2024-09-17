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
  };

// Toán tử lây lan [spread]
const arr = [7,8,9];
const newArr = [1,2,3, ...arr];
console.log(newArr); // [1,2,3,7,8,9]
console.log(...newArr);  //1,2,3,7,8,9

const newMenu = [...restaurants.mainMenu, "Gnocci"];
console.log(newMenu); // ['Grilled Lobster', 'Seared Scallops', 'Seafood Paella', 'Gnocci']

//Copy array
const mainMenuCopy = [...restaurants.mainMenu];
//join 2 arrays
const menu = [...restaurants.starterMenu, ...restaurants.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects [có thể lặp]
const str = "join";
const letter = [...str, "hihi"];
console.log(letter); // j o i n hihi
console.log(...letter);

// Real-world example
// const ingredients = [prompt("one"), prompt("two"), prompt("three")];
// console.log(ingredients);

// restaurants.orderpanta(ingredients[0], ingredients[1], ingredients[2]);
// restaurants.orderpanta(...ingredients);

//objects
const newRestaurants = {founderIn: 2005, ...restaurants, founder: "Minh Hieu" };
console.log(newRestaurants);

const restaurantsCopy = {...restaurants};
restaurantsCopy.name = "Minh Hiếu";
console.log(restaurantsCopy.name);
console.log(restaurants.name);
