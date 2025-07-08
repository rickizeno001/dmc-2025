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

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.img-speaker').forEach(img => {
        img.addEventListener('click', function () {
            console.log('Klik gambar:', this.alt);
        });
    });

    const slider = document.querySelector('.slider-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX;
        const walk = (x - startX) * 1.2;
        slider.scrollLeft = scrollLeft - walk;
    });
});