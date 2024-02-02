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


let mainEventList = document.querySelector(".event-tab-box > .promotion")
let affiliateList = document.querySelector(".event-tab-box > .affiliate")

fetch("../portfolio02/js/sub2-1.json")
.then((response) => response.json())
.then((json) => {
  // 프로모션 이벤트 리스트
  data = json.프로모션;
  let proList = '';
  data.forEach(element => {
    proList+=
    makeEventTemp(element);
  });
  mainEventList.innerHTML=proList
  
  // 제휴 이벤트 리스트 
    data = json.제휴혜택;
    let affList = '';
    data.forEach(element => {
      affList+=
      makeEventTemp(element);
    });
    affiliateList.innerHTML=affList
});

//함수 적용
function makeEventTemp(element){
  return`
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
  `;
}