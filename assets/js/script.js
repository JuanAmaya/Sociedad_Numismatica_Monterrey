/* Barra de Navegacion */
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".efecto"); // .nav-list li

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 30 + 0.01
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");

    // Se cierre el menu si se cierra la hamburgesa
    navLinks.forEach((e) => {
      if (e.classList.contains("activado")) {
        e.classList.toggle("activado");
      }
    });
  });

  // Que se abra el menu con click
  navLinks.forEach((e) => {
    e.onclick = function () {
      e.classList.toggle("activado");
    };
  });
};

function expandirMenu() {
  const opcion = document.querySelector(".activado");

  opcion.classList.toggle(".activado");
}

/* Boton para ir arriba */
const scrollBtn = document.querySelector(".btn-arriba");

const aparecerBoton = () => {
  if (document.documentElement.scrollTop <= 200) {
    scrollBtn.style.animation = `btnFadeAlReves 0.5s`;
    scrollBtn.style.display = "none";
  } else {
    scrollBtn.style.animation = `btnFade 0.5s`;
    scrollBtn.style.display = "block";
  }
};

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
  aparecerBoton();
});

/* Tabla de los presidentes */
function tablaPresidentes() {
  let year = 1970;
  presidentes = document.getElementsByClassName("tabla-cuerpo")[0];

  function incluirPresidente(presidente, observacion) {
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");

    th1.append(year);
    tr.appendChild(th1);
    th2.append(presidente);
    tr.appendChild(th2);
    th3.append(observacion);
    tr.appendChild(th3);
    presidentes.appendChild(tr);

    year++;
  }

  incluirPresidente("ING. PEDRO MARTINEZ TORRES", "FUNDADOR †");
  incluirPresidente("FRANCISCO GARZA BERARDI", "FUNDADOR †");
  incluirPresidente("AMARO S. REYES ELIZONDO", "FUNDADOR †");
  incluirPresidente("JOSE MARIA SANTOS MENCHACA", "FUNDADOR †");
  incluirPresidente("ING. RODRIGO S. QUIJANO TREVIÑO", "FUNDADOR †");
  incluirPresidente("LUCIANO GALINDO ROMERO", "FUNDADOR †");
  incluirPresidente("ING. MAURICIO FERNANDEZ GARZA", "");
  incluirPresidente("ING. ELISEO PAREDES RANGEL", "†");
  incluirPresidente("JAVIER CANTU GARCIA", "FUNDADOR †");
  incluirPresidente("ARQ.RAMON LAMADRID", "FUNDADOR †");
  incluirPresidente("LIC. GREGORIO VAZQUEZ ALANIS", "");
  incluirPresidente("PBRO. AURELIANO TAPIA MENDEZ", "†");
  incluirPresidente("JOSE MARIA SANTOS MENCHACA", "FUNDADOR †");
  incluirPresidente("LUCIANO GALINDO ROMERO", "FUNDADOR †");
  incluirPresidente("ARQ. EFRAIN FARIAS ESPARZA", "†");
  incluirPresidente("LIC. RUBEN LEAL GARZA", "");
  incluirPresidente("RAMON DE LA GARZA GARCIA", "†");
  incluirPresidente("C.P. AURELIO R. ELIZONDO MARTINEZ", "");
  incluirPresidente("C.P. JOSE LUIS GARCIA CANTU", "†");
  incluirPresidente("ING. CARLOS OLIVARES GUZMAN", "†");
  incluirPresidente("ARQ. XAVIER GALINDO RUIZ", "");
  incluirPresidente("RAMON DE LA GARZA GARCIA", "†");
  incluirPresidente("LIC. ANIBAL ELIZONDO RUIZ", "");
  incluirPresidente("LIC. ROGELIO C. VILLARREAL TREVIÑO", "FUNDADOR †");
  incluirPresidente("C.P. ARTURO DE LA TORRE MORENO", "†");
  incluirPresidente("C.P. JOSE LUIS GARCIA CANTU", "†");
  incluirPresidente("ADRIAN G. GONZALEZ SALINAS", "");
  incluirPresidente("ING. CARLOS OLIVARES GUZMAN", "†");
  incluirPresidente("C.P. AURELIO R. ELIZONDO MARTINEZ", "");
  incluirPresidente("LIC. EDUARDO HINOJOSA ESPINOSA", "†");
  incluirPresidente("C.P. RICARDO GUZMAN BENAVIDES", "");
  incluirPresidente("C.P. ALBERTO JORGE LOZANO LOZANO", "");
  incluirPresidente("LIC. JORGE GARZA SALINAS SALINAS", "");
  incluirPresidente("ING. RAFAEL EMILIO DAVALOS VILLARREAL", "");
  incluirPresidente("PROFR. FROYLAN DE JESUS GONZALEZ MEDELLIN", "");
  incluirPresidente("C.P. LUIS ALBERTO MANZANO EDDY", "");
  incluirPresidente("DR. CARLOS ABEL AMAYA GUERRA", "");
  incluirPresidente("LIC. RUBEN LEAL GARZA", "");
  incluirPresidente("DR. CARLOS OLIVARES LEAL", "");
  incluirPresidente("C.P. HUMBERTO GUERRA GONZALEZ", "");
  incluirPresidente("PROFR. FROYLAN DE JESUS GONZALEZ MEDELLIN", "");
  incluirPresidente("LIC. LUIS CARLOS MONTEMAYOR VELEZ", "");
  incluirPresidente("LIC. JOSE G. GARZA MORALES", "");
  incluirPresidente("ING. ROBERTO B. NAVA OLIVARES", "");
  incluirPresidente("C.P. HUMBERTO GUERRA GONZALEZ", "");
  incluirPresidente("LUIS. H. FLORES SALDAÑA", "");
  incluirPresidente("DR. CARLOS ABEL AMAYA GUERRA", "");
  incluirPresidente("ING. ROBERTO ARMANDO DE LA FUENTE GUERRA", "");
  incluirPresidente("LIC. MARTIN A. VEGA HERNANDEZ", "");
  incluirPresidente("DR. JESUS SALVADRO ARTEAGA GARZA", "");
  incluirPresidente("LIC. JOSE G. GARZA MORALES", "");
  incluirPresidente("M.A. GABRIEL ADRIAN GONZALEZ AYALA", "");
}

/* Tabla de libros */
function tablaLibros() {
  // libros = document.getElementsByClassName("tabla-cuerpo")[0];
  // function incluirLibros(fecha, libro) {
  //   const tr = document.createElement("tr");
  //   const th1 = document.createElement("th");
  //   const th2 = document.createElement("th");
  //   th1.append(fecha);
  //   tr.appendChild(th1);
  //   th2.append(libro);
  //   tr.appendChild(th2);
  //   libros.appendChild(tr);
  // }
  // incluirLibros(
  //   1973,
  //   "Conoce México a través de sus monedas. Colaboración entre la Sociedad Numismática de Monterrey y la empresa KODYZ " +
  //     "(1973)"
  // );
  // incluirLibros(
  //   1978,
  //   "José Eleuterio González. Perfil Biográfico. Aureliano Tapia Méndez" +
  //     "(1978)"
  // );
}

/* Cambiar Imagenes del Index */
function cambioImagenes() {
  let images = document.getElementsByClassName("imagen-principal");
  console.log(images);
  const nextImageDelay = 3000;
  let currentImageCounter = 1;

  images[currentImageCounter].style.opacity = 1;

  setInterval(nextImage, nextImageDelay);

  function nextImage() {
    images[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % images.length;
    images[currentImageCounter].style.opacity = 1;
  }
}

/* Iniciar funciones */
const app = () => {
  navSlide();
  aparecerBoton();
};

app();
