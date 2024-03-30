const bar = document.querySelector(".three_bar");
const closeMenu = document.querySelector(".close_icon");
const drodownMenu = document.querySelector(".menu");

bar.addEventListener("click", ()=>{
    bar.classList.add("hide_anything");
    closeMenu.classList.add("showAnything");
    drodownMenu.classList.add("showMenu");
})

closeMenu.addEventListener("click", ()=>{
    bar.classList.remove("hide_anything");
    closeMenu.classList.remove("showAnything");
    drodownMenu.classList.remove("showMenu");
})


