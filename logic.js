
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.flip-btn').addEventListener('click', function () {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    const coinImg = document.querySelector('.coin-img');
    coinImg.classList.add('spinning');
    setTimeout(() => {
      coinImg.classList.remove('spinning');
    }, 700)
    if (result === "Heads") {
      document.querySelector('.coin-img').src = "resources/heads.svg"
    } else
      document.querySelector('.coin-img').src = "resources/tails.svg"
    //logs if its head or tail to the page
    document.querySelector('.coin-result').textContent = result;
    console.log(result);
  });
});
