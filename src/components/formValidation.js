//!  VALIDAÇÃO FORMULÁRIO DE CONTATO falta implementar 

let contactName = document.getElementById("contactName");
let contactEmail = document.getElementById("contactEmail");
let contactNumber = document.getElementById("contactNumber");
let contactSubject = document.getElementById("contactSubject");
let contactMessage = document.getElementById("contactMessage");

const submitContactForm = document.getElementById("submitContactForm");

function validateContact() {
  let validated = 0;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regexEmail.test(String(contactEmail.value).toLowerCase())) {
    validated += 1;
    contactEmail.classList.remove("deniedForm");
  } else {
    contactEmail.classList.add("deniedForm");
  }

  if (contactName.value.length > 2) {
    validated += 1;
    contactName.classList.remove("deniedForm");
  } else {
    contactName.classList.add("deniedForm");
  }

  if (contactNumber.value.replace(/\D/g, "").length === 11) {
    validated += 1;
    contactNumber.classList.remove("deniedForm");
  } else {
    contactNumber.classList.add("deniedForm");
  }

  if (contactSubject.value.length > 4) {
    validated += 1;
    contactSubject.classList.remove("deniedForm");
  } else {
    contactSubject.classList.add("deniedForm");
  }

  return validated === 4;
}

submitContactForm.addEventListener("click", (event) => {
  validateContact();
  //! CRIAR FORMA DE RECEBER EMAIL DE CONTATO
});
