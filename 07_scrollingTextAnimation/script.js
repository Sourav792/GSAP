let headings = document.querySelectorAll('.heading')
let images = document.querySelectorAll('.markque img')

let headingArr = Array.from(headings)
let imageArr = Array.from(images)
// console.log(imageArr);


window.addEventListener('wheel', function (event) {
//   console.log(event.deltaY);

  if (event.deltaY > 0) {

    // console.log('down scrolling');

    headingArr.forEach(function (i) {
        i.innerText = 'Gulshan Kalra'
    })
    imageArr.forEach(function (i) {
        i.src = "gourav.jpeg"
    })

    gsap.to('.markque',{
      transform: 'translateX(-200%)',
      duration:4,
      ease: "none",
      repeat:-1
    });

    // gsap.to('.markque img',{
    //   rotate:180
    // });

  } else {

    // console.log('top scrolling');

    headingArr.forEach(function (i) {
        i.innerText = 'Sourav Singh'
    })
    imageArr.forEach(function (i) {
        i.src = "sourav.jpeg"
    }) 

    gsap.to('.markque',{
        transform: 'translateX(0%)',
        duration:4,
        ease: "none",
        repeat:-1
      });

    //   gsap.to('.markque img',{
    //     rotate:0
    //   });
  }
})
