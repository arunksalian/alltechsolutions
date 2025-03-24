// Function to save the logo
function saveLogo() {
    const canvas = document.getElementById('logoCanvas');
    const link = document.createElement('a');
    link.download = 'assets/images/logo.jpg';
    link.href = canvas.toDataURL('image/jpeg', 0.9);
    link.click();
}

// Add event listener to the download button
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('button');
    if (downloadButton) {
        downloadButton.addEventListener('click', saveLogo);
    }
}); 