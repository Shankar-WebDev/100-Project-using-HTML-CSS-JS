const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let activeIndex = 1;

nextBtn.addEventListener("click", () => {
  activeIndex++;
  if (activeIndex > circles.length) {
    activeIndex = circles.length;
  }
  updateUI();
});

prevBtn.addEventListener("click", () => {
  activeIndex--;
  if (activeIndex < 1) {
    activeIndex = 1;
  }
  updateUI();
});

function updateUI() {
  // Add or remove the 'active' class for each circle
  circles.forEach((circle, index) => {
    if (index < activeIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Update the progress bar width based on active circles
  const actives = document.querySelectorAll(".active");
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // Enable or disable buttons based on activeIndex
  prevBtn.disabled = activeIndex === 1;
  nextBtn.disabled = activeIndex === circles.length;
}
