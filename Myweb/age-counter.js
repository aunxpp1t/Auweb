// age-counter.js

// ตั้งวันเกิดที่ต้องการนับอายุ
const birthDate = new Date('2010-09-04');

function updateAge() {
    const now = new Date();
    const ageInMilliseconds = now - birthDate;

    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;


    document.getElementById('age-display').textContent = 
        `${years} ปี ${months} เดือน ${days} วัน`;
}

// เรียกใช้ฟังก์ชันเพื่ออัปเดตอายุทุกๆ 1 วินาที
setInterval(updateAge, 1000);

// เริ่มต้นการแสดงอายุ
updateAge();
