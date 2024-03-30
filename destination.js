const planets_button = document.querySelectorAll(".planets");
const planet = document.querySelector(".planet");
const required = document.querySelector(".required_kit");
const distance = document.getElementById("distance_value");
const time = document.getElementById("time_value");
const planetImage = document.getElementById("planet_image");

const  showHamburger = document.querySelector(".threeLines");
const closeHamburger = document.querySelector(".close_symbol");
const nAv = document.querySelector(".menu");


showHamburger.addEventListener("click", ()=>{
    showHamburger.classList.toggle("close");
    closeHamburger.classList.toggle("dIsPlAy");
    nAv.classList.toggle("show-Menu");
    return console.log("hell fire candiddate is sitting beside me");
})

closeHamburger.addEventListener("click", ()=>{
    showHamburger.classList.remove("close");
    closeHamburger.classList.remove("dIsPlAy");
    nAv.classList.remove("show-Menu");
})


fetch("./data.json")
.then((response)=>{
    return response.json();
})

.then((data)=>{
    planets_button.forEach( (p)=>{
        p.addEventListener("click", (e)=>{
            const confirm = e.currentTarget.classList
            if (confirm.contains("A")){
                planet.textContent = data["destinations"][0]["name"];
                planetImage.src = data["destinations"][0]["images"]["webp"];
                distance.innerHTML = data["destinations"][0]["distance"];
                time.innerHTML = data["destinations"][0]["travel"];
                required.innerHTML = data["destinations"][0]["description"];
            }

            else if (confirm.contains("B")){
                planet.textContent = data["destinations"][1]["name"]
                planetImage.src = data["destinations"][1]["images"]["webp"];
                distance.innerHTML = data["destinations"][1]["distance"];
                time.innerHTML = data["destinations"][1]["travel"];
                required.innerHTML = data["destinations"][1]["description"];
            }
            else if (confirm.contains("C")){
                planet.textContent = data["destinations"][2]["name"];
                planetImage.src = data["destinations"][2]["images"]["webp"];
                distance.innerHTML = data["destinations"][2]["distance"];
                time.innerHTML = data["destinations"][2]["travel"];
                required.innerHTML = data["destinations"][2]["description"];
            }

            else{
                planet.textContent = data["destinations"][3]["name"];
                planetImage.src = data["destinations"][3]["images"]["webp"];
                distance.innerHTML = data["destinations"][3]["distance"];
                time.innerHTML = data["destinations"][3]["travel"];
                required.innerHTML = data["destinations"][3]["description"];
            }
        } )
    })
})
