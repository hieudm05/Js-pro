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

restaurants.numGuests = 0;
const guests = restaurants.numGuests || 10;
console.log(guests); // 10

//Nullish: null and underfined (NOT 0 or '')
// Nó chỉ kiểm tra xem biến đó có phải là null hoặc underfined hay không thôi,
// còn các trường hợp khác của falsy thì nó không kiểm tra 
restaurants.numGuests2 = 0;
const guests2 = restaurants.numGuests ?? 10;
console.log(guests2); // 0


const numberOne = "dd";
const numberTest = null ?? numberOne;
console.log(numberTest); // "dd"