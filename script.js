/* window.onscroll = function () {funcaoScrollBarra();};
let bannerFrase = document.getElementsByClassName("textBanner")[0];
function funcaoScrollBarra() {
  console.log('working', bannerFrase)
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    bannerFrase.classList.add = "stickyBanner";
  } else {
    bannerFrase.classList.remove = "stickyBanner";
  }
}

 */





// VALIDAÇÃO FORMULÁRIO DE MARCAR CONSULTA
let appointmentName = document.getElementById("appointmentName");
let appointmentEmail = document.getElementById("appointmentEmail");
let appointmentNumber = document.getElementById("appointmentNumber");
let appointmentAge = document.getElementById("appointmentAge");
let appointmentTypeOnline = document.getElementById("appointmentTypeOnline");
let appointmentTypeLive = document.getElementById("appointmentTypeLive");
let appointmentTypeLabel = document.getElementById("appointmentTypeLabel");
let appointmentMessage = document.getElementById("appointmentMessage");

function validateAppointment() {
  let validated = 0;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regexEmail.test(String(appointmentEmail.value).toLowerCase())) {
    validated += 1;
    appointmentEmail.classList.remove("deniedForm");
  } else {
    appointmentEmail.classList.add("deniedForm");
  }
  if (appointmentName.value.length > 3) {
    validated += 1;
    appointmentName.classList.remove("deniedForm");
  } else {
    appointmentName.classList.add("deniedForm");
  }
  if (appointmentNumber.value.replace(/\D/g, "").length === 11) {
    validated += 1;
    appointmentNumber.classList.remove("deniedForm");
  } else {
    appointmentNumber.classList.add("deniedForm");
  }
  if (appointmentAge.value != "") {
    validated += 1;
    appointmentAge.classList.remove("deniedForm");
  } else {
    appointmentAge.classList.add("deniedForm");
  }
  if (appointmentTypeOnline.checked || appointmentTypeLive.checked) {
    validated += 1;
    appointmentTypeLabel.style.color = "";
  } else {
    appointmentTypeLabel.style.color = "red";
  }

  return validated === 5;
}

submitAppointmentForm.addEventListener("click", (event) => {
  validateAppointment();
  //! CRIAR FORMA DE MARCAR CONSULTA
});





//  VALIDAÇÃO FORMULÁRIO DE CONTATO

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
