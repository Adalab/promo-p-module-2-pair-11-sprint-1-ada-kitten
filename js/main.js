"use strict";

const newForm = document.querySelector('.new-form');

newForm.classList.add('js-new-form')
newForm.classList.remove('collapsed');

const list = document.querySelector ('.list');

list.classList.add('.js-list');

//DATOS//

const kittenImage1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName1 = "Anastacio";
const kittenDesc1 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace1 = "British Shorthair";

const kittenImage2 = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenName2 = "Fiona";
const kittenDesc2 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace2 = "British Shorthair";

const kittenImage3 = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenName3 = "Cielo";
const kittenDesc3 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace3 = "British Shorthair";

//ESTRUCTURA TARJETA//

const kitten1 = `<li class="card">
<article> <img  class="card_img"   src="${kittenImage1}"    alt="gatito"  /> 
<h3 class="card_title">${kittenName1}</h3>  
<h4 class="card_race">${kittenRace1}</h4>  
<p class="card_description">    ${kittenDesc1} </p>
</article></li>` 

const kitten2 = `<li class="card">
<article> <img  class="card_img"   src="${kittenImage2}"    alt="gatito"  /> 
<h3 class="card_title">${kittenName2}</h3>  
<h4 class="card_race">${kittenRace2}</h4>  
<p class="card_description">    ${kittenDesc2} </p>
</article></li>` 


const kitten3 = `<li class="card">
<article> <img  class="card_img"   src="${kittenImage3}"    alt="gatito"  /> 
<h3 class="card_title">${kittenName3}</h3>  
<h4 class="card_race">${kittenRace3}</h4>  
<p class="card_description">    ${kittenDesc3} </p>
</article></li>` 

list.innerHTML += kitten1;
list.innerHTML += kitten2;
list.innerHTML += kitten3;


