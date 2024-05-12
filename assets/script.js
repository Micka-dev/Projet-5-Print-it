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

const bullets = [
	{
		"dot": "dot_selected"
	},
	{
		"dot": "_selected"
	},
	{
		"3": "dot_selected"
	},
	{
		"4": "dot_selected"
	}
]


let i = 0

let bannerImage = document.querySelector(".banner-img")
bannerImage.src = "assets/images/slideshow/" + slides[i].image

let tagLine = document.querySelector("#banner p")
tagLine.innerHTML = slides[i].tagLine

// console.log(bullet [i])  // j'arrive à selectionner chaque point
// console.log(bullet)  // j'arrive à selectionner tous les points


// bullet.classList.add("dot_selected")

/////////
//  fonction qui réinitialise les bullets (permet qu'ils soient tous déselectionnées)
function resetBullets() {
	let bullet = document.querySelectorAll(".dots div")
	for (j = 0; j < bullet.length; j++) {
		let bullet = document.querySelectorAll(".dots div")
		bullet[j].classList.remove("dot_selected")
	}
}

//////////
resetBullets()

let bullet = document.querySelectorAll(".dots div")
bullet[i].classList.add("dot_selected")


// let point = bullet [i]
// point.classList.add("photo")
// console.log(bullet[i])
// bullets[i].classList.add("dot_selected")

// let bullet = document.querySelector(".dot2")
// bullet.class = "dot"+ bullets[2].dot



let arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", () => {
	console.log(i)
	if (i === 0) {
		bannerImage.src = "assets/images/slideshow/" + slides[3].image
		tagLine.innerHTML = slides[3].tagLine
		i = 3
	} else {
		i--
		bannerImage.src = "assets/images/slideshow/" + slides[i].image
		tagLine.innerHTML = slides[i].tagLine
	}
}
)

let arrowRight = document.querySelector(".arrow_right")
// console.log(arrowRight)
arrowRight.addEventListener("click", () => {
	console.log(i)
	if (i === 3) {
		bannerImage.src = "assets/images/slideshow/" + slides[0].image
		tagLine.innerHTML = slides[0].tagLine
		i = 0
	} else {
		i++
		bannerImage.src = "assets/images/slideshow/" + slides[i].image
		tagLine.innerHTML = slides[i].tagLine
	}
}
)
