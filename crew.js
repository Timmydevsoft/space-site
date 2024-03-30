const crew_role = document.getElementById("f_engineer");
const engnrName = document.getElementById("E_Engineer");
const details = document.getElementById("detail_description");
const next = document.querySelectorAll(".next");
const crewImage = document.getElementById("crew_image");

// mobile responisveness start here

const threeBar = document.querySelector(".three_bar");
const eksIcon = document.querySelector(".close_icon");
const dropMenu = document.querySelector(".menu");

threeBar.addEventListener("click", ()=>{
    
    eksIcon.classList.toggle ("showBlock");
    threeBar.classList.toggle("takeaway");
    dropMenu.classList.toggle("show");
})

eksIcon.addEventListener("click", ()=>{
    
    eksIcon.classList.remove("showBlock");
    threeBar.classList.remove("takeaway");
    dropMenu.classList.remove("show");
})




// mobile reponsiveness ends here


let deviceWidth = 0;

window.addEventListener("DOMcontentloaded", ()=>{
    deviceWidth = window.innerWidth;
    return deviceWidth;
   
})

next[0].style.backgroundColor ="white";




fetch("./data.json")
.then((res)=>{
    return res.json();
})



.then((data)=>{

    // var screenWidth = window.innerWidth ;
    //                  const minWidth = 850;
    //                  const maxWidth = 1440;
    next.forEach((t)=>{
        
        t.addEventListener(("click"), (e)=>{
           next.forEach(btn=>{
            btn.style.backgroundColor = ""
           })
            e.currentTarget.style.backgroundColor = "white";
            const verify = e.currentTarget.classList;
            if (verify.contains("A")){
                crewId .innerHTML = data["crew"][0]["id"];
                engnrName.innerHTML = data["crew"][0]["name"];
                crew_role.innerHTML = data["crew"][0]["role"];
                details.innerHTML = data["crew"][0]["bio"];
                if (deviceWidth >=375 || deviceWidth <= 1024){
                    crewImage.src = data["crew"][0]["images"]["png"];
                 }
                 else if(deviceWidth > 1024){
                    crewImage.src = data["crew"][0]["images"]["webp"];
                 }
                
            }
            else if(verify.contains("B")){
                // verify.style.backgroundColor = "white";
                
                engnrName.innerHTML = data["crew"][1]["name"];
                crew_role.innerHTML = data["crew"][1]["role"];
                details.innerHTML = data["crew"][1]["bio"];
                
                if (deviceWidth >=375 || deviceWidth <= 1024){
                    crewImage.src = data["crew"][1]["images"]["png"];
                 }
                 else if(deviceWidth > 1024){
                    crewImage.src = data["crew"][1]["images"]["webp"];
                 }
                
            }
            else if(verify.contains("C")){
                
                engnrName.innerHTML = data["crew"][2]["name"];
                crew_role.innerHTML = data["crew"][2]["role"];
                details.innerHTML = data["crew"][2]["bio"];
                

                if (deviceWidth >=375 || deviceWidth <= 1024){
                    crewImage.src = data["crew"][2]["images"]["png"];
                 }
                 else if(deviceWidth > 1024){
                    crewImage.src = data["crew"][2]["images"]["webp"];
                 }
            }
            else{
               
                engnrName.innerHTML = data["crew"][3]["name"];
                crew_role.innerHTML = data["crew"][3]["role"];
                details.innerHTML = data["crew"][3]["bio"];
                
                if (deviceWidth >=375 || deviceWidth <= 1024){
                    crewImage.src = data["crew"][3]["images"]["png"];
                 }
                 else if(deviceWidth > 1024){
                    crewImage.src = data["crew"][3]["images"]["webp"];
                 }
               
               
            }
        })
    })
})
