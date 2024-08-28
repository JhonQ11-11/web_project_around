const editButton = document.querySelector(".profile__edit-button"); // declaramos LA VARIABLE--> buscamos mediante DOM LA UBICACION EN EL HTML
const addButton = document.querySelector(".profile__add-button");
const closeButton = document.querySelector(".popup__button-close ");
const inputName = document.querySelector("#name"); // se usa # cuando es ID
const inputAbout = document.querySelector("#about-me");
const submit = document.querySelector(".popup__button-submit");

function openPopup() {
  const popup = document.querySelector(".popup");
  popup.classList.add("popup__open");
  checkFormValidity(); // se llama a la funcion de validacion dentro del popup.lINE 24
}
editButton.addEventListener("click", openPopup); // cada que se clickee en editButton se ejecuta openPopup

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); //impide que el navgador entregue el formulario en su forma predeterminada
  const name = document.querySelector(".profile__name");
  const about = document.querySelector(".profile__ocupation");
  name.textContent = inputName.value; //INGRESAR TEXTO AL INPUT
  about.textContent = inputAbout.value;
  closePopup();
}

function checkFormValidity() {
  if (inputName.value === " " || inputAbout.value === "") {
    //SI inputName.value es ifual a string vacio entonces ejecutas ...
    submit.disabled = true; // boton guardar desactivado
    submit.setAttribute("style", "background-color: #C4C4C4 ;"); // boton guardar guardar color blanco
  } else {
    // de lo contario
    submit.disabled = false; //si la condicion es falsa, es decir, los inputs no estan vacios, se activa
    submit.setAttribute("style", "background-color: black;"); // al mismo tiempo se aplica el nuevo estilo al boton
  }
}

//
inputName.addEventListener("input", () => {
  checkFormValidity(); //por cada caracter name  se va a llamar a la funcion
});

inputAbout.addEventListener("input", () => {
  checkFormValidity();
});

submit.addEventListener("click", handleProfileFormSubmit); // cuando se clickee guardar se ejecuta hadl..

function closePopup() {
  const popup = document.querySelector(".popup");
  popup.classList.remove("popup__open");
}
closeButton.addEventListener("click", closePopup);
