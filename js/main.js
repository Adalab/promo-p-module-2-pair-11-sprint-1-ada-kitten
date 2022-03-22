"use strict";

const newForm = document.querySelector('.new-form');

newForm.classList.add('js-new-form')
newForm.classList.remove('collapsed');

const list = document.querySelector ('.list');

list.classList.add('.js-list');

//DATOS//

const kittenImage1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName1 = "anastacio";
const kittenDesc1 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace1 = "British Shorthair";

const kittenImage2 = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenName2 = "fiona";
const kittenDesc2 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace2 = "British Shorthair";

const kittenImage3 = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenName3 = "cielo";
const kittenDesc3 =
  "Ruiseño, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
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



const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'juguetón';
const descrSearchText = input_search_desc.value;
if( kittenDesc1.includes(descrSearchText) ) { list.innerHTML += kitten1;}
if( kittenDesc2.includes(descrSearchText) ) { list.innerHTML += kitten2;}
if( kittenDesc3.includes(descrSearchText) ) { list.innerHTML += kitten3;}
