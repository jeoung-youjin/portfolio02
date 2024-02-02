/***********
스와이퍼 - S 
****************/ 
// 메인 비주얼
var swiper = new Swiper(".mainContain", {
  speed: 500,
  direction: 'vertical',
  mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var swiper = new Swiper(".subscription", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

//프로모션
var swiper = new Swiper(".proSlide", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});

// new-item
var swiper = new Swiper(".itemSlide", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
});

// benefitSwiper
var swiper = new Swiper(".benefitSwiper", {
  speed: 400,
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },
});
/***********
스와이퍼 - E
****************/ 

/***********
header - S
**************/ 

// 로고 사진 변경
let header = document.querySelector('header')
let logo = document.querySelector('.logo > a >img')

header.onmouseover=function(){
  header.style.backgroundColor="#f986bd"
  logo.src= '/portfolio02/img/h_logo_white.png'
}
header.onmouseout=function(){
  header.style.backgroundColor="#fff"
  logo.src= '/portfolio02/img/header_logo.png'
}

// header search
let searchBt = document.querySelector('.search-bt')
let searchOpen = document.querySelector('.search-open')
let searchClose = document.querySelector('.search-open .close')

searchBt.onclick=function(){
  searchOpen.style.display="block"
}
searchClose.onclick=function(){
  searchOpen.style.display="none"
}

// my-page 토글 버튼
let myPageBt = document.querySelector('.my-page-bt')
let myPageOpen = document.querySelector('.my-page-open')

myPageBt.addEventListener("click",() =>{
  myPageOpen.classList.toggle("active")
})
/***********
header - E
************/ 

/***********
main - S 
************/ 
// button
let eventBt = document.querySelector('.event-bt');
let eventList = document.querySelector('.main-event-list');

eventBt.addEventListener("click",()=>{
  eventList.classList.toggle("active")
  eventBt.classList.toggle("close")
})
// main-visual-list

// promotion 
let pageOne = document.querySelector(".pro-slide-list01");
let pageTw = document.querySelector(".pro-slide-list02");
let pageTr = document.querySelector(".pro-slide-list03");
let liGroup = '';
let secGroup = '';
let trGroup = '';

fetch("../portfolio02/js/promotion.json")
.then((response)=>response.json())
.then((json)=>{
  data=json.프로모션.슬라이드1
  data.forEach(element => {
    liGroup += 
    makePageTemp(element)
  });
  pageOne.innerHTML=liGroup

  data=json.프로모션.슬라이드2;
  data.forEach(element =>{
    secGroup += 
    makePageTemp(element)
  })
  pageTw.innerHTML=secGroup

  data=json.프로모션.슬라이드3
  data.forEach(element =>{
    trGroup += 
    makePageTemp(element)
  });
  pageTr.innerHTML=trGroup
})


//함수 적용
function makePageTemp(element){
  return`
  <li>
    <a href="#">
      <div class="img-frame">
        <img src="${element.이미지}" alt="">
      </div>
      <span>${element.기간}</span>
      <p>${element.설명}</p>
    </a>
  </li>
  `
}


// recommend 탭 이벤트
let recommendBt = document.querySelectorAll(".recommend-bt > p")

// br-benefit 리스트   
let benefitList = document.querySelector(".benefitSwiper > ul")
let beGroup =``
fetch("../portfolio02/js/promotion.json")
.then((response) => response.json())
.then(json => {
  data= json.제휴;
  data.forEach(element =>{
    beGroup +=  `
  <li class="swiper-slide">
    <a href="#">
      <img src="${element.이미지}" alt="${element.정보}">
    </a>
  </li>
  `
})
benefitList.innerHTML=beGroup
})
