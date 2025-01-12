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

 function addNumbers() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const sum = num1 + num2;
            document.getElementById('result').textContent = isNaN(sum) ? 'Invalid Input' : sum;
        }

        function subtractNumbers() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const difference = num1 - num2;
            document.getElementById('result').textContent = isNaN(difference) ? 'Invalid Input' : difference;
        }

        function multiplyNumbers() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const product = num1 * num2;
            document.getElementById('result').textContent = isNaN(product) ? 'Invalid Input' : product;
        }
        
        function divideNumbers() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            
           
            
            const product = num1 / num2;            
            const remainder = num1 % num2;
            const quotient = (num1 - (num1 % num2)) / num2;
            
            
            document.getElementById('result').textContent = isNaN(product) ? 'Invalid Input' : product;
            document.getElementById('remainder').textContent = isNaN(remainder) ? 'Invalid Input' : remainder;
            document.getElementById('quotient').textContent = isNaN(quotient) ? 'Invalid Input' : quotient;
        }
