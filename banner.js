const banner = document.getElementById("banner");
const closeBtn = document.getElementById("close-btn");
const hideTodayBtn = document.getElementById("hide-today-btn");

const hideBanner = localStorage.getItem("hideBanner");
const today = new Date().toDateString();

if (hideBanner === today) {
  banner.style.display = "none";
}

closeBtn.addEventListener("click", () => {
  banner.style.display = "none";
});

hideTodayBtn.addEventListener("click", () => {
  localStorage.setItem("hideBanner", today);
  banner.style.display = "none";
});
