
// Tableau contenant des objets (partie de la source de l'image & texte lié à la slide) Il est possible d'ajouter ou supprimer des slides sans modification du code.
// *****************************************************************************************************************************************************************

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
// Obligé de retapé la div <div id="banner"> en entier car ça écrase le contenu !

let img = `
	<img class = "banner-img" src="" alt= "Banner Print-it">
	<p><</p> 													   
	<div class="dots">
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
	</div>
	<img class=" arrow arrow_left" src="assets/images/arrow_left.png" alt="image d'une flèche de navigation gauche">
	<img class=" arrow arrow_right" src="assets/images/arrow_right.png" alt="image d'une flèche de navigation droite">
` 
document.getElementById("banner").innerHTML = img

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Autre méthode
// *************
// let img = document.createElement("img")						
// img.classList.add("banner-img")
// img.alt = "Banner Print-it"
// img.src = ""
// img.classList.add("banner-img")
// document.getElementById("banner").appendChild(img)			  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Déclaration des variables et initialisation
// *******************************************

let i = 0
slidesDisplay(slides)
tagLineDisplay(slides)
bulletsSelect()

// Fonction qui permet d'afficher la diapo en fonction de son index
// ****************************************************************

function slidesDisplay(slides) {
	let bannerImage = document.querySelector(".banner-img")		   // Récupération de l'élément du DOM "img" (diapo)
	bannerImage.src = "assets/images/slideshow/" + slides[i].image // Modification de l'attribut source de l'image dynamiquement en fonction de l'index de la diapo
}

// Fonction qui permet d'afficher le slogan lié à la diapo
// ********************************************************

function tagLineDisplay(slides) {
	let tagLine = document.querySelector("#banner p")				// Récupération de l'élément du DOM "p" (slogan)
	tagLine.innerHTML = slides[i].tagLine							// Ajout du slogan de la diapo dans la balise "p" dynamiquement en fonction de l'index de la diapo
}

// Fonction qui permet de selectionner le point lié à la diapo
// **********************************************************

function bulletsSelect() {
	let bullet = document.querySelectorAll(".dots div")				// Récupération de l'ensemble des éléments DOM "dot" (bullets)
	bullet[i].classList.add("dot_selected")							// Ajout dynamique de la classe "dot_selected" au "bullet" en fonction de son index et de la diapo
}

//  Fonction qui réinitialise les points (permet qu'ils soient tous déselectionnées)
// **********************************************************************************

function resetBullets() {
	let bullet = document.querySelectorAll(".dots div")				// Récupération de l'ensemble des éléments DOM "dot" (bullets)
	for (j = 0; j < bullet.length; j++) {							// Création d'une boucle "for" pour supprimer la classe "dot_selected" de chaque "bullet"
		bullet[j].classList.remove("dot_selected")
	}
}

//  Navigation au clic sur la flèche gauche
// *****************************************
																	
let arrowLeft = document.querySelector(".arrow_left")				// Récupération de l'élément du DOM "img" (flèche gauche)
arrowLeft.addEventListener("click", () => {							// Ajout d'un écouteur au clic sur la flèche gauche
	resetBullets()													// Appel de la fonction qui permet de déselectionner les points
	i--																// Incrémentation (négative) permettant de passer d'une diapo à l'autre dans le bonne ordre
	if (i === -1) {													// Structure conditionnelle permettant d'appeler les différentes fonctions dans l'ordre et de gérer le cas particulier pour que le carrousel boucle à l'infini :
		i = slides.length-1	}										// Comme il n'y a pas de diapo avant la 1ère on passe à la dernière (il y a 4 diapos : la 1érè a pour indice 0 et la dernière 3)
		slidesDisplay(slides)										// Appel de la fonction qui permet d'afficher la diapo
		tagLineDisplay(slides)										// Appel de la fonction qui permet d'afficher le slogan
		bulletsSelect()												// Appel de la fonction qui permet de sélectionner le point
}
)

//  Navigation au clic sur la flèche droite
// *****************************************

let arrowRight = document.querySelector(".arrow_right")				// Idem
arrowRight.addEventListener("click", () => {
	resetBullets()
	i++
	if (i === slides.length ) {										// Comme il n'y a pas de diapo après la 4ème on retourne à zéro
		i = 0	}													// "slides.length" => Permet de prendre en compte l'ensemble des diapos et le fait que l'index d'un tableau commence à [0]
		slidesDisplay(slides)										// Il y a 4 diapos, la dernière a pour index 3 ; du coup à l'index 4 on retourne à l'index 0
		tagLineDisplay(slides)
		bulletsSelect()
}
)
