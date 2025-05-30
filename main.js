// ScrollReveal configuration
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__headerabout", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

ScrollReveal().reveal(".blog__grid", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".gallery-grid", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".contact__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".gift-card", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".kata__container p", {
  ...scrollRevealOption,
  delay: 500,
});

// Countdown timer
function countdown() {
  const now = new Date().getTime();
  const eventDate = new Date("2025-06-18T00:00:00").getTime();
  const gap = eventDate - now;

  if (gap < 0) return;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("days").textContent = d.toString().padStart(3, "0");
  document.getElementById("hours").textContent = h.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = m.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = s.toString().padStart(2, "0");
}

countdown();
setInterval(countdown, 1000);

// Music popup toggle
function toggleMusicPopup() {
  const popup = document.getElementById("musicPopup");
  popup.classList.toggle("show");
}

// Popup open/close
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Copy rekening and show toast
function copyRekening() {
  const rekening = "BRI 615301025756532 a.n. IKBAL FAUZI";

  navigator.clipboard.writeText(rekening)
    .then(() => {
      showToast("Nomor rekening berhasil disalin!");
    })
    .catch(() => {
      showToast("Gagal menyalin nomor rekening.");
    });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
