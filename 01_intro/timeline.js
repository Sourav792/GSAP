// TimeLine 

let timeLine = gsap.timeline();
// timeLine.to(".box1", {
//   x: 1000,
//   rotate:360,
//   duration: 2,
//   delay: 1,
// });
// timeLine.to(".box2", {
//   x: 800,
//   borderRadius: '25%',
//   duration: 2,
// });
// timeLine.to(".box3", {
//   x: 500,
//   borderRadius:'50%',
//   backgroundColor: 'red',
//   duration: 2,
// });

timeLine.from('h1', {
    y:-30,
    opacity:0,
    duration:1,
    delay:1
})
timeLine.from('.links a', {
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.5,
})
timeLine.from('p', {
    y:30,
    opacity:0,
    duration:1,
    scale:0.2
})