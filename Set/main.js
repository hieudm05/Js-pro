const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'
]);
console.log(ordersSet); //Mỗi phần tử chỉ được xuất hiện 1 lần

console.log(new Set('jonas')); //{'j', 'o', 'n', 'a', 's'}
//size chi đo phần tử của Set và Map thôi
console.log(ordersSet.size) // 3
// [has] Kiểm tra xem phần tử đó trong mảng không => true/false
console.log(ordersSet.has("Pasta"))

//Thêm phần tử
ordersSet.add("Mì tôm");

// Xoá phần tử
ordersSet.delete("Risotto")
// Dọn dẹp cả mảng
// ordersSet.clear();
console.log(ordersSet);

for (const element of ordersSet) {
    console.log(element);
}

//ex
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// Tạo ra mảng bằng toán spread
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

