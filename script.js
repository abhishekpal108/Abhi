function toggleTheme() {
    const body = document.body;
    const theme = body.classList.contains('day') ? 'night' : 'day';
    body.className = theme;

    const content = theme === 'day'
        ? `<h1>Welcome to My Portfolio</h1>
           <p>I am Abhi, a Database Administrator with 10 years of experience.</p>
           <p>Based in Brussels, Belgium.</p>`
        : `<h1>Welcome to My Portfolio</h1>
           <p>At night, I enjoy playing badminton, tennis, and Dota2.</p>
           <p>Also, I love listening to music while traveling or working.</p>`;
    document.getElementById('content').innerHTML = content;
}