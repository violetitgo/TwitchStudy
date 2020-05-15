const nameContainer = document.querySelector(".js-name");

function drawName(name) {
    nameContainer.innerHTML = "";
    const drawName = document.createElement("span");
    drawName.className = "name_text";
    drawName.innerHTML = `Hello ! ${name} !`;
    nameContainer.appendChild(drawName);
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const name = input.value;
    localStorage.setItem("username", name);
    drawName(name);
}


function drawInput() {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "input_name";
    input.placeholder = "Type your name here!";

    const form = document.createElement("form");

    form.addEventListener("submit", handleSubmit);
    form.appendChild(input);
    nameContainer.appendChild(form);
}


function checkName() {
    const name = localStorage.getItem("username");
    if (name === null) {

        //이놈은 처음온놈
        //이름을 물어보고, 
        drawInput();
        // username이라는 키값으로 받은 이름을 저장하고
        // innerHtml로 그 이름을 보여준다.
    } else {
        //얘는 왔던놈
        drawName(name);
        //username 키값으로 저장된 이름을 가져와서 innerHtml 로 보여준다.
    }
}

function init() {
    checkName();
}

init();