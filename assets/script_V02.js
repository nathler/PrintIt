const slides = [
	["slide1.jpg","Impressions tous formats <span>en boutique et en ligne</span>"],
	["slide2.jpg","Tirages haute définition grand format <span>pour vos bureaux et events</span>"],	
	["slide3.jpg","Grand choix de couleurs <span>de CMJN aux pantones</span>"],	
	["slide4.jpg","Autocollants <span>avec découpe laser sur mesure</span>"]
	];

let recupBannerImage = document.querySelector(".banner-img");
let ouMettreTexte = document.querySelector ("#banner p");
//console.log(recupTexteImage + " ligne 11"); 
let currentIndex = 0;

const dots = document.querySelector(".dots");

let  gauche =document.querySelector(".arrow_left");

gauche.addEventListener("click", function() {
console.log("vous avez cliqué sur le bouton gauche");

if(currentIndex >-3){
   currentIndex--;
   miseAjourSlideG();
}
else {
	currentIndex = 0;
	recupBannerImage.src = `./assets/images/slideshow/${slides[currentIndex][0]}`;	
	let recupTexte = `${slides[currentIndex][1]}`;
	ouMettreTexte.innerHTML = recupTexte; 
}
});

let droite = document.querySelector(".arrow_right");
droite.addEventListener("click",() => {

if(currentIndex <3){
	 currentIndex++;
	 console.log(currentIndex);
     miseAjourSlideD();
}
else {
	
	recupBannerImage.src = `./assets/images/slideshow/${slides[0][0]}`;	
	let recupTexte = `${slides[0][1]}`;
	ouMettreTexte.innerHTML = recupTexte; 
}
});

function miseAjourSlideG(){
	recupBannerImage.src = `./assets/images/slideshow/${slides[-currentIndex][0]}`;
	let recupTexte = `${slides[-currentIndex][1]}`;
	ouMettreTexte.innerHTML = recupTexte; 
}

function miseAjourSlideD(){

	recupBannerImage.src = `./assets/images/slideshow/${slides[currentIndex][0]}`;
	let recupTexte = `${slides[currentIndex][1]}`;
	ouMettreTexte.innerHTML = recupTexte; 
	}

