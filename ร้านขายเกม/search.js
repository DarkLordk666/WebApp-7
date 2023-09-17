document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchResults = document.querySelector(".search-results");
    const gameList = document.getElementById("game-list").getElementsByTagName("option");

    // เรียกใช้ฟังก์ชัน filterGames เมื่อหน้าค้นหาโหลดเสร็จ
    filterGames("");

    searchButton.addEventListener("click", function () {
        filterGames(searchInput.value);
    });

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault(); // ป้องกันการส่งฟอร์ม
        filterGames(searchInput.value);
    });

    function filterGames(keyword) {
        searchResults.innerHTML = ''; // ล้างผลลัพธ์ค้นหาเดิม
        keyword = keyword.trim().toLowerCase(); // ตัดช่องว่างหน้า-หลังและแปลงเป็นตัวพิมพ์เล็ก

        if (keyword === '') {
            // ถ้าคำค้นหาว่าง ให้แสดงเกมส์ทั้งหมด
            for (const game of gameList) {
                const gameResult = document.createElement("li");
                const gameLink = document.createElement("a");
                gameLink.href = "Product-Detail1.html"; // สร้างลิงก์ไปยังหน้า Product-Detail1.html
                const imageBox = document.createElement("div");
                imageBox.classList.add("image-box");
                const gameImage = document.createElement("img");
                gameImage.src = "Capture.png";
                gameImage.alt = "รูปภาพเกมส์";
                const gameTitle = document.createElement("strong");
                gameTitle.textContent = game.value;

                imageBox.appendChild(gameImage);
                imageBox.appendChild(gameTitle);
                gameLink.appendChild(imageBox);
                gameResult.appendChild(gameLink);
                searchResults.appendChild(gameResult);
            }
        } else {
            // ถ้ามีคำค้นหา
            for (const game of gameList) {
                const gameName = game.value.toLowerCase();

                if (gameName.includes(keyword)) {
                    const gameResult = document.createElement("li");
                    const gameLink = document.createElement("a");
                    gameLink.href = "Product-Detail1.html"; // สร้างลิงก์ไปยังหน้า Product-Detail1.html
                    const imageBox = document.createElement("div");
                    imageBox.classList.add("image-box");
                    const gameImage = document.createElement("img");
                    gameImage.src = "Capture.png";
                    gameImage.alt = "รูปภาพเกมส์";
                    const gameTitle = document.createElement("strong");
                    gameTitle.textContent = game.value;

                    imageBox.appendChild(gameImage);
                    imageBox.appendChild(gameTitle);
                    gameLink.appendChild(imageBox);
                    gameResult.appendChild(gameLink);
                    searchResults.appendChild(gameResult);
                }
            }
        }
    }
});