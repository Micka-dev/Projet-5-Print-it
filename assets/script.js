// Tableau contenant des objets (partie de la source de l'image & texte lié à la slide)
// ************************************************************************************

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration des variables et initialisation
// *******************************************

let i = 0
slidesDisplay(slides)
tagLineDisplay(slides)
bulletsSelect()

// Fonction qui permet d'afficher la diapo en fonction de son index
// ****************************************************************

function slidesDisplay(slides) {
	let bannerImage = document.querySelector(".banner-img")
	bannerImage.src = "assets/images/slideshow/" + slides[i].image
}

// Fonction qui permet d'afficher le slogan lié à la diapo
// ********************************************************

function tagLineDisplay(slides) {
	let tagLine = document.querySelector("#banner p")
	tagLine.innerHTML = slides[i].tagLine
}

// Fonction qui permet de selectionner le point lié à la diapo
// **********************************************************

function bulletsSelect() {
	let bullet = document.querySelectorAll(".dots div")
	bullet[i].classList.add("dot_selected")
}

//  Fonction qui réinitialise les points (permet qu'ils soient tous déselectionnées)
// **********************************************************************************

function resetBullets() {
	let bullet = document.querySelectorAll(".dots div")
	for (j = 0; j < bullet.length; j++) {
		let bullet = document.querySelectorAll(".dots div")
		bullet[j].classList.remove("dot_selected")
	}
}

//  Navigation au clic sur la flèche gauche
// *****************************************

let arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", () => {
	resetBullets()
	if (i === 0) {
		i = 3
		slidesDisplay(slides)
		tagLineDisplay(slides)
		bulletsSelect()
	} else {
		resetBullets()
		i--
		slidesDisplay(slides)
		tagLineDisplay(slides)
		bulletsSelect()
	}
}
)

//  Navigation au clic sur la flèche droite
// *****************************************

let arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener("click", () => {
	resetBullets()
	if (i === 3) {
		i = 0
		slidesDisplay(slides)
		tagLineDisplay(slides)
		bulletsSelect()
	} else {
		resetBullets()
		i++
		slidesDisplay(slides)
		tagLineDisplay(slides)
		bulletsSelect()
	}
}
)
