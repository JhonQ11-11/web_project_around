const editButton = document.querySelector(".profile__edit-button"); // buscamos el boton en el DOM, DECLARAMOS LA VARIABLE
const addButton = document.querySelector(".profile__add-button");
const closeButton = document.querySelector(".popup__button-close ");
const inputName = document.querySelector("#name");
const inputAbout = document.querySelector("#about-me");

function ejecutar() {
  const popup = document.querySelector(".popup"); //le dice que busque dentro del popup
  popup.classList.add("popup__open"); // nueva clase creada
}
editButton.addEventListener("click", ejecutar);

const submit = document.querySelector(".popup__button-submit");
submit.addEventListener("click", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const name = document.querySelector(".profile__name");
  const about = document.querySelector(".profile__ocupation");

  name.textContent = inputName.value; //del elemento html va ser igual al input name
  about.textContent = inputAbout.value;
  close();
}
if (inputName.value !== "" && inputAbout.value !== "") {
  submit.disabled = true;
  submit.setAttribute("style", "background-color: #C4C4C4 ;");
}
function close() {
  const popup = document.querySelector(".popup");
  popup.classList.remove("popup__open");
}
closeButton.addEventListener("click", close);
