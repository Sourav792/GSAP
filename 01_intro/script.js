// GSAP TO
// gsap.to('.box1',{
//    x:1200,
//    duration:2,
//    delay:1,
//    yoyo:true
// });

// gsap.to('.box2',{
//     x:400,
//     y: 200,
//     duration:2,
//     backgroundColor: 'aqua',
//     delay:1,
//     borderRadius: '50%',
//     repeat: -1,
//     repeat: 1,
//     repeat: 3
//  });

// GSAP FROM
// gsap.from('.box1',{
//     x:1200,
//     rotate:360,
//     duration:2,
//     delay:1
//  });
 
//  gsap.from('.box2',{
//      x:400,
//      y: 200,
//      duration:2,
//      backgroundColor: 'aqua',
//      delay:1,
//      borderRadius: '50%'
//   });

gsap.from('h1',{
   y:-50,
   opacity:0,
//    stagger:-1,
   stagger: 1,
   duration:2,
   delay:1
});