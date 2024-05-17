
// Tableau contenant des objets (partie de la source de l'image & slogan lié à la diapo)
// ************************************************************************************
//  (Il est possible d'ajouter ou supprimer des diapos directement dans le tableau sans modification du code).

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


// Création de l'élement image
// ***************************
// Création d'un élément image auquel on ajoute une classe, une source et "alt"
// Ajout de l'élément créé en tant qu'enfant de la div ayant pour id "banner"

function imageContainerCreate() {
	let img = document.createElement("img")
	img.classList.add("banner-img")
	img.alt = "Banner Print-it"
	img.src = ""
	document.getElementById("banner").appendChild(img)
}


// Création des élements points en fonction du nombre de diapos de manière dynamique
// *********************************************************************************
// Création d'une boucle permettant de créer un nombre de points équivalent au nombre de diapos
// Ajout des éléments créés en tant qu'enfants de la div ayant pour classe "dots"

function bulletsCreate(slides) {
	for (let indexTableauSlides = 0; indexTableauSlides < slides.length; indexTableauSlides++) {
		let dot = document.createElement("div")
		dot.classList.add("dot")
		document.querySelector("#banner .dots").appendChild(dot)
	}
}


// Fonction qui permet d'afficher la diapo en fonction de son index
// ****************************************************************
// Récupération de l'élément "img" du DOM (emplacement pour la diapo)
// Modification de l'attribut source de l'image dynamiquement en fonction de l'index de la diapo

function slideDisplay(slides, indexTableauSlides) {
	let bannerImage = document.querySelector(".banner-img")
	bannerImage.src = "assets/images/slideshow/" + slides[indexTableauSlides].image
}


// Fonction qui permet d'afficher le slogan lié à la diapo
// ********************************************************
// Récupération de l'élément "p" du DOM (emplacement pour le slogan)
// Ajout du slogan de la diapo dans la balise "p" dynamiquement en fonction de l'index de la diapo

function tagLineDisplay(slides, indexTableauSlides) {
	let tagLine = document.querySelector("#banner p")
	tagLine.innerHTML = slides[indexTableauSlides].tagLine
}


// Fonction qui permet de selectionner le point lié à la diapo
// ***********************************************************
// Récupération de l'ensemble des éléments "dot" du DOM  (bullets)
// Ajout dynamique de la classe "dot_selected" au "bullet" en fonction de l'index de la diapo, 
// afin de visualiser où on se situe dans le diaporama du carrousel

function bulletSelect(indexTableauSlides) {
	let bullet = document.querySelectorAll(".dots div")
	bullet[indexTableauSlides].classList.add("dot_selected")
}


//  Fonction qui réinitialise les points (permet qu'ils soient tous déselectionnées)
// **********************************************************************************
// Récupération de l'ensemble des éléments "dot" du DOM  (bullets)
// Création d'une boucle "for" pour supprimer la classe "dot_selected" de chaque "bullet"

function bulletsReset() {
	let bullet = document.querySelectorAll(".dots div")
	for (let compteur = 0; compteur < bullet.length; compteur++) {
		bullet[compteur].classList.remove("dot_selected")
	}
}


// Initialisation et appel de fonctions
// ************************************

indexTableauSlides = 0
imageContainerCreate()
bulletsCreate(slides)
slideDisplay(slides, indexTableauSlides)
tagLineDisplay(slides, indexTableauSlides)
bulletSelect(indexTableauSlides)


//  Gestion de l'évènement "click" sur les flèches de navigation du carrousel
// **************************************************************************

// Fonction principale du carrousel permettant la gestion des "click"
// """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// Appel de la fonction qui permet de déselectionner tous les points
// Structure conditionnelle prenant en compte les cas particuliers des deux boutons flèches afin d'avoir un carrousel qui boucle à l'infini
// Appel des fonctions permettant respectivement l'affichage de la diapo, l'affichage du slogan et la selection du point ; 
// le tout en fonction de l'index du tableau

function onArrowClick(id) {
	bulletsReset()
	if (id == "arrow_left") {
		indexTableauSlides--
		if (indexTableauSlides === -1) {
			indexTableauSlides = slides.length - 1
		}
	} else {
		indexTableauSlides++
		if (indexTableauSlides === slides.length) {
			indexTableauSlides = 0
		}
	}
	slideDisplay(slides, indexTableauSlides)
	tagLineDisplay(slides, indexTableauSlides)
	bulletSelect(indexTableauSlides)
}


// Gestion du "click" sur la flèche gauche en appelant la fonction "onArrowClick (id)"
// """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// Récupération de l'élément du DOM "img" (flèche gauche)
// Ajout d'un écouteur au clic sur la flèche gauche pour récupéré l'id de l'évènement qui vient de se dérouler 
// Application de la fonction principale qui prend en compte l'id récupéré

let arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", (event) => {
	onArrowClick(event.target.id)
})


// Gestion du "click" sur la flèche droite en appelant la fonction "onArrowClick (id)"
// """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener("click", (event) => {
	onArrowClick(event.target.id)
})

