let mainText = document.querySelector(".ani-font");

window.addEventListener("scroll", function(){
    let value= window.scrollY;
    console.log("scrollY", value);

    if(value>270){
        mainText.style.animation ="hide 1s ease-out forwards";
    }else{
        mainText.style.animation="slide 1s ease-out"
    }
});