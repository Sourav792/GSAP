function splitText() {
  let h1 = document.querySelector("h1");
  let text = h1.innerText;
  let halftext = text.length / 2;
  let splitText = text.split("");

  let textIndex = "";
  splitText.forEach(function (element, index) {
    if (index < halftext) {
      textIndex += `<span class='firstHalf'>${element}</span>`;
    } else {
      textIndex += `<span class='secondHalf'>${element}</span>`;
    }
  });

  h1.innerHTML = textIndex;
}

splitText();

gsap.from("h1 span.firstHalf", {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  delay: 0.5,
});

gsap.from("h1 span.secondHalf", {
  y: 50,
  opacity: 0,
  stagger: -0.2,
  duration: 0.8,
  delay: 0.5,
});
