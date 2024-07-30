document.addEventListener('DOMContentLoaded', () => {
    // Tab navigation
    const tabs = document.querySelectorAll('nav ul li a');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('id').split('-')[0];
            contents.forEach(content => content.classList.remove('active'));
            document.getElementById(`${target}-section`).classList.add('active');
        });
    });

    // Default active tab
    document.getElementById('schedule-section').classList.add('active');
});
