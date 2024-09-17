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

const menu = [...restaurants.starterMenu, ...restaurants.mainMenu];
for(const item of menu) console.log(item);
// Cách để gọi ra chỉ mục index là dùng entries
for (const item2 of menu.entries()) console.log(item2);
for (const item3 of menu.entries()) console.log(`${item3[0] + 1}:${item3[1]}`); //c1
for (const [i,j] of menu.entries()) console.log(`${i + 1}:${j}`);               //c2