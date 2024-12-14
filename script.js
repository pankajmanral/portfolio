const lenis = new Lenis({
    duration: 1.2, // Duration of the scroll (in seconds)
    smooth: true,  // Enable smooth scrolling
    mouseMultiplier: 1, // Adjust the speed of the mouse scroll
    touchMultiplier: 2, // Adjust the speed of the touch scroll
    infinite: false, // Enable infinite scroll
});

  
// Update the scroll animation frame
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
  
  // Start the animation frame loop
requestAnimationFrame(raf);
  
const unfold = document.querySelector("#unfold")
const fold = document.querySelector("#fold")
const username = document.querySelector("#username")

unfold.addEventListener("click",()=>{
    fold.classList.remove("-translate-x-full")
    username.classList.add("hidden")

})

fold.addEventListener("click",()=>{
    fold.classList.add("-translate-x-full")
    username.classList.remove("hidden")
})
