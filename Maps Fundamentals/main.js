const rest =  new Map();
rest.set("name", "Classsico Italiano");
rest.set("1", "Firenze, Italy");
console.log(rest.set("2", "Lisbon, Portugal"));

rest
.set("categories",["Seafood", "Fine Dining","Fine Dining2"])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');
// Lấy phần tử
console.log(rest.get(true));
console.log(rest.get('name'));
//Gọi ra cái không có
console.log(rest.get(1)); //undefined

const time = 8;
console.log(rest.get(time > rest.get('open') && (time < rest.get('close'))));
console.log(rest.has("categories"));
rest.delete("2");
console.log(rest)
console.log(rest.size)
// rest.clear()

const test = new Map();
test.set([1,2], "OK");
console.log(test.get([1,2])) //undefined

const test2 = new Map();
const arr = [1,2]
test2.set(arr, "OK");
console.log(test2.get(arr));



