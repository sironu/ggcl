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


function b2t() {
  scrollTo({ top: 0, behavior: "smooth" });

}
back2Top.addEventListener("click", b2t);



