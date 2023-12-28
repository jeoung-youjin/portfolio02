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
//프로모션
var swiper = new Swiper(".proSlide", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// new-item
var swiper = new Swiper(".itemSlide", {
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
  logo.src= 'http://127.0.0.1:5500/img/h_logo_white.png'
}
header.onmouseout=function(){
  header.style.backgroundColor="#fff"
  logo.src= 'http://127.0.0.1:5500/img/header_logo.png'
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
// main-visual 

function MainEvent(evtImg , hideDes){
  this.evtImg=evtImg;
  this.hideDes=hideDes;
}
let event01= new MainEvent("/portfolio02/img/event-list01.jpg","하트배어 테디백 매장판매")
let event02= new MainEvent("/portfolio02/img/event-list02.jpg","하트배어 테디백 매장판매")
let event03= new MainEvent("/portfolio02/img/event-list03.jpg","하트배어 테디백 매장판매")

let mainEventList = document.querySelector(".main-event-list")
let events=[event01,event02,event03]

let evList=``
for(const event of events){
  evList+=`
  <li>
  <a href="#">
    <img src="${event.evtImg}" alt="">
    <span class="hide">${event.hideDes}</span>
  </a>
  `
}
mainEventList.innerHTML = evList;

// button
let eventBt = document.querySelector('.event-bt');
let eventList = document.querySelector('.main-event-list');

eventBt.addEventListener("click",()=>{
  eventList.classList.toggle("active")
  eventBt.classList.toggle("close")
})
// main-visual-list

// promotion
function ProList(link,days,desc){
  this.link=link;
  this.days=days;
  this.desc=desc;
};

let list01 = new ProList("/portfolio02/img/pro-list01-01.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list02 = new ProList("/portfolio02/img/pro-list01-02.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list03 = new ProList("/portfolio02/img/pro-list01-03.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list04 = new ProList("/portfolio02/img/pro-list01-04.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list05 = new ProList("/portfolio02/img/pro-list01-05.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list06 = new ProList("/portfolio02/img/pro-list02-01.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list07 = new ProList("/portfolio02/img/pro-list02-02.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list08 = new ProList("/portfolio02/img/pro-list02-03.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list09 = new ProList("/portfolio02/img/pro-list02-04.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list10 = new ProList("/portfolio02/img/pro-list02-05.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list11 = new ProList("/portfolio02/img/pro-list03-01.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list12 = new ProList("/portfolio02/img/pro-list03-02.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list13 = new ProList("/portfolio02/img/pro-list03-03.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list14 = new ProList("/portfolio02/img/pro-list03-04.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list15 = new ProList("/portfolio02/img/pro-list03-05.png","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")

// list01
let lists=[list01,list02,list03,list04,list05]
let pageOne = document.querySelector(".pro-slide-list01");
console.log(pageOne)

let liGroup = '';
for (const list of lists) {
  liGroup += `
    <li>
      <a href="#">
        <div class="img-frame">
          <img src="${list.link}" alt="">
        </div>
        <span>${list.days}</span>
        <p>${list.desc}</p>
      </a>
    </li>
    `;
}
pageOne.innerHTML = liGroup;

// list02
let secLists=[list06,list07,list08,list09,list10]
let pageTw = document.querySelector(".pro-slide-list02");
let secGroup = '';
for (const secList of secLists) {
  secGroup += `
    <li>
      <a href="#">
        <div class="img-frame">
          <img src="${secList.link}" alt="">
        </div>
        <span>${secList.days}</span>
        <p>${secList.desc}</p>
      </a>
    </li>
    `;
}
pageTw.innerHTML = secGroup;

// list03
let trLists=[list11,list12,list13,list14,list15]
let pageTr = document.querySelector(".pro-slide-list03");
let trGroup = '';
for (const trList of trLists) {
  trGroup += `
    <li>
      <a href="#">
        <div class="img-frame">
          <img src="${trList.link}" alt="">
        </div>
        <span>${trList.days}</span>
        <p>${trList.desc}</p>
      </a>
    </li>
    `;
}
pageTr.innerHTML = trGroup;

