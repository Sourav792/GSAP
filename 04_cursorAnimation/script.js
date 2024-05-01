let mainContainer = document.querySelector('#main');
let cursor = document.querySelector('#cursor');

mainContainer.addEventListener('mousemove', function (event) {
   console.log(event);
   gsap.to(cursor,{
     x:event.x,
     y:event.y,
     duration:0.7,
     ease: "back.out",
   });
})