// Simple system status simulation
document.getElementById('checkBtn').addEventListener('click', () => {
  const statusText = document.getElementById('status-text');
  statusText.textContent = '🔄 Running system check...';

  setTimeout(() => {
    const random = Math.random();
    if (random > 0.3) {
      statusText.textContent = '🟢 All systems operational — Safe skies ahead!';
    } else {
      statusText.textContent = '🔴 Warning: Potential signal disruption detected!';
    }
  }, 2000);
});
