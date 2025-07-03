function animateCount(el, endValue, duration = 2000) {
let start = 0;
let startTime = null;

function update(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const progressPercent = Math.min(progress / duration, 1);
    const current = Math.floor(progressPercent * endValue);

    el.innerText = current + (el.dataset.plus === "true" ? "+" : "");

    if (progress < duration) {
    requestAnimationFrame(update);
    }
}

requestAnimationFrame(update);
}

document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll(".number-count").forEach((el) => {
    const target = parseInt(el.dataset.count);
    animateCount(el, target, 1500); // 1.5 detik animasi
});
});

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    const swiper = new Swiper('.gallery-swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
      0:    { slidesPerView: 1 },
      768:  { slidesPerView: 2 },
      1024: { slidesPerView: 4 }
    }
  });