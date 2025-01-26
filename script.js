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
	
	
	
	function initializePageContent() {
    const contentDiv = document.getElementById('content');

    // Check for day/night mode and set initial content
    checkDayNight(); 

    function checkDayNight() {
        // Replace with your actual latitude and longitude
        const latitude = 50.8503; 
        const longitude = 4.3517; 

        const today = new Date();

        // Calculate sunrise and sunset times 
        // (This requires an external library like SunCalc.js)
        // Example using SunCalc.js (you'll need to include the library)
        const sunTimes = SunCalc.getTimes(today, latitude, longitude); 
        const sunrise = sunTimes.sunrise;
        const sunset = sunTimes.sunset;

        const now = new Date();
        const isDaytime = now > sunrise && now < sunset;

        document.body.classList.remove("day", "night"); 
        document.body.classList.add(isDaytime ? "day" : "night");

        // Create and append content based on day/night mode
        if (isDaytime) {
            contentDiv.innerHTML = `
                <h1>Welcome to My Portfolio (Day Mode)</h1>
                <p>I am Abhi, a Database Administrator with 10 years of experience.</p>
                <p>Based in Brussels, Belgium.</p>
                <h2>Current Time</h2>
                <div id="clock"></div> 
                <h2>Current Date</h2>
                <div id="date"></div> 
            `;
        } else {
            contentDiv.innerHTML = `
                <h1>Welcome to My Portfolio (Night Mode)</h1>
                <p>I am Abhi, a Database Administrator with 10 years of experience.</p>
                <p>Based in Brussels, Belgium.</p>
                <h2>Current Time</h2>
                <div id="clock"></div> 
                <h2>Current Date</h2>
                <div id="date"></div> 
            `;
        }

        // Initialize time and date display functions
        displayTime();
        displayDate();
    }

    function displayTime() {
        const now = new Date();
        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }; 
        const formattedTime = now.toLocaleString('en-US', options);
        document.getElementById('clock').textContent = formattedTime;
    }

    function displayDate() {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
        const formattedDate = today.toLocaleDateString('en-US', options); 
        document.getElementById('date').textContent = formattedDate;
    }

    // Update time every second
    setInterval(displayTime, 1000); 

    // Update date every 24 hours
    setInterval(displayDate, 24 * 60 * 60 * 1000); 

    // Check for day/night mode changes every hour
    setInterval(checkDayNight, 60 * 60 * 1000); 
}
}