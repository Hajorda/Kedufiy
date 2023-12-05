// Get the input element by its name attribute for randomSeed
const randomSeedInputElement = document.querySelector('input[name="randomSeed"]');
const problemPathInputElement = document.querySelector('input[name="problemPath"]');

// Check if both input elements are found
if (randomSeedInputElement && problemPathInputElement) {
    // Get values from the input elements
    const randomSeedValue = randomSeedInputElement.value;
    const problemPathValue = problemPathInputElement.value;

    // Create the URL based on the input values
    const url = `https://webwork-ptx.aimath.org/webwork2/html2xml?courseID=anonymous&userID=anonymous&course_password=anonymous&displayMode=MathJax&outputformat=simple&problemSeed=${randomSeedValue}&sourceFilePath=${problemPathValue}`;

    // Log the URL to the console
    console.log('Generated URL:', url);

    // Find the parent container of the existing buttons
    const submitButtonsContainer = document.querySelector('.submit-buttons-container');

    // Check if the container is found
    if (submitButtonsContainer) {
        // Create a button element with inline styles
        const openUrlButton = document.createElement("button");
        openUrlButton.textContent = "KEDUFY";
        openUrlButton.style.color = "#ffffff"; // Change to your text color
        openUrlButton.style.border = "none";
        openUrlButton.style.padding = "10px";
        openUrlButton.style.borderRadius = "5px";

        // Apply rainbow animation with inline style
        openUrlButton.style.animation = "rainbowAnimation 1.5s infinite linear";

        // Function to continuously change the button color
        function changeColor() {
            const randomColor = getRandomColor();
            openUrlButton.style.backgroundColor = randomColor;
        }

        // Set an interval to change the color every 1000 milliseconds (1 second)
        setInterval(changeColor, 400);

        // Add a click event listener to open the URL when the button is clicked
        openUrlButton.addEventListener("click", function() {
            window.open(url, '_blank'); // Open the URL in a new tab
        });

        // Append the new button next to the existing buttons
        submitButtonsContainer.appendChild(openUrlButton);

        // Replace the existing image in the specified div
        const institutionLogoDiv = document.querySelector('.institution_logo');
        if (institutionLogoDiv) {
            // Create an image element
            const imageElement = document.createElement("img");
            imageElement.alt = "to TED University main web site";
            imageElement.src = "https://upload.wikimedia.org/wikipedia/commons/0/03/Animated_pink_cat.gif"; // Replace with the path to your custom image
            imageElement.style.maxWidth = "100%"; // Ensure the image does not exceed the container width

            // Replace the existing image with the new one
            institutionLogoDiv.innerHTML = ''; // Clear existing content
            institutionLogoDiv.appendChild(imageElement);
        } else {
            console.error('Institution logo container not found');
        }
    } else {
        console.error('Submit buttons container not found');
    }
} else {
    console.error('Elements with names "randomSeed" or "problemPath" not found');
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
