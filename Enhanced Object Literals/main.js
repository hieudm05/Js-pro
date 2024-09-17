//Shorthand property names (Tên thuộc tính rút gọn): 
// Nếu tên biến trùng với tên thuộc tính, bạn có thể chỉ cần viết tên thuộc tính mà không cần gán giá trị riêng biệt.
const weekDays = ["thu_new", "fri", "sat"];
const newFri = "fri_new";
const openingHours = {
        [weekDays[0]]: {
        open: 12,
        close: 22,
      },
      newFri: {
        open: 12,
        close: 23,
      },
      sat: {
        open: 0,
        close: 24,
      },
  };

console.log(openingHours);
