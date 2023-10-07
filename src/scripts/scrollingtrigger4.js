import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".gsReveal").forEach(function(elem){
  const items = elem.querySelectorAll(".gsAni");

  // gsap.set(items, {
  //   transformOrigin: "50% 100% 0",
  //   transformPerspective: 400,
  //   transformStyle: "preserve-3d"
  // });

  const animationChange = gsap.fromTo(items, {
    autoAlpha: 0,
    y: 10
  }, {
    autoAlpha: 1,
    y: 0,
    duration: 0.7,
    delay: 0.4,
    stagger: 0.4,
    ease: "back.out(1.4)",
  });

  ScrollTrigger.create({
    trigger: elem,
    markers: true,
    animation: animationChange,
    // toggleActions: "play reverse play reverse",
    // start: "center 95%",
    // end: "center 5%",
  });
})