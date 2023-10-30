window.onload = function () {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 30,
      });
      var swiper = new Swiper(".meswiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 4,
        spaceBetween: 30,
      });
      var swiper = new Swiper(".eaSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 30,
      });
      var swiper = new Swiper(".WySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        spaceBetween: 30,
        autoplay:true,
      });
      let isDragging = false;
      let startX, scrollLeft;
      
      const mainTab = document.querySelector('.main-tab-box');
      
      mainTab.addEventListener('mousedown', (e) => {
          isDragging = true;
          startX = e.pageX - mainTab.offsetLeft;
          scrollLeft = mainTab.scrollLeft;
      });
      
      mainTab.addEventListener('mouseup', () => {
          isDragging = false;
      });
      
      mainTab.addEventListener('mouseleave', () => {
          isDragging = false;
      });
      
      mainTab.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        requestAnimationFrame(() => {
            const x = e.pageX - mainTab.offsetLeft;
            const walk = (x - startX) * 2; // 조절 가능한 스크롤 속도
            mainTab.scrollLeft = scrollLeft - walk;
        });
    });
};