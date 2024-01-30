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
// json 으로 수정하기
function ProList(link,days,desc){
  this.link=link;
  this.days=days;
  this.desc=desc;
};

let list01 = new ProList("/portfolio02/img/pro-list01-01.jpg","2023-12-26 ~ 2023-12-30","12월 31DAY 사전예약 시 6,500원 OFF 혜택!")
let list02 = new ProList("/portfolio02/img/pro-list01-02.jpg","2023-12-15 ~ 소진 시 까지","X-MAS 케이크 구매 시 허그미 조안 테디베어 11,900원!")
let list03 = new ProList("/portfolio02/img/pro-list01-03.jpg","2023-12-15 ~ 2023-12-31","KT멤버쉽 달.달 혜택 파인트30% 할인혜택")
let list04 = new ProList("/portfolio02/img/pro-list01-04.jpg","2023-12-08 ~ 소진 시 까지","X-MAS 케이크 구매 시 하트베어 테디백 8,900원!")
let list05 = new ProList("/portfolio02/img/pro-list01-05.jpg","2023-12-01 ~ 소진 시 까지","쿼터 이상 구매 시 원더랜드 스노우볼 매장판매 9,900원!")
let list06 = new ProList("/portfolio02/img/pro-list02-01.jpg","2023-11-24 ~ 소진 시 까지","쿼터 이상 구매 시 도라에몽 액션 피규어 10,900원")
let list07 = new ProList("/portfolio02/img/pro-list02-02.jpg","2023-11-17 ~ 소진 시 까지","쿼터 이상 구매 시 도라에몬 미니 케리백 9,900원")
let list08 = new ProList("/portfolio02/img/pro-list02-03.jpg","2023-11-08 ~ 소진 시 까지","파인트 이상 구매 시 도라에몽 여권케이스 3,900원 ")
let list09 = new ProList("/portfolio02/img/pro-list02-04.jpg","상시운영","도라에몽의 하얀모찌 단팥죽 내부 취식+배달 & 픽업가능 매장안내")
let list10 = new ProList("/portfolio02/img/pro-list02-05.jpg","상시운영","도라에몽의 하얀 모찌 단팥죽 배달 & 픽업 가능 매장안내")
let list11 = new ProList("/portfolio02/img/pro-list03-01.jpg","2023-09-04 ~ 소진시까지","해피앱 스캔시 아이스크림 스쿱퍼 3천원 할인")
let list12 = new ProList("/portfolio02/img/pro-list03-02.jpg","2023-07-03 ~ 소진시까지","모슈 텀블러 머그 MD 구매 시 배라 3종 쿠폰 증정")
let list13 = new ProList("/portfolio02/img/pro-list03-03.jpg","2023-07-05 ~ 소진시까지","아이스크림 보냉 컨테이너 매장판매 시작!")
let list14 = new ProList("/portfolio02/img/pro-list03-04.jpg","상시 운영","SKT 우주패스, 배스킨라빈스 구독 시 7천원 OFF!")
let list15 = new ProList("/portfolio02/img/pro-list03-05.png","상시 운영","1회용 컵 사용 줄이기 안내")

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
          <img src="${list.link}" alt="${list.days},${list.desc}">
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

// recommend 탭 이벤트
let recommendBt = document.querySelectorAll(".recommend-bt > p")
console.log(recommendBt)

// br-benefit 리스트 
let benefitList = document.querySelector(".benefitSwiper > ul")
function Benefit(img,des){
  this.img=img,
  this.des=des
} 

let benefit01 = new Benefit("/portfolio02/img/benefit-list01.jpg","T맵버십 고객 대상 레디팩 50% OFF 2023년 10월 04일부터 2023년 12월 31일까지")
let benefit02 = new Benefit("/portfolio02/img/benefit-list02.jpg","베스킨라벤스의 다양한 제휴혜택 상시운영")
let benefit03 = new Benefit("/portfolio02/img/benefit-list03.jpg","이제 베라에서도 애플페이를 만나보세요 상시운영")
let benefit04 = new Benefit("/portfolio02/img/benefit-list04.jpg","오직 해피앱에서만 해피포인트 5% 적립 상시운영")
let benefit05 = new Benefit("/portfolio02/img/benefit-list05.jpg","KT맴버십 특별한 제휴혜택 생일쿠폽,파인트 50% 할인, 블록팩 FREE 상시운영")
let benefit06 = new Benefit("/portfolio02/img/benefit-list06.jpg","T맵버쉽 회원대상 싱글 레귤러 최대 50% 할인 또는 적립 2023년 02월 01일부터 2024년 01월 31일까지")
let benefit07 = new Benefit("/portfolio02/img/benefit-list07.jpg","현대카드 M포인트 50% 사용 상시운영")

let beGroup =``
let benefits =[benefit01,benefit02,benefit03,benefit04,benefit05,benefit06,benefit07]

for(const benefit of benefits){
  beGroup +=`
  <li class="swiper-slide">
    <a href="#">
      <img src="${benefit.img}" alt="${benefit.des}">
    </a>
  </li>
  `
}
benefitList.innerHTML=beGroup