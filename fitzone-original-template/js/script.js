const form = document.getElementById('bookingForm');
const dateInput = document.getElementById('date');
const result = document.getElementById('result');

// กำหนดให้เลือกจองได้ตั้งแต่วันนี้เป็นต้นไป
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString().split('T')[0];
dateInput.min = localToday;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const date = dateInput.value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;

    if (!name || !date || !time || !people) {
        result.textContent = 'กรุณากรอกข้อมูลให้ครบถ้วน';
        return;
    }

    result.textContent = `จองคิวสำเร็จ! คุณ ${name} เข้าใช้วันที่ ${date} เวลา ${time} จำนวน ${people} คน`;
    form.reset();
    dateInput.min = localToday;
});
