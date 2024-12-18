// Get the elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const resultPage = document.getElementById('resultPage');
const resultText = document.getElementById('resultText');

// Event listener for the YES button
yesBtn.addEventListener('click', function() {
    // Show the result page
    resultPage.style.display = 'block';
    resultText.innerHTML = `<h2>Awesome!</h2><p>I Know, you would say Yes, Let's meet at 6 PM at Murphies On 5th Jan!</p>`;

    // Hide the initial container
    document.querySelector('.container').style.display = 'none';

    // Set a timer to close the app after 1 minute
    setTimeout(() => {
        window.close();  // This will close the current window/tab
    }, 60000); // Close after 1 minute (60000 milliseconds)
});

// Event listener for the NO button
noBtn.addEventListener('click', function() {
    // Show the result page
    resultPage.style.display = 'block';
    resultText.innerHTML = `<h2>Oh no! That's okay, maybe next time...</h2><p>Heartbroken...</p>`;
    document.querySelector('.container').style.display = 'none';  // Hide the initial page
});

// Function to move the NO button on hover
function moveNoButton() {
    // Get the random position for the NO button
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;

    const randomX = Math.floor(Math.random() * (maxWidth - noBtn.offsetWidth));
    const randomY = Math.floor(Math.random() * (maxHeight - noBtn.offsetHeight));

    // Move the NO button to the random position
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    // Disable the NO button after it moves
    noBtn.disabled = true;

    // Reset the disabled state and allow next movement
    setTimeout(() => {
        noBtn.disabled = false;  // Enable the button for the next hover
    }, 100);  // Re-enable it very briefly for the next hover event
}
