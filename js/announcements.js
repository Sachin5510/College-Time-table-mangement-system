document.getElementById('announcement-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const announcementText = document.getElementById('announcement-text').value;
    const announcementList = document.getElementById('announcement-list');

    const newAnnouncement = document.createElement('div');
    newAnnouncement.textContent = announcementText;
    announcementList.appendChild(newAnnouncement);

    // Reset the form
    document.getElementById('announcement-text').value = '';
});
