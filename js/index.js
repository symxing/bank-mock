// Heading message change
document.getElementById('morning-message').innerHTML = new Date().getHours() >= 12 ? 'Good Afternoon' : 'Good Morning';