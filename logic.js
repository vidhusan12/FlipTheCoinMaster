
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.flip-btn').addEventListener('click', function() {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    console.log(result);
  });
});
