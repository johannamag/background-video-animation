const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

const section = document.querySelector("section");
const heading = section.querySelector("h1");

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration: 11000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

let textAnimation = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnimation)
  .addTo(controller);

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = scrollpos;
}, 41.6);
