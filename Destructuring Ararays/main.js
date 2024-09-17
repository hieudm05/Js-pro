const arr = [1,2,3];
const [x,y,z] = arr;
console.log(x,y,z);

const restaurants = 
    {
      name: "Ocean Delight",
      location: "123 Beach Ave, Miami, FL",
      categories: ["Seafood", "Fine Dining","Fine Dining2"],
      starterMenu: ["Shrimp Cocktail", "Clam Chowder", "Crab Cakes"],
      mainMenu: ["Grilled Lobster", "Seared Scallops", "Seafood Paella"],
      order: function(startIndex,mainIndex){
        return [
            this.starterMenu[startIndex],
            this.mainMenu[mainIndex]
        ];
      }
    }

// const [first, second] = restaurants.categories;
// console.log(first,second);

// Huỷ cấu trúc
let [main, , secondary] = restaurants.categories;
console.log(main, secondary); // Output: "Seafood" "Fine Dining2"

// Hoán đổi giá trị
[main, secondary] = [secondary, main];
console.log(main, secondary); // Output: "Fine Dining2" "Seafood"

// Recive 2 return values from a function (Nhận 2 giá trị trả về từ 1 hàm)
const [startIndex,mainCourse] = restaurants.order(2,0);
console.log(startIndex,mainCourse);

// Nested destructuring [Phép hủy cấu trúc lồng nhau]
const nested = [2,4, [5,6]];
// const [i, ,j] = nested;
// console.log(i, j); // (2) [5, 6]

// Lấy 1 cách riêng lẻ tất cả ra 
const [i, ,[j,k]] = nested;
console.log(i,j,k); //2 5 6

//Default values
const [p = 1, q = 1, r = 1]= [8,9];
console.log(p, q , r); // 8,9,1




  
  

