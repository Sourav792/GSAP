let path = "M 30 100 Q 500 100 1170 100";
let finalPath = "M 30 100 Q 500 100 1170 100";

let string = document.querySelector('#string');

string.addEventListener('mousemove', function (dots) {
  path = `M 30 100 Q ${dots.x} ${dots.y} 1170 100`;
  gsap.to('svg path',{
     attr: {
        d: path
     },
     duration:0.5,
     ease: "power3.out",
  });
})

string.addEventListener('mouseleave', function (dots) {
    
    gsap.to('svg path',{
       attr: {
          d: finalPath
       },
       duration:1.5,
       ease: "elastic.out(1.5,0.2)",
    });
  })