let mainText = document.querySelector(".main-banner2-ani-font");
console.log(mainText)

window.addEventListener("scroll", function(){
    let value= window.scrollY;

    if(value<400){
        mainText.style.animation ="hide 1s ease-out forwards";
    }else{
        mainText.style.animation="slide 1s ease-out"
    }
});

window.onload = function () {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    // 세로로 움직이게 한다.
    direction: 'vertical',

    // 가로로 움직이게 한다.
    // direction: 'horizontal',
    loop: true, //슬라이드 반복 여부
    
    // swiper 자동재생 다음페이지 넘어가는 시간 1000에 1초
    autoplay: {
      delay: 2000,
    },

  });
};


// let mainText = document.querySelector(".main-banner2-ani-font");
// console.log(mainText)
// window.addEventListener("scroll", function(){
//     let value= window.scrollY;
//     console.log("scrollY", value);
//     if(value>270){
//         mainText.style
//     }
// })
    // ㄴ 이거는 왜 mainText가 style함수가 참조가 안되지?
    // ㄴ 왜 또 갑자기 됨??