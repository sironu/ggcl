const mnb = document.querySelector(".nav-menu-btn");
const mnl = document.querySelector(".mobile-nav-links");
const heda = document.querySelector("header");
let back2Top = document.querySelector(".back-to-top");
let back2TopContainer = document.querySelector(".back-to-top-container");


window.addEventListener("scroll", () => {
  scrollY > 145
    ? navContainer.classList.add("fixed")
    : navContainer.classList.remove("fixed");
});


window.addEventListener('scroll', () => {
  scrollY > 1000 
  ? back2TopContainer.classList.remove('hidden')  
  : back2TopContainer.classList.add("hidden");
  
})

function closeMobileNav() {
 setTimeout(() => {
   mnl.classList.remove('h-[350px]')
 }, 1500);
}
mnb.addEventListener('click', () =>{
  mnl.classList.toggle('h-[350px]')
  
})
heda.addEventListener("mouseleave", closeMobileNav);


function startIncrementTimer(elementId, target, speed) {
  const display = document.getElementById(elementId);
  let count = 0;
    update();
  function update() {
    count++;
    display.textContent = count;
    if (count < target) {
      setTimeout(update, `${speed}`);
    }
  }
}



const school = document.querySelector("#school");
function callback(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting){
      startIncrementTimer(`GGCL-Training-School`, 50, 220);
      startIncrementTimer("GGCL-Graduates", 500, 20);
      startIncrementTimer("Free-Online-Courses", 100, 100);
      startIncrementTimer("Happy-Customers", 400, 30);
    }
  }
}

const observer = new IntersectionObserver(callback, { threshold: 0.75 });
observer.observe(school);


let x = "Generic Global Consult Limited";
let string = document.querySelector(".demo");

let count = 0;

function z() {
  if (count < x.length + 200) {
    count++;
    string.innerHTML = x.substring(0, count);
  } else {
    count = 0;
  }
  setTimeout(z, 75);
}
z();
