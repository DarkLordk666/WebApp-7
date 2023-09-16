const loginForm = document.getElementById('login');
const usernameInput = document.getElementsByName('Username')[0];
const passwordInput = document.getElementsByName('Password')[0];
const rememberCheckbox = document.getElementsByName('remember')[0];
const btn = document.getElementById('btn');
const backToLoginLink = document.getElementById('back-to-login');

// Add event listener to the form
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
    window.location.href = 'login.html'; // Redirect to the login page
    // Get form values
    const username = usernameInput.value;
    const password = passwordInput.value;
    const remember = rememberCheckbox.checked;

    // You can add your login logic here
    if (username === 'your_username' && password === 'your_password') {
        // เก็บ username ใน Local Storage
        localStorage.setItem('username', username);
        // ลิงก์ไปยังหน้า user.html
        window.location.href = 'user.html';
        alert('Login successful!');
        // Redirect to another page or perform additional actions
    } else {
        alert('Login failed. Please check your username and password.');
    }

document.addEventListener('DOMContentLoaded', function () {
    const usernameElement = document.getElementById('username');
        // ดึง username จาก Local Storage
    const username = localStorage.getItem('username');
        
        // ตรวจสอบว่า username มีค่าหรือไม่
    if (username) {
        usernameElement.textContent = 'Welcome, ' + username;
    } else {
        // หากไม่มี username ใน Local Storage, ให้ลิงก์ไปยังหน้า login.html (หรือทำอย่างอื่นตามที่คุณต้องการ)
        window.location.href = 'login.html';
    }
    });
    
function logout() {
    // ลบ username ออกจาก Local Storage และกลับไปยังหน้า login.html
    localStorage.removeItem('username');
    window.location.href = 'login.html';
    }

document.addEventListener('DOMContentLoaded', function () {
    const loggedInUsername = document.getElementById('loggedInUsername');
    const usernameHeader = document.getElementById('usernameHeader');
    
        // Get username from Local Storage
    const username = localStorage.getItem('username');
    
    if (username) {
        // User is logged in, update the header
        loggedInUsername.textContent = username;
         usernameHeader.style.display = 'block'; // Show the username header
    } else {
         // User is not logged in, redirect to login page
         window.location.href = 'login.html';
    }
  });
})

