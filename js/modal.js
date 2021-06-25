const contactLink = document.querySelector(".contacts-block .button");
const contactPopup = document.querySelector(".modal");
const modalClose = contactPopup.querySelector(".modal-close");
const modalForm = contactPopup.querySelector(".modal-form")
const formName = contactPopup.querySelector(".name-item input");
const formEmail = contactPopup.querySelector(".email-item input");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");

    if (storage) {
        formEmail.value = storage;
        formEmail.focus();
    } else {
        formName.focus();
      }
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-show");
    contactPopup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
  if (!formName.value || !formEmail.value) {
    evt.preventDefault();
    contactPopup.classList.add("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", formName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (contactPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        contactPopup.classList.remove("modal-show");
        contactPopup.classList.remove("modal-error");
      }
    }
});
