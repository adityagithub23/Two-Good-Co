// function locomotiveAnimation(){
//     gsap.registerPlugin(ScrollTrigger);


//     // --- SETUP START ---
//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);
    
//     // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
//       }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//       getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//       },
//       // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//       pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });
    
//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.defaults({ scroller: "#main" });
//     // --- SETUP END ---
    
//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();
    
// }

// locomotiveAnimation();

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }

locomotiveAnimation();

// gsap.to("#nav-part1 svg",{
//     transform: "translateY(-100%)",
//     scrollTrigger:{
//         trigger:"#page1",
//         scroller:"#main",
//         markers:true,
//         start:"top 0",
//         end:"top -5%",
//         scrub:true,
//     }
// })

// gsap.to("#nav-part2 #links",{
//     transform: "translateY(-60%)",
//     scrollTrigger:{
//         opacity:0,
//         trigger:"#page1",
//         scroller:"#main",
//         markers:true,
//         start:"top 0",
//         end:"top -5%",
//         scrub:true,
//     }
// })

function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: 1,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }

navbarAnimation()

function videoconAnimation(){
    let videocon =document.querySelector("#video-container");
    let playbtn=document.querySelector("#play");


    videocon.addEventListener("mouseenter", ()=>{
        gsap.to(playbtn,{
            scale:1,
            opacity:1
        });
    });

    videocon.addEventListener("mouseleave",()=>{
        gsap.to(playbtn,{
            scale:0,
            opacity:0
        });
    });

    videocon.addEventListener("mousemove", (details)=>{
        gsap.to(playbtn,{
            left:details.clientX-60,
            top:details.clientY-40
        });
    });
}

videoconAnimation();

function loadingAnimation(){
    gsap.from("#page1 p", {
        y:200,
        delay:0.5,
        duration:0.5,
        opacity:0,
        stagger:0.3
    })

    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity:0,
        delay:1.3,
        duration:0.5
    })
}

loadingAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove",(details)=>{
        gsap.to(".cursor",{
            left: details.clientX,
            top: details.clientY
        })
    });

    document.querySelectorAll(".child").forEach((elem)=>{
        elem.addEventListener("mouseenter",()=>{
            gsap.to(".cursor",{
                transform: 'translate(-50%,-50%) scale(1)'
            });
        });
        elem.addEventListener("mouseleave",()=>{
            gsap.to(".cursor",{
                transform: 'translate(-50%,-50%) scale(0)'
            });
        });
    });
}

cursorAnimation();

let mailbox=document.querySelector("#page6 .email input");
mailbox.addEventListener("click",()=>{
    mailbox.value="";
})

document.querySelector("#page5").addEventListener("click", ()=>{
    mailbox.value="ENTER YOUR EMAIL ADDRESS FOR GOOD"
})

document.querySelector(".footer-links").addEventListener("click", ()=>{
    mailbox.value="ENTER YOUR EMAIL ADDRESS FOR GOOD"
})