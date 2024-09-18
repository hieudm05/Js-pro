const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

//     1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví 
//     dụ: "Goal 1: Lewandowski")
        const player = [...game.scored];
        for (const [i,j] of player.entries()) {
            console.log(`Goal ${i+1}: ${j}`);
        }
//     2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console (Chúng ta đã 
//     học cách tính trung bình tổng ở phần trước, các bạn có thể xem lại nếu không 
//     nhớ)
        const odd = Object.values(game.odds);
        let sum = 0;
        for (const el of odd) {
            sum+= el
        }
        let AVG = sum / odd.length
        console.log(AVG);

//     3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//      Tỉ lệ thắng của Bayern Munich: 1.33
//      Tỉ lệ hòa of draw: 3.25
//      Tỉ lệ thắng của Borrussia Dortmund: 6.5
//      Lấy ra tên đội bóng trực tiếp từ object 'game', bạn không nên "hardcode" tỉ lệ
//      thắng của mỗi đội (ngoại trừ trường hợp 2 đội hòa nhau).
       for (const [club, match] of Object.entries(game.odds)) {
          const str = match === "x" ? " Tỉ lệ hòa": `Tỉ lệ thắng của ${game[club]}`;
          console.log(`${str}: ${match}`);
       }
//     Chú ý: Lưu ý cách tỷ lệ cược và đối tượng trò chơi có tên thuộc tính giống nhau 

//     Thêm: Tạo ra 1 đối tướng là 'scorers', đối tượng này gồm các thuộc tính với key 
//     (tên thuộc tính) là tên cầu thủ đã ghi bàn, value (giá trị) là số bàn thắng đã ghi.
//     Ví dụ:
//      {
//     Gnarby:1,
//     Hummels:1,
//     Lewandowski: 2
//      }

      const scorers = {};
      for (const players of game.scored) {
          scorers[players] ? scorers[players]++ :( scorers[players] = 1)
      } 
      console.log(scorers);
       
      


      

