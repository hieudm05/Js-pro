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
};

restaurants.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
restaurants.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurants;
console.log(name, openingHours, categories);

const {
  name: restaurantsName,
  openingHours: hours,
  categories: tags,
} = restaurants;
console.log(restaurantsName, hours, tags);

//Default values [giá trị mặc định]
const { menu = [], starterMenu: straters = [] } = restaurants;
console.log(menu, straters);

// Mutating variables [Thay đổi biến]
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // bỏ vào trong dấu ngoặc nó sẽ không bị lỗi cú pháp
console.log(a, b);

//Nested objects [Đối tượng lồng nhau]
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
