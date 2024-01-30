  // 탭 클릭 이벤트
let eventButtons = document.querySelectorAll('.event-tab-button > p');
let eventBoxs = document.querySelectorAll('.event-tab-box > ul');

eventButtons.forEach((eventButton,index)=>{
  eventButton.addEventListener('click',function(){
    for(const eventButton of eventButtons){eventButton.classList.remove("on");}
    for(const eventBox of eventBoxs){eventBox.classList.remove("on");}
    eventBoxs[index].classList.add("on")
    this.classList.add("on")
  })
});
eventButtons[0].click();

// 프로모션 all List 
let allEventList = document.querySelector(".event-tab-box > .all-event")
console.log(allEventList)
fetch("../js/sub2-1.json")//json파일 읽어오기
    .then((response) => response.json())//읽어온 데이터를 json으로 변환
    .then((json) => {
      data = json.전체이벤트
      let allList=``
      data.forEach(element => {
        allList+=` 
      <li>
        <a href="#">
          <div class="event-img">
            <img src="${element.img}" alt="">
          </div>
          <div class="event-des">
            <span>${element.category}</span>
            <p>${element.tit}</p>
            <em>${element.date}</em>
          </div>
        </a>
      </li>
      `
    });
    allEventList.innerHTML = allList
  
    });



// 프로모션 이벤트 리스트
let mainEventList = document.querySelector(".event-tab-box > .promotion")
fetch("../js/sub2-1.json")//json파일 읽어오기
    .then((response) => response.json())//읽어온 데이터를 json으로 변환
    .then((json) => {
        data = json.프로모션;//json에 있는 items만 받아오기
        let proList = '';
        data.forEach(element => {
            proList+=` 
          <li>
            <a href="#">
              <div class="event-img">
                <img src="${element.img}" alt="">
              </div>
              <div class="event-des">
                <span>${element.category}</span>
                <p>${element.tit}</p>
                <em>${element.date}</em>
              </div>
            </a>
          </li>
          `
        });
        mainEventList.innerHTML=proList
    });

// 제휴 이벤트 리스트 
let affiliateList = document.querySelector(".event-tab-box > .affiliate")
  fetch("../js/sub2-1.json")
    .then((response) => response.json())//읽어온 데이터를 json으로 변환
    .then((json) => {
        data = json.제휴혜택;//json에 있는 items만 받아오기
        let affList = '';
        data.forEach(element => {
          affList+=` 
          <li>
            <a href="#">
              <div class="event-img">
                <img src="${element.img}" alt="">
              </div>
              <div class="event-des">
                <span>${element.category}</span>
                <p>${element.tit}</p>
                <em>${element.date}</em>
              </div>
            </a>
          </li>
          `
        });
        affiliateList.innerHTML=affList
});