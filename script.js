// script.js

// ฟังก์ชันสร้างดาวตก
function createStars() {
    const starCount = 50; // จำนวนดาว
    const body = document.body;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.textContent = '★'; // ใช้สัญลักษณ์ดาว

        // การสุ่มตำแหน่งเริ่มต้นของดาว
        star.style.left = Math.random() * 100 + '%'; // ดาวจะตกจากทุกตำแหน่ง
        star.style.animationDuration = (Math.random() * 5 + 5) + 's'; // ดาวตกใช้เวลาไม่เท่ากัน

        body.appendChild(star);
    }
}

// เรียกใช้ฟังก์ชันสร้างดาว
createStars();
