function toggleTextBox() {
    const textBox = document.getElementById('text-box');
    const span = document.querySelector('.shut span');

    // Toggle text box visibility
    const isOpen = textBox.style.display === 'block';
    textBox.style.display = isOpen ? 'none' : 'block';

    // Lock or unlock the span
    if (isOpen) {
        span.classList.remove('shut-locked');
    } else {
        span.classList.add('shut-locked');
    }
}

/* JavaScript for Mobile Gestures */
const shut = document.getElementById('shut');
      const textBox = document.getElementById('text-box');
      const span = shut.querySelector('span');

      shut.addEventListener('click', () => {
        textBox.style.display = 'block';
        span.classList.add('shut-locked');
      });

      document.getElementById('close-btn').addEventListener('click', () => {
        textBox.style.display = 'none';
        span.classList.remove('shut-locked');
      });

      let touchStartY = 0;
      let touchEndY = 0;

      shut.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
      });

      shut.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        if (touchEndY - touchStartY > 50 && span.classList.contains('shut-locked')) {
          span.classList.remove('shut-locked'); // Swipe down to close
        } else if (touchStartY - touchEndY > 50 && !span.classList.contains('shut-locked')) {
          span.classList.add('shut-locked'); // Swipe up to open
        }
   });
