const typedTextspan = document.querySelector('.typed-Text');
const cursor = document.querySelector('.cursor');

const words = ['Awesome', 'Fun', 'Cool', 'Life', 'Famous', 'Weird'];
const typingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000; // Delay between current and next word
let wordIndex = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  if (words.length) {
    setTimeout(type, typingDelay);
  }
});

function type() {
  if (charIndex < words[wordIndex].length) {
    typedTextspan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextspan.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex = (wordIndex + 1) % words.length; // Loop back to first word
    setTimeout(type, typingDelay);
  }
}
