function like(id){
    var element = document.querySelector(id);
    var newText = parseInt(element.innerText) + 1;
    console.log(newText);
    element.innerText = newText;
}