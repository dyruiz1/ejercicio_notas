// Copyright 2021 JUSTINO RAMOS STUDENT
/**
 * (TRABAJO PRACTICO)
 *
 * @author juscoder
 */
async function agregarNotas() {
  let nom = document.getElementById("nombre").value;
  let not1 = document.getElementById("nota1").value;
  let not2 = document.getElementById("nota2").value;
  let not3 = document.getElementById("nota3").value;

  //Validadr el campo nombre
  if (nom === "") {
    swal(
      "Ingrese el nombre del Estudiante",
      "El campo de nombre no puede ser vacio",
      "warning"
    );
    return false;
  }
  // Validar las notas si estan vacias
  if (not1 === "" || not2 === "" || not3 === "") {
    swal(
      "Ingese las notas por favor",
      "La notas no pueden ser vacios",
      "warning"
    );
    return false;
  }
  //Validar las notas, no mayor de 21 puntos, solo asta 20
  if (not1 > 5 || not2 > 5 || not3 > 5) {
    alert("la nota no puede ser mas de 5");
    return false;
  }

  await llamadoAPI();

  //Promediar la suma de las notas entre 3
  let prom = (parseFloat(not1) + parseFloat(not2) + parseFloat(not3)) / 3;

  //Variable obserbacion
  let obs = 0;
  //Promedio menor o igual a 3 entonces aprobado, caso ocntrario aprobado
  if (prom >= 3) {
    obs = "!Aprobado¡ &#x2714";
  } else {
    obs = "!Desaprobado¡ &#x274c";
  }

  const tabla = document.getElementById("addtabla");

  const fila = document.createElement("tr");

  fila.innerHTML = `<td> ${nom} </td><td> ${not1} </td><td> ${not2} </td><td> ${not3} </td><td> ${prom.toFixed(
    1
  )} </td><td> ${obs} </td>`;

  tabla.appendChild(fila);

  if (prom > 12.5) {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(5)"
    ).style.background = "#B3DEBA";
  } else {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(5)"
    ).style.background = "#FFCABA";
  }
  if (not1 > 12.5) {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(2)"
    ).style.color = "blue";
  } else {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(2)"
    ).style.color = "red";
  }
  if (not2 > 12.5) {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(3)"
    ).style.color = "blue";
  } else {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(3)"
    ).style.color = "red";
  }
  if (not3 > 12.5) {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(4)"
    ).style.color = "blue";
  } else {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(4)"
    ).style.color = "red";
  }

  document.getElementById("nombre").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
}

function llamadoAPI() {
  toggleSpinner(true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      toggleSpinner(false);
      resolve();
    }, 3000);
  });
}

function toggleSpinner(show) {
  document.getElementById("lds-background").style.display = show
    ? "block"
    : "none";
  document.getElementById("lds-facebook").style.display = show
    ? "block"
    : "none";
}
