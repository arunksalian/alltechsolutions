const canvas = document.createElement('canvas');
canvas.width = 200;
canvas.height = 200;
const ctx = canvas.getContext('2d');

// Set background
ctx.fillStyle = '#1a237e';
ctx.fillRect(0, 0, 200, 200);

// Draw circle
ctx.beginPath();
ctx.arc(100, 100, 80, 0, 2 * Math.PI);
ctx.fillStyle = '#64b5f6';
ctx.fill();
ctx.strokeStyle = 'white';
ctx.lineWidth = 3;
ctx.stroke();

// Draw "ATS" text
ctx.fillStyle = 'white';
ctx.font = 'bold 60px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('ATS', 100, 100);

// Convert to JPG
const link = document.createElement('a');
link.download = 'logo.jpg';
link.href = canvas.toDataURL('image/jpeg', 0.9);
link.click(); 