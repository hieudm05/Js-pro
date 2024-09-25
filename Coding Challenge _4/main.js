// Viết 1 chương trình nhận vào 1 danh sách các biến được viết theo kiểu 
// underscore (ví dụ: ten_bien) và chuyển nó sang dạng camelCase (ví dụ: tenBien)
// Đầu vào sẽ đến từ một vùng văn bản được chèn vào DOM (xem mã bên dưới) và 
// chuyển đổi sẽ xảy ra khi nhấn nút.
// - Dưới đây là dữ liệu đầu vào cần test:
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// - Đầu ra mong muốn (Hãy log các kết quả này ra màn hình để đối chiếu với 
// kết quả phía dưới)
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Lưu ý 1: Hãy lưu ý rằng ký tự nào xuất hiện 1 ký tự xuống dòng "\n" trong đoạn 
// text �
// Lưu ý 2: Giải pháp đơn giản cho phần này là tách ra 2 từ từ ký tự đầu vào ví dụ: 
// ("a_b" -> "a" và "b")
// Lưu ý 3: Đừng để ý về dấu tick kia ✅. Vấn đề sẽ được giải quyết khi bạn chuyển 
// đổi �
// Lưu ý 4: Thử thách này có thể sẽ khó với bạn, vì vậy hãy bắt đầu xem cách giải 
// trong trường hợp cảm thấy không có hướng giải quyết.

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// document.querySelector("button").append("Click")
// document.querySelector("button").addEventListener("click",function(){
//     const text = document.querySelector('textarea').value
//     const newArr =  text.split("\n");
//     for (const [i,el] of newArr.entries()) {
//         const [first, second] = el.toLowerCase().trim().split("_");
//         const out = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
//         console.log(`${out.padEnd(20)}${"✅".repeat(i+1)}`)
//     }
// });

// String Methods Practice
const flights =
 `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao937661
09;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis
2323639855;12:30`;


// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const newFlights = flights.split("+");
// console.log(newFlights);
for (const a of newFlights) {
    const [i,from,to,time] = [...a.split(";")];
    const first = i.startsWith("_Delayed") ? i.replace("_","🔴").replace("_"," ") : i.padStart(17).replace("_"," ");
    console.log(`${first} from ${from.toUpperCase().slice(0,3)} to ${to.toUpperCase().slice(0,3)} (${time})`);
}

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}