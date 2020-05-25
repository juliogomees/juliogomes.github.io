function typeWrite(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = "";
  textArray.forEach((letra, i) => {
    setTimeout(() => (element.innerHTML += letra), 110 * i);
  });
}

const titulo = document.querySelector("h1");
typeWrite(titulo);

/* typeWrite2(document.querySelector(".text-primary")); */
