const slides = [
	["slide1.jpg","Impressions tous formats <span>en boutique et en ligne</span>"],
	["slide2.jpg","Tirages haute définition grand format <span>pour vos bureaux et events</span>"],	
	["slide3.jpg","Grand choix de couleurs <span>de CMJN aux pantones</span>"],	
	["slide4.jpg","Autocollants <span>avec découpe laser sur mesure</span>"]
	];

let recupBannerImage = document.querySelector(".banner-img");
console.log(recupBannerImage); 
//let recupTexteImage = document.querySelector (".banner p");
let currentIndex = 0;

const dots = document.querySelector(".dots");

let gauche=document.querySelector(".arrow_left");
gauche.addEventListener("click", function() {
console.log("vous avez cliqué sur le bouton gauche");
currentIndex--;
if(currentIndex <0){
	currentIndex = slides.length - 1;
}
miseAjourSlide();

});

let droite=document.querySelector(".arrow_right");
droite.addEventListener("click",() => {
console.log("vous avez cliqué sur le bouton droit");
currentIndex++;
miseAjourSlide()
});
// initialisation des 4 points sous l'immage correspondant au nombre d'éléments dans le tableau
//
//for(let i = 0; i < slides.length; i++){
//	dots.innerHTML += '<span id="dot' + i + '" class="dot" title="Image ' + (i + 1) + '"></span>'; }


function miseAjourSlide(){
	
	recupBannerImage.src = `./assets/images/slideshow/${slides[currentIndex][0]}`;
    	//<img class="banner-img" id="slide1" src="./assets/images/slideshow/slide1.jpg" alt="Banner Print-it">
	
    
	
}

