const par= document.getElementById("par")
const vert= document.getElementById("vert")
const red= document.getElementById("rouge")
const blue= document.getElementById("blue")
const button = document.getElementById("btn");
const counterElement = document.getElementById("counter");
let count=0;
var para = document.getElementById("paragraphe");

var input = document.getElementById("charInput");
var cont = document.getElementById("charCount");


function changerTexte(){
    document.getElementById("texte").innerText = "Merci!!";
}

button.addEventListener("click", () => {
    count++;
    counterElement.textContent = count;
  });
function convertToUppercase() {
    let inputText = document.getElementById("user").value;
    let upperText = inputText.toUpperCase();
    document.getElementById("outputText").textContent = upperText;
}

vert.addEventListener("click",()=>{
    document.body.style.backgroundColor="green"
})
red.addEventListener("click",()=>{
    document.body.style.backgroundColor="red"
})
blue.addEventListener("click",()=>{
    document.body.style.backgroundColor="blue"
})

function addItem() {
    let input = document.getElementById("Input");
    let itemText = input.value;

    if (itemText !== "") {
        let li = document.createElement("li");
        li.textContent = itemText;
        document.getElementById("itemList").appendChild(li);
    }
}

function toggleParagraphe() {
    para.classList.toggle("hidden");
}

function updateCharCount() {
    cont.textContent = "Nombre de caractères:" +input.value.length;
}
