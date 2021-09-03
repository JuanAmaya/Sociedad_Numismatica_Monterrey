/* Barra de Navegacion */
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.efecto'); // .nav-list li

	burger.addEventListener('click', () => {
		// Toggle Nav
		nav.classList.toggle('nav-active');

		// Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 30 + 0.01}s`;
			}
		});

		// Burger Animation
		burger.classList.toggle('toggle');

		// Se cierre el menu si se cierra la hamburgesa
		navLinks.forEach((e) => {
			if (e.classList.contains('activado')) {
				e.classList.toggle('activado');
			}
		});
	});

	// Que se abra el menu con click
	navLinks.forEach((e) => {
		e.onclick = function() {
			e.classList.toggle('activado');
		};
	});
};

function expandirMenu() {
	const opcion = document.querySelector('.activado');

	opcion.classList.toggle('.activado');
}

/* Boton para ir arriba */
const scrollBtn = document.querySelector('.btn-arriba');

const aparecerBoton = () => {
	if (document.documentElement.scrollTop <= 200) {
		scrollBtn.style.animation = `btnFadeAlReves 0.5s`;
		scrollBtn.style.display = 'none';
	} else {
		scrollBtn.style.animation = `btnFade 0.5s`;
		scrollBtn.style.display = 'block';
	}
};

scrollBtn.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

document.addEventListener('scroll', (e) => {
	aparecerBoton();
});

/* Tabla de los presidentes */
function tablaPresidentes() {
	let year = 1970;
	presidentes = document.getElementsByClassName('tabla-cuerpo')[0];

	function incluirPresidente(presidente) {
		const tr = document.createElement('tr');
		const th1 = document.createElement('th');
		const th2 = document.createElement('th');

		th1.append(year);
		tr.appendChild(th1);
		th2.append(presidente);
		tr.appendChild(th2);
		presidentes.appendChild(tr);

		year++;
	}

	incluirPresidente('ING. PEDRO MARTINEZ TORRES');
	incluirPresidente('FRANCISCO GARZA BERARDI');
	incluirPresidente('AMARO S. REYES ELIZONDO');
	incluirPresidente('JOSÉ MARÍA SANTOS MENCHACA');
	incluirPresidente('ING. RODRIGO S. QUIJANO TREVIÑO');
	incluirPresidente('LUCIANO GALINDO ROMERO');
	incluirPresidente('ING. MAURICIO FERNANDEZ GARZA');
	incluirPresidente('ING. ELISEO PAREDES RANGEL');
	incluirPresidente('JAVIER CANTU GARCÍA');
	incluirPresidente('ARQ.RAMÓN LAMADRID');
	incluirPresidente('LIC. GREGORIO VÁZQUEZ ALANÍS');
	incluirPresidente('PBRO. AURELIANO TAPÍA MÉNDEZ');
	incluirPresidente('JOSÉ MARÍA SANTOS MENCHACA');
	incluirPresidente('LUCIANO GALINDO ROMERO');
	incluirPresidente('ARQ. EFRAIN FARÍAS ESPARZA');
	incluirPresidente('LIC. RUBÉN LEAL GARZA');
	incluirPresidente('RAMÓN DE LA GARZA GARCÍA');
	incluirPresidente('C.P. AURELIO R. ELIZONDO MARTÍNEZ');
	incluirPresidente('C.P. JOSÉ LUIS GARCÍA CANTÚ');
	incluirPresidente('ING. CARLOS OLIVARES GUZMÁN');
	incluirPresidente('ARQ. XAVIER GALINDO RUIZ');
	incluirPresidente('RAMÓN DE LA GARZA GARCÍA');
	incluirPresidente('LIC. ANIBAL ELIZONDO RUÍZ');
	incluirPresidente('LIC. ROGELIO C. VILLARREAL TREVIÑO');
	incluirPresidente('C.P. ARTURO DE LA TORRE MORENO');
	incluirPresidente('C.P. JOSÉ LUIS GARCÍA CANTÚ');
	incluirPresidente('ADRIAN G. GONZÁLEZ SALINAS');
	incluirPresidente('ING. CARLOS OLIVARES GUZMÁN');
	incluirPresidente('C.P. AURELIO R. ELIZONDO MARTÍNEZ');
	incluirPresidente('LIC. EDUARDO HINOJOSA ESPINOSA');
	incluirPresidente('C.P. RICARDO GUZMÁN BENAVIDES');
	incluirPresidente('C.P. ALBERTO JORGE LOZANO LOZANO');
	incluirPresidente('LIC. JORGE GARZA SALINAS SALINAS');
	incluirPresidente('ING. RAFAEL EMILIO DÁVALOS VILLARREAL');
	incluirPresidente('PROFR. FROYLAN DE JESÚS GONZÁLEZ MEDELLIN');
	incluirPresidente('C.P. LUIS ALBERTO MANZANO EDDY');
	incluirPresidente('DR. CARLOS ABEL AMAYA GUERRA');
	incluirPresidente('LIC. RUBÉN LEAL GARZA');
	incluirPresidente('DR. CARLOS OLIVARES LEAL');
	incluirPresidente('C.P. HUMBERTO GUERRA GONZÁLEZ');
	incluirPresidente('PROFR. FROYLAN DE JESÚS GONZÁLEZ MEDELLIN');
	incluirPresidente('LIC. LUIS CARLOS MONTEMAYOR VELEZ');
	incluirPresidente('LIC. JOSÉ G. GARZA MORALES');
	incluirPresidente('ING. ROBERTO B. NAVA OLIVARES');
	incluirPresidente('C.P. HUMBERTO GUERRA GONZÁLEZ');
	incluirPresidente('LUIS. H. FLORES SALDAÑA');
	incluirPresidente('DR. CARLOS ABEL AMAYA GUERRA');
	incluirPresidente('ING. ROBERTO ARMANDO DE LA FUENTE GUERRA');
	incluirPresidente('LIC. MARTIN A. VEGA HERNANDEZ');
	incluirPresidente('Dr. JESUS SALVADRO ARTEAGA GARZA');
	incluirPresidente('LIC. JOSÉ G. GARZA MORALES');
	incluirPresidente('MA. GABRIEL ADRIÁN GONZÁLEZ AYALA');
}

/* Iniciar funciones */
const app = () => {
	navSlide();
	aparecerBoton();
};

app();
