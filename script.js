const card = document.querySelector(".game-cover-card");
const cursor = document.querySelector(".cursor-blood");

document.addEventListener("mousemove", function (e) {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }

  if (!card || window.innerWidth < 760) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 6;

  card.style.transform =
    `perspective(1000px) rotateY(${6 + x * 0.35}deg) rotateX(${1 - y * 0.25}deg)`;
});


// Countdown: بعد شهرين من تاريخ اليوم الحالي
const releaseDate = new Date("2026-08-03T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  if (distance <= 0) {
    document.querySelector(".release-countdown p").innerText = "The hotel is open";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);