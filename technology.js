const next = document.querySelectorAll(".lunch");
const term = document.getElementById("term");
const description = document.getElementById("details");
const tech_image= document.getElementById("visual");

// responsivesness starts here

const bars = document.querySelector(".three_bar");
const kloseIcon = document.querySelector(".close_icon");
const mEnU = document.querySelector(".menu");


bars.addEventListener("click", ()=>{
    bars.classList.add("shutOut");
    kloseIcon.classList.add("showInline");
    mEnU.classList.add("show");
})

kloseIcon.addEventListener("click", ()=>{
    bars.classList.remove("shutOut");
    kloseIcon.classList.remove("showInline");
    mEnU.classList.remove("show");
})

// reponsiveness ends here

let deviceWidth = 0;

window.addEventListener("DOMContentLoaded", ()=>{
    deviceWidth = window.innerWidth;
    return deviceWidth
})

next[0].style.backgroundColor = "white";
next[0].style.color = "rgba(11, 13, 23, 1)";






fetch("./data.json")
.then((result)=>{
    return result.json();
})




.then((data)=>{
    next.forEach((a)=>{
        a.addEventListener("click", (i)=>{
            next.forEach(slide=>{
                slide.style.backgroundColor = "";
                slide.style.color = "";
            });

            i.currentTarget.style.backgroundColor = "white";
            i.currentTarget.style.color = "rgba(11, 13, 23, 1)";
            const chk = i.currentTarget.classList
            if (chk.contains("P")){
                term.innerHTML = data["technology"][0]["name"];
                description.innerHTML = data["technology"][0]["description"];
                
                tech_image.src = data["technology"][0]["images"]["portrait"];

            }

            else if(chk.contains("Q")){
                term.innerHTML = data["technology"][1]["name"];
                description.innerHTML = data["technology"][1]["description"];
                tech_image.src = data["technology"][1]["images"]["portrait"];;
            }

            else{
                term.innerHTML = data["technology"][2]["name"];
                description.innerHTML = data["technology"][2]["description"];
                tech_image.src = data["technology"][2]["images"]["portrait"];
            }
        })
    })
})

