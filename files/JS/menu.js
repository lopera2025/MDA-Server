const menuButton = document.querySelector(".Profile-Button");
const Menu = document.querySelector(".Menu-div");

let clicked = false
menuButton.addEventListener('click',()=>{
    if (!clicked) {
        Menu.style.display="flex";
        clicked = true;         
    }
    else {
        Menu.style.display="none";
        clicked = false
    }
})