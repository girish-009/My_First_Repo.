document.addEventListener("DOMContentLoaded", function() {
    const form1 = document.querySelector('.form1');

    form1.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const url = document.querySelector('.search').value;
        checkURL(url);
    });
});

async function checkURL(url) {
    try {
        document.getElementById('result').textContent = 'Scanning...'; // Show scanning message
        document.getElementById('progress').style.width = '0%'; // Reset progress bar

        // Simulate a delay for scanning (you would replace this with your actual scanning logic)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Simulate a random result (for demonstration purposes)
        const isMalicious = Math.random() < 0.5; // 50% chance of being malicious
        displayResult(isMalicious);

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        document.getElementById('result').textContent = 'Error: ' + error.message;
        document.getElementById('result').style.color = 'red';
    }
}

function displayResult(isMalicious) {
    const resultElement = document.getElementById('result');
    const progressElement = document.getElementById('progress');

    if (isMalicious) {
        resultElement.textContent = 'The URL is potentially dangerous.';
        resultElement.style.color = 'red';
        progressElement.style.backgroundColor = 'red';
    } else {
        resultElement.textContent = 'The URL is safe.';
        resultElement.style.color = 'green';
        progressElement.style.backgroundColor = 'green';
    }

    progressElement.style.width = '100%'; // Fill progress bar completely
}
