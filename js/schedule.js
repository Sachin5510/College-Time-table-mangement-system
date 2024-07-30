document.getElementById('schedule-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const className = document.getElementById('class-name').value;
    const instructor = document.getElementById('instructor').value;
    const room = document.getElementById('room').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;

    // Simple conflict detection logic (to be expanded)
    if (startTime >= endTime) {
        alert('End time must be after start time');
        return;
    }

    const scheduleList = document.getElementById('schedule-list');
    const newSchedule = document.createElement('div');
    newSchedule.innerHTML = `<strong>${className}</strong> by ${instructor} in ${room} from ${startTime} to ${endTime}`;
    scheduleList.appendChild(newSchedule);
});
