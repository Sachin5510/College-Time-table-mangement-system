document.getElementById('attendance-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const className = document.getElementById('attendance-class').value;
    const date = document.getElementById('attendance-date').value;
    const attendanceList = document.getElementById('attendance-list');

    // Mock attendance tracking (to be expanded)
    const newAttendance = document.createElement('div');
    newAttendance.innerHTML = `<strong>${className}</strong> attendance for ${date} tracked.`;
    attendanceList.appendChild(newAttendance);
});
