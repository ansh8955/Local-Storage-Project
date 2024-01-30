let textArea = document.getElementById("textarea");

function saveInlocalStorage(){
    localStorage.setItem("textAreaText",textArea.value);

}


if(localStorage.getItem("textAreaText")){
    textArea.value = localStorage.getItem("textAreaText");
}

textArea.addEventListener("input",saveInlocalStorage); 