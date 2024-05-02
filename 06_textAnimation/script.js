function splitText() {
  let h1 = document.querySelector("h1");
  let text = h1.innerText;

  let splitText = text.split("");
  console.log(splitText);

  let textIndex = "";
  splitText.forEach(function (i) {
    textIndex += `<span>${i}</span>`;
  });

  h1.innerHTML = textIndex;
}

splitText()

gsap.from('h1 span',{
    y:50,
    opacity:0,
    stagger:0.2,
    duration:0.8,
    delay:0.5,
});