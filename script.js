const editButton = document.querySelector(".profile__edit-button"); // declaramos LA VARIABLE--> buscamos mediante DOM LA UBICACION EN EL HTML
const addButton = document.querySelector(".profile__add-button");
const closeButton = document.querySelectorAll(".popup__button-close"); //selleciona todos los elementos con la clase...
const inputName = document.querySelector("#name"); // se usa # cuando es ID
const inputAbout = document.querySelector("#about-me");
const submit = document.querySelectorAll(".popup__button-submit");
const cardsContainer = document.querySelector(".cards");
const saveCardButton = document.querySelector("#saveButton");
const formCard = document.querySelector(".popup__form-add");
//
const inputTitle = document.querySelector("#title");
const inputImage = document.querySelector("#newImage");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
initialCards.forEach((item) => {
  //recorre el array y aplica la funcion a cada elemento
  addImage(item.name, item.link);
});

//funcion abrir editar perfil
function openPopup() {
  const popup = document.querySelector(".popup");

  popup.classList.add("popup__open");

  checkFormValidity(); // se llama a la funcion de validacion dentro del popup.
}
editButton.addEventListener("click", openPopup); // cada que se clickee en editButton se ejecuta openPopup

function handleProfileFormSubmit(evt) {
  // se ejecuta cuando se envia el formulario
  evt.preventDefault(); //impide que el navgador entregue el formulario en su forma predeterminada
  const name = document.querySelector(".profile__name");
  const about = document.querySelector(".profile__ocupation");
  name.textContent = inputName.value; //INGRESAR TEXTO AL INPUT - obtiene el texto que el usuario a ingreado
  about.textContent = inputAbout.value; //cambiael contenido del elemento con la clase profile__name/ profile__ocupation para que muestre el tecto ingreado x el usuario
  closePopup();
  inputName.value = "";
  inputAbout.value = "";
}

//funcion validar formulario editProfile
function checkFormValidity() {
  if (inputName.value === " " || inputAbout.value === "") {
    //SI inputName.value es iGual a string vacio entonces ejecutas ...
    submit[0].disabled = true; // boton guardar desactivado
    submit[0].setAttribute("style", "background-color: #C4C4C4 ;"); // boton guardar guardar color blanco
  } else {
    // de lo contario
    submit[0].disabled = false; //si la condicion es falsa, es decir, los inputs no estan vacios, se activa
    submit[0].setAttribute("style", "background-color: black;"); // al mismo tiempo se aplica el nuevo estilo al boton
  }
}

inputName.addEventListener("input", () => {
  // cada que el usuario escriba o cambie el texto en el input se llamará a la funcion  check...
  //
  checkFormValidity(); //por cada caracter name  se va a llamar a la funcion
});

inputAbout.addEventListener("input", () => {
  checkFormValidity(); // cada que el usuario escriba o cambie el texto en el input se llamará a la funcion  check...
});

submit[0].addEventListener("click", handleProfileFormSubmit); // cuando se clickee guardar se ejecuta hadl..

function closePopup() {
  const popup = document.querySelector(".popup");
  popup.classList.remove("popup__open");
}
closeButton[0].addEventListener("click", closePopup); // primer elemento que se encuentre del array
//

//
// POPUP AGREGAR
function openAddButton() {
  const popupAdd = document.querySelector(".popup__add");
  popupAdd.classList.add("popup__add-open");
  checkformAdd();
}
addButton.addEventListener("click", openAddButton); // SE ABRE EL POPUP CUANDO SE  escuche el evento

//
function closePopupAdd() {
  const popupAdd = document.querySelector(".popup__add");
  popupAdd.classList.remove("popup__add-open");
}
closeButton[1].addEventListener("click", closePopupAdd); // segundo elemento del closebutton.

function addImage(titleValue, imageValue) {
  //addEventli... img
  const addTemplate = document.querySelector("#card-template"); // ubico mediante el DOM
  console.log(addTemplate);
  const addElement = addTemplate.content.querySelector(".card").cloneNode(true); // clona el node seleccionado y a sus hijos.

  addElement.querySelector(".card__image").src = imageValue; //selecciona el elemento dentro del clon y se establece su atributo
  addElement.querySelector(".card__title").textContent = titleValue;

  addElement
    .querySelector(".card__like")
    .addEventListener("click", function (evt) {
      console.log(evt);
      {
        addElement
          .querySelector(".card__like")
          .classList.toggle("card__like-active");
      }
    });
  addElement
    .querySelector(".card__image")
    .addEventListener("click", function () {
      const popupCard = document.querySelector(".container__cardPopup");
      popupCard
        .querySelector(".popup__cards")
        .classList.toggle("popup__card-open");
      popupCard.querySelector(".popup__card-image").src = imageValue;
      popupCard.querySelector(".popup__description-card").textContent =
        titleValue;
    });
  //

  function closeImage() {
    const popupCard = document.querySelector(".popup__cards");
    popupCard.classList.remove("popup__card-open");
  }
  closeButton[2].addEventListener("click", closeImage);
  //
  cardsContainer.prepend(addElement);

  addElement
    .querySelector(".card__button-delete")
    .addEventListener("click", function (evt) {
      console.log(evt);

      addElement.remove();
    });
  closePopupAdd();
}

function checkformAdd() {
  if (inputTitle.value === "" || inputImage.value == "") {
    submit[1].disabled = true;
    submit[1].setAttribute("style", "background-color: #C4C4C4 ;");
  } else {
    submit[1].disabled = false;
    submit[1].setAttribute("style", "background-color: black;");
  }
}
inputTitle.addEventListener("input", () => {
  checkformAdd();
});
inputImage.addEventListener("input", () => {
  checkformAdd();
});
//submit[1].addEventListener("click", confirmar);

/*function confirmar(evt) {
  evt.preventDefault();
  const title = document.querySelector(".card__title");
  const image = document.querySelector(".card__image");
  title.textContent = inputTitle.value;
  image.src = inputImage.value;
  closePopupAdd();
}*/

//submit[1].addEventListener("click", confirmar);

//

formCard.addEventListener("submit", function (evt) {
  //
  evt.preventDefault();

  const title = document.querySelector("#title");
  const image = document.querySelector("#newImage");
  addImage(title.value, image.value);

  inputTitle.value = "";
  inputImage.value = "";
});
