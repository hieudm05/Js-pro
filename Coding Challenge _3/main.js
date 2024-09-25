const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

// 1. Hãy tạo ra 1 mảng các sự kiện khác nhau xảy ra trong suốt trận đấu (lưu ý là 
// không trùng nhau)
const gameEventsSet = new Set([...gameEvents.values()]);
console.log(gameEventsSet);
// 2. Sau khi trò chơi kết thúc, phát hiện ra rằng thẻ vàng phút 64 là không đúng. Hãy 
// xóa nó khỏi danh sách sự kiện trong trận đấu.
//     gameEvents.delete(64);
//     console.log([element]);
// 3. In ra console theo định dang như sau:"1 sự kiện xảy ra, trung bình mỗi 9 phút". 
// Lưu ý răng mỗi trận đấu có 90 phút.
// gameEvents.delete(92);
// console.log(`Một sự kiện xảy ra, trung bình mỗi ${90/ gameEvents.size} phút`)
  
// 4. Lặp toàn bộ mảng sự kiện và in ra màn hình, đánh dấu đối với mỗi sự kiện trong 
// trận đấu diễn ra trong hiệp 1 hay hiệp 2,
// Ví dụ: [FIRST HALF] 17: ⚽ GOAL

for (const [key,values] of gameEvents) {
    const half = key <= 45 ? "FIRST" : "SECONDS";
    console.log(`[${half} HALF] ${key}: ${values}`);
}


