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
  if(restaurants.openingHours && restaurants.openingHours.mon)
    console.log(restaurants.openingHours.mon.open);

// WITH optional chaining
console.log(restaurants.openingHours.mon?.open)

const days = ['mon','tue','wen','thu','fri','sat','sun'];
for(const day of days){
    // console.log(day);
    //Toán tử ?? sẽ trả về giá trị bên trái nếu giá trị này không phải null hoặc undefined.
    const open = restaurants.openingHours[day]?.open ?? "closed";
    console.log(`On ${day}, We open at ${open}`);
    
}
console.log(restaurants.order?.(0,1) ?? "Method does not exits");
console.log(restaurants.ordertada?.(0,1) ?? "Method does not exits");


