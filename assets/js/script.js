const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.efecto'); // .nav-list li
	const menuAbierto = document.querySelectorAll('.efecto')[1];
	const subMenu = document.querySelectorAll('.sub-menu ul')[0];

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

// Boton para ir arriba
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

aparecerBoton();

scrollBtn.addEventListener('click', () => {
	document.documentElement.scrollTop = 0;
});

document.addEventListener('scroll', (e) => {
	aparecerBoton();
});

const app = () => {
	navSlide();
};

app();
