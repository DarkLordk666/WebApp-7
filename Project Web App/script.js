const selectElement = document.getElementById('game_genres');
// รับ API Key จาก Steam
const apiKey = '9D5AC3066AEE33673D47690AC66E2E3D';

// สร้าง URL ของ API ข้อมูลเกม
const gameInfoURL = 'http://localhost:3000/api/gameList';

// สร้างฟังก์ชันสำหรับดึงข้อมูลเกม
async function fetchGameInfo() {
  try {
    const response = await fetch(gameInfoURL);
    if (!response.ok) {
      throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูล');
    }
    const data = await response.json();
    return data.applist.apps;
  } catch (error) {
    console.error(error);
  }
}

// ฟังก์ชันสำหรับแสดงรายชื่อเกมตามประเภท
function displayGamesByGenre(genre) {
    fetchGameInfo().then((games) => {
      const gameList = document.getElementById('gameList');
      gameList.innerHTML = ''; // เคลียร์รายการก่อนแสดงผลใหม่
  
      games.forEach((game) => {
        // ตรวจสอบประเภทของเกม
        const genres = game.genres || [];
        const gameGenres = genres.map((genreData) => genreData.description);
  
        if (genre === 'All' || gameGenres.includes(genre)) {
          const gameName = document.createElement('div');
          gameName.textContent = game.name;
          gameList.appendChild(gameName);
        }
      });
    });
  }
  
  // เรียกใช้ฟังก์ชันเพื่อแสดงเกมตามประเภทที่เลือก
  const gameGenresSelect = document.getElementById('game_genres');
  gameGenresSelect.addEventListener('change', () => {
    const selectedGenre = gameGenresSelect.value;
    displayGamesByGenre(selectedGenre);
  });