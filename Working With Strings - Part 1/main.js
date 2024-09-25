const airline = 'TAP Air Potugal';
const plane = 'A320';
console.log(plane[1]);
console.log('B737'[0])

//Vị trí chỉ mục [nó không đếm ""]
console.log(airline.indexOf("r"))
console.log(airline.lastIndexOf('r'))

//Cắt từ vị trí 4 và kết thúc là 7
console.log(airline.slice(4,7)); //Air
// Đếm từ cuối lên đầu -2
console.log(airline.slice(-2)) // la
console.log(airline.slice(1, -1)) //AP Air Potuga

const checkMiddleSeats = function(seat){
    const s = seat.slice(-1);
    if(s==="B" || s === "E") console.log("You got the middle seat ");
    else console.log("Good lucky");
}
checkMiddleSeats("34B");
checkMiddleSeats("34E");
checkMiddleSeats("34D");

console.log(new String("jonas")) //Đối tượng chuỗi
console.log(typeof new String("jonas")) // vì nó là đối tượng chuỗi nên nó trả về{object}
console.log(typeof new String("jonas").slice(1)); //chuỗi thông thường [string]

// fix lại tên
const passengerLower = '    hIeU  ' //Hieu
const fixtoLowerCase = passengerLower.toLowerCase().trim();
const passengetCorrect = fixtoLowerCase[0].toUpperCase() + fixtoLowerCase.slice(1);
console.log(passengetCorrect);

// repalcing
const USD = "100,25$";
const VND = USD.replace("$","đ").replace(",",".");
console.log(VND);

// Thay thế toàn bộ [//g]
const title = "hello tất cả các fen của tôi, hello cả kẻ thù của tôi nữa"
console.log(title.replace(/hello/g, "Tạm biệt"));

//Booleans [includes] [startWith] [endWith]
const planeVN = "MH370";
console.log(planeVN.includes("MH370")) //TRUE

//[Split] chuỗi thành mảng 
//[join] mảng thành chuỗi
const newArray = ['Phát', 'Hiếu', 'Tèo'];
console.log(newArray.join(", ")); //Phát, Hiếu, Tèo

const testTitle = (name) =>{
    const arr = [];
    const newtitle = name.split(" ");
    for (const el of newtitle) {
        // arr.push(el[0].toUpperCase() + el.slice(1))  //c1
        arr.push(el.replace(el[0],el[0].toUpperCase()))
    }
    console.log(arr.join(" "))
}
testTitle("đoàn minh Hiếu")

//Padding
const test = "50";
//[padStart] thêm chuỗi với độ dài mong muốn vào đầu chuỗi, 
// độ dài mong muốn ở đây là bẳng tổng độ dài của CẢ chuỗi sau khi thêm
//[padEnd] ngược lại
console.log(test.padStart(3,"0").padEnd(6,"+"));  //050+++

const maskCreditCard = (number) =>{
    const str = number + "";
    const last = str.slice(-4);
    const result = last.padStart(str.length,"*");
    console.log(result);
}
maskCreditCard(128743647736)
maskCreditCard(128743647736487374)