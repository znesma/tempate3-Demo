    // check local storage

let mainColor = localStorage.getItem("color-option");

if (mainColor !== null) {
  
  document.documentElement.style.setProperty('--main-color', mainColor); 

   let color = document.querySelectorAll(".colors li");
    
    color.forEach((c) => {

        c.classList.remove("active");
        
        if(c.dataset.color === mainColor) {
            
            c.classList.add("active");
        }
    });
};

let backgroundInterval;
let backgroundOption = true;

// Nav Bullets
/*
const navBullets = document.querySelectorAll('.nav-bullets .bullets');
navBullets.forEach(bullets => {
    
    bullets.addEventListener('click', (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
            
        });
    });
});

*/

const navBullets = document.querySelectorAll('.nav-bullets .bullets');
const allLinks = document.querySelectorAll('.links a');
function goToDiv (elements) {
    elements.forEach (element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior : 'smooth'
            });
        });  
    });
}
goToDiv(navBullets);
goToDiv(allLinks);

// Settings box

document.querySelector(".toggle-gear .fa-gear").onclick = function () {
    
    "use strict";
    
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");

};

// Option Box -- Switch colors

const colorsLi = document.querySelectorAll(".colors li");

colorsLi.forEach(li =>{
   
    li.addEventListener("click", (e) => {
      
        //Set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        
        //Set color on local storage
        localStorage.setItem("color-option", e.target.dataset.color);
        
        // Remove and Add active class
        let color = document.querySelectorAll(".colors li");
        color.forEach((c) => {
           
            c.classList.remove("active");
            
        });
            e.target.classList.add("active");
    });
    
});



// Option Box -- Switch random backgrounds

let randomBg = document.querySelectorAll(".random-Bg span");

    randomBg.forEach(span =>{
   
        span.addEventListener("click", (e) => {
        
    // Remove and Add active class 
        
        e.target.parentElement.querySelectorAll(".active") .forEach(element => {
        
            element.classList.remove("active");
        
        });
        
        e.target.classList.add("active");
        
        // Randomize background
            
        if (e.target.dataset.background === 'yes') {

            backgroundOption = true;
            
            randomizeBg ();
            
        } else {
            
            backgroundOption= false;
            clearInterval(backgroundInterval);
        }
        
    }); 
 
});

//option box show bullets

let showBullets = document.querySelectorAll('.show-bullets span');
let ShowNavBullets = document.querySelector('.nav-bullets');

showBullets.forEach(span => {
   
    span.addEventListener("click" , (e) => {
        
       if (span.dataset.display === 'show') {
           
           ShowNavBullets.style.display = 'block';
          
       } else {
           
           ShowNavBullets.style.display = 'none';
            
       }
        

    });
    
});

// change background


let landingPage = document.querySelector(".landing-page");

let bgArray = ["2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

//Randomize background  


function randomizeBg () {
    
    if (backgroundOption === true) {
        
        backgroundInterval= setInterval(() => {
    
        let randomBg = Math.floor(Math.random() * bgArray.length);

        landingPage.style.background = 'url("images/' + bgArray[randomBg] + '")';  
    
}, 2000);
    }
}
randomizeBg ();

// Start skills

    let ourSkills = document.querySelector(".skills");

    window.onscroll = function () {
    
    let skillOffsetTop = ourSkills.offsetTop;
    
    //console.log(skillOffsetTop);
    
    let skillOuterHeight = ourSkills.offsetHeight;
    
    //console.log(skillOuterHeight);
    
    let windowHeight = this.innerHeight;
    
    let windowScroll = this.pageYOffset;
    
    if(windowScroll > (skillOffsetTop + skillOuterHeight - windowHeight)) {
        
       let allSkills = document.querySelectorAll(".skills .skill-box .skill-progress span");
        
        allSkills.forEach(skill => {
            
           skill.style.width = skill.dataset.progress;
            
        });
    }
}
    
    //Start popup gallery
    
    let ourGallery = document.querySelectorAll('img');

    ourGallery.forEach(img => {
        
       img.addEventListener('click' , (e) => {
           
           //create div for overlay
          let overlay = document.createElement('div');
            //create class for overlay div
           
           overlay.className = "popup-overlay";
           
           document.body.appendChild(overlay);
           
           // create popup box
           
           let popupBox = document.createElement("div");
           popupBox.className = ("popup-box");
           
           //create the image 
           let popImage = document.createElement("img");
           
           popImage.src = img.src;
           
           popupBox.appendChild(popImage);
           document.body.appendChild(popupBox);
           
           //create heading
           
           if(img.alt !== null) {
               
               let imgHeading = document.createElement("h3");
               let imgText    = document.createTextNode(img.alt);
               
               imgHeading.appendChild(imgText);
               popupBox.prepend(imgHeading);
           }   
           
           //add close tab
           
           let close = document.createElement('span');
           let closeText = document.createTextNode("X");
           
           close.appendChild(closeText);
           popupBox.prepend(close);
           
           close.addEventListener("click" , (e) => {
               
               e.target.parentNode.remove();
               
               overlay.remove();
           })
       });
        
    });

// toggle menu

let BtnToggle = document.querySelector(".toggle-menu");
let linksToggle = document.querySelector(".links");

BtnToggle.onclick = function (e) {
   
    e.stopPropagation();
    this.classList.toggle("menu-active");
    
    linksToggle.classList.toggle("open");
    
};

// click to close the toggle menu 

document.addEventListener("click" , (e) => {
   
    if (e.target !== BtnToggle && e.target !== linksToggle) {
        
        if (linksToggle.classList.contains("open")) {
            BtnToggle.classList.toggle("menu-active");
    
            linksToggle.classList.toggle("open");
            
        }
    }
    
});

//Stop propagation on links

linksToggle.onclick = function (e) {
    
    e.stopPropagation();
}





















