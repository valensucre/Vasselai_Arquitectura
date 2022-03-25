/* //Eventos onmouseup para identificar que tipos de render causan mas interes
let botonID = document.getElementById("internoDiurno");
botonID.onmouseup = () => {
  console.log("El usuario esta interesado en renders internos diurnos");
};

let botonED = document.getElementById("externoDiurno");
botonED.onmouseup = () => {
  console.log("El usuario esta interesado en renders externos diurnos");
};

let botonIN = document.getElementById("internoNocturno");
botonIN.onmouseup = () => {
  console.log("El usuario esta interesado en renders internos nocturnos");
};
let botonEN = document.getElementById("externoNocturno");
botonEN.onmouseup = () => {
  console.log("El usuario esta interesado en renders externos nocturnos");
};
 */
//Al hacer click en submit cambiaremos tendremos un Toastify. Se agregara un h3 en el HTML con el nombre captado del usuario
function recover() {
  let datosLS = JSON.parse(localStorage.getItem("datos")) || [];

  console.log(...datosLS); // Spread operator

  datosLS.forEach((element) => {
    document.getElementById("user").style.display = "block";
    document.getElementById(
      "user"
    ).innerText = `Gracias ${element.name.toUpperCase()}, pronto te contactaremos! `;
  });
}

let element = document.getElementById("myButton");

element.addEventListener("click", () => {
  Toastify({
    text: "Consulta enviada, pronto te contactaremos!",
    duration: 4000,
    gravity: "top",
    position: "left",
  }).showToast();
});

//Evento de Submit en formulario de contacto
class Consulta {
  constructor(name, number, mail, subject, other) {
    this.name = name;
    this.number = number;
    this.mail = mail;
    this.subject = subject;
    this.other = other;
  }
}

let baseDatos = [];

const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Fetch y envio de formulario por correo
  fetch("https://formsubmit.co/ajax/valensucre93@gmail.com", {
    method: "POST",
    body: new FormData(form),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
    });
  let name = document.getElementById("Nombre").value;
  let number = document.getElementById("phonenumber").value;
  let mail = document.getElementById("email-form").value;
  let subject = document.getElementById("affair").value;
  let other = document.getElementById("comments").value;

  //Local Storage & JSON stringify

  const persona = new Consulta(name, number, mail, subject, other);

  baseDatos.push(persona);

  localStorage.setItem("datos", JSON.stringify(baseDatos));

  document.getElementById("Nombre").value = "";
  document.getElementById("phonenumber").value = "";
  document.getElementById("email-form").value = "";
  document.getElementById("affair").value = "";
  document.getElementById("comments").value = "";
  recover();
});
