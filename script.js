gsap.from("#main1",{
    y:-100,
    opacity:0,
    duration:2.5,
    // stagger:0.3,

})

gsap.from("#main2",{
    x:-500,
    opacity:0,
    duration:2,
    stagger:0.3,
})

const button = document.querySelector("#btn");

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.1,
    duration: 0.3
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1,
    duration: 0.3
  });

  setTimeout(()=>{
    window.location.href = "index2.html";
  })
});


gsap.to("a", {
  boxShadow: "0px 0px 20px #070505",
  repeat: -1,
  yoyo: true,
  duration: 1
});






