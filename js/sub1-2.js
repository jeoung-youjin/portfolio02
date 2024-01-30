// 아이스크림 리스트 

let iceList = document.querySelector(".lce-list")
fetch("../js/menu-ice.json")
.then((response) => response.json())
.then((json)=>{
  data = json.아이스크림
  
  let iceProList =``
  data.forEach(element => {
    iceProList +=`
    <li>
      <a href="#">
        <img src="${element.이미지링크}" alt="${element.제품명} 상세보기">
        <span class="keyword">${element.키워드}</span>
      </a>
      <span>${element.제품명}</span>      
    </li>
    `
    iceList.innerHTML = iceProList 
  });
})


  
