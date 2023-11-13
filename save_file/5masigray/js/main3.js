// category-list 요소를 선택
let categoryMenu = document.querySelector(".category-menu");
let categoryList = document.querySelector(".category-list");

// li요소가 하나만 선택 되는데 전체 선택을 하려면 for문이나 foreach문을 써서 만들어 줘여 할것 같다.
// 근데 어떻게 짜야할지 모르겠다.    
categoryMenu.addEventListener("mouseover", function () {
  categoryList.style.animation = "fadeup 1s";
});

categoryMenu.addEventListener("mouseout", function () {
  categoryList.style.animation = "fadeout 1s";
});

window.onload = function () {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar

  });

  const swiper2 = new Swiper(".swiper2", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
    },

    // If we need pagination


    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    
  });

  const swiper3 = new Swiper(".swiper3", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //   delay: 2000,
    // },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    
  });
};