// Get the YES element and add a glow effect using CSS gradients
const yesElement = document.getElementById('yes');
yesElement.style.backgroundImage = 'linear-gradient(to bottom, rgba(255, 255, 0, 1) 50%, #fff 100%)';

// Add some animation to make it look more interesting
setInterval(() => {
  const glowEffect = getComputedStyle(yesElement).backgroundImage;
  yesElement.style.backgroundImage = `${glowEffect} ${Math.random() * 10}px`;
}, 500);