// Write your code here!
main.remove('#main');
//or document.querySelector("main#main").remove();


// const newHeader = document.createElement("h1");
// newHeader.id = "victory";

newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = "Yoshi is the champion";