const body = document.querySelector("body") ,
// style을 넣어줄 변수
locationText = document.querySelector(".location_text");

const API_KEY = "RrsXQArZ_PUsu8yV3vaAyQ6hmkKrBBWsbJA8t_173yg";

const IMAGEURL = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&orientation=landscape&query=landscape`;

function saveBackGround(url,city,country,name){

    const savedImage = localStorage.getItem("background");
    if(savedImage !== null) {
        localStorage.removeItem("background");
        // 저장하기전에 기존에 있는걸 지우고 다시 저장하겠다 라는 의미.
    }
 
    const expireDate = new Date();
  
    expireDate.setDate(expireDate.getDate() + 1);
   
    
    const imageObject = {
        url : url,
        expireDate : expireDate,
        city : city,
        country : country,
        name : name
    };

    localStorage.setItem("background",JSON.stringify(imageObject));

    // 불러와야겠다.


}




function getBackGround(){
    // API URL로 요청하고, 반환받아서, localStorage에 저장하고,
//     fetch(IMAGEURL)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });

fetch(IMAGEURL)
// 비동기통신을 통해 불러온 문자열을 response라고하는거야... 
.then(response => response.json())
// 그 리스폰스를 통해 불러온애를 json화 시켜주고
.then(json=>{
    const image = json;
    // 걍 알기쉬우라고 json을 image로 선어해준것뿐
    if(image.urls && image.urls.full && image.location.city && image.location.country && image.location.name){
     // 불러된 사진 URL과, 도시 이름과, 나라이름과, NAME을 locationStorage에 저장해야함
    const full = image.urls.full;
    const city = image.location.city;
    const country = image.location.country;
    const name = image.location.name;
    saveBackGround(full,city,country,name);
    }else{
        // 만약에 실패하면 다시 요청한다.
        getBackGround();
    }
   

});



    

}








function loadBackGround(){
    // 저장된 키값은 변경될 일이 없고, 다시 선언되지 않아야 하므로
    // 상수인 const로 선언
    const savedImage = localStorage.getItem("background");
    if(savedImage === null){
        // 로컬 스토리지에 있는 background라는 키값을 가진 value가없는 조건
        // 얻어와라
        getBackGround();
    }else {
        const parsedImageObject = JSON.parse(savedImage);
        // 저장할 때 stringify 로 저장했기때문에 문자열로 되어있어.
        // 그래서 파싱하기전에는 값을 가져올 수 없음
        // 그러므로 다시 JSON형식으로 변환해주는 과정이 필요하다. (그래야 값을 가져올 수 있지)
       
        // 있는 조건
        // 그려줘라
        
     // 오늘 날짜를 일단 불러오고
     const today = new Date();
     if(today > parsedImageObject.expireDate) {
         // 유통기한을 오늘 날짜 + 1로 저장해놓고
    // 불러올 때 유통기한이 오늘보다 작다면 다시 요청
    getBackGround();
    
     }else{
    // 불러올 때 유통기한이 남았으면, 그냥 받아온 값 쓴다.
        body.style.background=`url(${parsedImageObject.url})`;
        locationText.innerHTML = `${parsedImageObject.name}, ${parsedImageObject.city}, ${parsedImageObject.country}`
     }
    }
}



function init(){

    loadBackGround();
}

init();
