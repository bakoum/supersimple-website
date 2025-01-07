// Function to change the background color randomly
function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FFD633"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.getElementById("message").textContent = `Background color changed to: ${randomColor}`;
}

// Function to display the current time
function showCurrentTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById("message").textContent = `Current time is: ${currentTime}`;
}
