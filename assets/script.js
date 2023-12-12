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

let  gauche = document.querySelector(".arrow_left");

// initialisation des 4 points sous l'immage correspondant au nombre d'éléments dans le tableau
for(let i = 0; i < slides.length; i++){
	dots.innerHTML += '<span id="dot' + i + '" class="dot" title="Image ' + (i + 1) + '"></span>'; }

	
let recupBalisePoints = document.getElementById("dot0");
recupBalisePoints.classList.add("dot_selected"); 

gauche.addEventListener("click", function() {
if(currentIndex >-3){
    console.log("ligne 27 " + currentIndex);
	currentIndex--;
	console.log("ligne 29 " + currentIndex);
   let recupBalisePoints = document.getElementById("dot" + (- currentIndex) );
	recupBalisePoints.classList.add("dot_selected"); 
	recupBalisePoints = document.getElementById("dot"+ (-currentIndex-1));
	recupBalisePoints.classList.remove("dot_selected"); 
    miseAjourSlideG(); 
}

else {
	retourPointDepart ()
	currentIndex = 0;
	miseAjourSlideG();	
}
});

let droite = document.querySelector(".arrow_right");
droite.addEventListener("click",() => {

if(currentIndex < 3){
    currentIndex++;
	let recupBalisePoints = document.getElementById("dot"+currentIndex);
	recupBalisePoints.classList.add("dot_selected"); 
	recupBalisePoints = document.getElementById("dot"+ (currentIndex-1));
	recupBalisePoints.classList.remove("dot_selected"); 
	miseAjourSlideG();
}
else {
	retourPointDepart ()
	currentIndex = 0;
	miseAjourSlideD();
	
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

function retourPointDepart () {
	recupBalisePoints = document.getElementById("dot"+ 3);
	recupBalisePoints.classList.remove("dot_selected"); 
	recupBalisePoints = document.getElementById("dot"+ 0);
	recupBalisePoints.classList.add("dot_selected"); 	
}