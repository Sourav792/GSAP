let hamburgerIcon = document.querySelector('.nav i');
let closeIcon = document.querySelector('.links i');

let sectionLink = document.querySelectorAll('.links a');
let timeLine = gsap.timeline();

timeLine.to('.links', {
    right:0,
    duration:0.5
})

timeLine.from('.links a',{
   x:150,
   duration:0.6,
   stagger:0.2,
   opacity:0
});

timeLine.from('.links i',{
  opacity:0
});

timeLine.pause();

hamburgerIcon.addEventListener('click', () => {
    timeLine.play();
});

closeIcon.addEventListener('click', () => {
    timeLine.reverse();
});

console.log(sectionLink); // nodelist
let arr = Array.from(sectionLink)
console.log(arr);

arr.forEach(function (i) {
    console.log(i);
    i.addEventListener('click', () => {
        timeLine.reverse();
    })
})