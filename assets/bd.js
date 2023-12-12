const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const dots = document.querySelector(".dots");

let gauche=document.querySelector(".arrow_left");
gauche.addEventListener("click", function() {
console.log("vous avez cliqué sur le bouton gauche")
});

let droite=document.querySelector(".arrow_right");
droite.addEventListener("click",() => {
console.log("vous avez cliqué sur le bouton droit")
});
// initialisation des 4 points sous l'immage correspondant au nombre d'éléments dans le tableau
//
for(let i = 0; i < slides.length; i++){
	dots.innerHTML += '<span id="dot' + i + '" class="dot" title="Image ' + (i + 1) + '"></span>';
}
function miseAjourSlide(){
	recupBannerImage = document.querySelector(".banner-img");
	recupTexteImage = document.querySelector (".banner p")

}