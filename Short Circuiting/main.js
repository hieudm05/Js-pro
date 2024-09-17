// Trả về những giá trị có thật
//OR [||] 
// khi mà nó kiểm tra từ trái qua phải mà nó thấy đúng, là nó xuất ra luôn
console.log(3 || "jonas");
console.log("" || "jonas");
console.log(true || 0);
console.log(undefined|| null);

console.log(7 || "Hieu" || null || "jones"); //ra 7, vì nó thấy 7 là giá trị thực đầu tiên nên nó lấy luôn
// AND [&&]
// Khi mà nó kiểm tra, phải đúng hết nó mới xuất ra, còn chỉ cần sai 1 cái là nó cũng
// dừng lại
console.log("------AND-----")
console.log(0 && "hieu");

// Nó chỉ lấy giá trị trung thực thôi nhé
console.log(7 && "Hiếu" && null && "jonas") // nó kiểm tra đến null là không thực nên nó sẽ lấy "null", dừng lại ở đây


