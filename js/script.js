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
      const wrap = document.querySelector(".main-tab-wrap");
      const sliderContainer = document.querySelector(".main-tab")
      wrap.addEventListener("mousedown" ,(e) => {
        wrap.style.cursor = "grabbing"
        sliderContainer.style.userSelect = "none"//글자 선택방지
        sliderContainer.style.pointerEvents = "none"//다른 이벤트 무시

        // 드래그 중에 마우스 이동을 기록하는데 사용됨
        let startX = e.pageX;
        // 현재 슬라이더 컨테이너의 가로 스크롤 위치를 지정
        let scrollLeft = sliderContainer.scrollLeft
        // 드래그 동작 중에 슬라이더를 움직이는 역할
        function mousemove(e){
          // 현재 마우스 위치와 클릭한 위치 사이의 차이를 계산하여
          // 드래그 중에 이동해야 할 거리
          const x = e.pageX - startX;
          // 슬라이더 컨테이너의 가로 스크롤 위치를 업데이트하여
          // 드래그 동작에 따라 슬라이더를 이동합니다
          sliderContainer.scrollLeft = scrollLeft - x;
        }
        wrap.addEventListener("mousemove" , mousemove)
        wrap.addEventListener("mouseup" , () => {
          wrap.style.cursor = "grab"
          sliderContainer.style.scrollBehavior = 'smooth';
          sliderContainer.style.userSelect = "auto"//글자 선택방지
          sliderContainer.style.pointerEvents = "auto"//다른 이벤트 무시
          wrap.removeEventListener("mousemove", mousemove)
        })
      })
};