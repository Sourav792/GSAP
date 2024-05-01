let mainContainer = document.querySelector('#main');
let cursor = document.querySelector('#cursor');
let imageDiv = document.querySelector('#image');

mainContainer.addEventListener('mousemove', function (event) {

   gsap.to(cursor,{
     x:event.x,
     y:event.y,
     duration:0.7,
     ease: "back.out",
   });
})

imageDiv.addEventListener('mouseenter', function (event) {
    cursor.innerText = 'view more';
    gsap.to(cursor,{
        scale:3,
        duration:0.7,
        ease: "back.out",
        backgroundColor:'#d8d8d8'
      });
});
imageDiv.addEventListener('mouseleave', function (event) {
    cursor.innerText = '';
    gsap.to(cursor,{
        scale:1,
        backgroundColor:''
      });
});