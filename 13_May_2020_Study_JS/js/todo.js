const form = document.querySelector(".js-to-do"),
    input = document.querySelector(".js-add-to-do"),
    list = document.querySelector(".js-list");

function addToDo(inputValue) {
    const toDo = document.createElement("li");
    toDo.className = "toDo";

    const deleteBtn = document.createElement("span");
    deleteBtn.innerText ="❌";
    deleteBtn.className ="toDo__button";
    deleteBtn.addEventListener("click", clickDelete);
    

    const label = document.createElement("label");
    label.innerText = inputValue;

    //ul -> li -> label
    toDo.appendChild(label);
    toDo.appendChild(deleteBtn);
    list.appendChild(toDo);
}

function clickDelete(event){
    //alert("삭제눌렀넹");
    alert(event.target.parentElement.parentElement);
}



function onSubmit(oziraper) {
    oziraper.preventDefault();
    if (input.value === "") {
        // 아무것도 입력하지 않은체 보내면
        //alert("뭘 입력하고 엔터쳐라");
    } else {
        addToDo(input.value);
        // 입력된 TEXT를 할일로 추가해주자 

        input.value = "";
        // 입력된 text를 할일로 추가했으면, input 공간을 다시 비워준다.
    }
};


function loadToDos() {
    const loadedToDos = localStorage.getItem("toDos");

    if (loadToDos !== null) {
        // ul 태그 안에 그려줌
    } else {
        // ul 태그 안에 할 일이 없다고 써주자
    }
}



function init() {
    // 로컬 스토리지에 저장된 todo list 를 불러온다.
    loadToDos();

}
form.addEventListener("submit", onSubmit);
// 얘는 function 안에 있으면, 특정 조건이 되어야만 호출이 되기 때문에 function 밖에 작성을 해야겠지
// 그래서 항상 변화가 있을때마다 반응하지.. 항상 귀를 열고있는 착한놈이네.
// addEventListener ( 행동 ex) click, submit, onmousedown, onmouseup, onchange, )




init();