let btn1EL = document.getElementById('btn-1');
let btn2EL = document.getElementById('btn-2');
let btn3EL = document.getElementById('btn-3');
let btn4EL = document.getElementById('btn-4');
let copiedEL = document.getElementById('copied');

function generatePasswords(){
    setPasswords();
}

function setPasswords(){
    var ascii_elements= "";
    for (var i=40; i<=127;i++){
        ascii_elements+= String.fromCharCode(i);
    }
    psswds = getRandomPasswords(ascii_elements);
    setContent(psswds);
}

function setContent(psswds){
    btn1EL.textContent = psswds[0];
    btn2EL.textContent = psswds[1];
    btn3EL.textContent = psswds[2];
    btn4EL.textContent = psswds[3];
}

function getRandomPasswords(ascii){
    let inputEL = document.getElementById('len');
    let maxString = inputEL.value;
    let array = [];
    
    for(let h=0; h < 4; h++){
        let randPass = "";
        for (let i=0; i < maxString; i++){
            randNum = Math.floor(Math.random()*87);
            randPass += ascii[randNum];
        }
        array.push(randPass);
    }
    return array
}

function btn1Copy(){
    if (btn1EL.textContent.trim() != ""){
        copy(btn1EL);
        copiedEL.style.visibility = "visible";
        setTimeout(() => { 
            copiedEL.style.visibility = "hidden"; 
        }, 3000);
    }
}
function btn2Copy(){
    if (btn2EL.textContent.trim() != ""){
        copy(btn2EL);
        copiedEL.style.visibility = "visible";
        setTimeout(() => { 
            copiedEL.style.visibility = "hidden"; 
        }, 2000);
    }
}
function btn3Copy(){
    if (btn3EL.textContent.trim() != ""){
        copy(btn3EL);
        copiedEL.style.visibility = "visible";
        setTimeout(() => { 
            copiedEL.style.visibility = "hidden"; 
        }, 2000);
    }
}
function btn4Copy(){
    if (btn4EL.textContent.trim() != ""){
        copy(btn4EL);
        copiedEL.style.visibility = "visible";
        setTimeout(() => { 
            copiedEL.style.visibility = "hidden"; 
        }, 2000);
    }
}

function copy(element){
  var temp = document.createElement("div");
  temp.setAttribute("contentEditable", true);
  temp.innerHTML = element.innerHTML;
  temp.setAttribute("onfocus", "document.execCommand('selectAll',false,null)");
  document.body.appendChild(temp);
  temp.focus();
  document.execCommand("copy");
  document.body.removeChild(temp);
}