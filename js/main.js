"use strict";
//primeros ejercicios (añadir clase)
const list = document.querySelector ('.list');
list.classList.add('.js-list');

//formulario que se mostrará o no dependiendo del click:
const newForm = document.querySelector('.js-new-form');
const plusBtn = document.querySelector('.fa-plus-circle');

plusBtn.addEventListener('click', ()=>{
  newForm.classList.toggle ("collapsed");
});



//DATOS//

const kittenImage1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName1 = "anastacio";
const kittenDesc1 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace1 = "";

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

list.innerHTML += kitten1;
list.innerHTML += kitten2;
list.innerHTML += kitten3;

/* EJERICIO 22/3: condicional que muestra a los gatitos si en su descripción se muestra el valor "juguetón"
const inputSearchDesc = document.querySelector('.js_in_search_desc');
inputSearchDesc.value = 'juguetón';
const descrSearchText = inputSearchDesc.value;
if( kittenDesc1.includes(descrSearchText) ) 
  { list.innerHTML += kitten1;}
if( kittenDesc2.includes(descrSearchText) ) 
  { list.innerHTML += kitten2;}
if( kittenDesc3.includes(descrSearchText) ) 
  { list.innerHTML += kitten3;} */

  //Valida la información de las razas, si el gatito no tiene la raza especificada mostraremos el mensaje No se ha especificado la raza. Para ello verifica si la raza tienen algún valor, y en dependencia del resultado de la comprobación muestra un mensaje o la raza si existe.

  if (kittenRace3 === "") {
    list.innerHTML += `<h3 class='card_race'>No se ha especificado la raza</h3>`;} 

    //FORMULARIO NUEVO GATITO: validar el caso de que la usuaria le dé clic al botón Añadir y no haya rellenado lo valores de la foto, nombre y descripción de manera obligatoria, la raza no es un campo obligatorio a insertar.

    const addButton = document.querySelector('.js-btn-add');

      const inputDesc = document.querySelector(".js-input-desc");
      const inputPhoto = document.querySelector(".js-input-photo");
      const inputName = document.querySelector(".js-input-name");
      const inputRace = document.querySelector(".js-input-race");
      const labelMesageError = document.querySelector(".js-label-error");

    addButton.addEventListener('click', ()=>{
      const valueDesc = inputDesc.value;
      const valuePhoto = inputPhoto.value;
      const valueName = inputName.value;
      const valueRace = inputRace.value;
      
      if (valueDesc === "" && valuePhoto === "" && valueName === "" && valueRace === "") {
        //completa el código
        event.preventDefault();
        console.log("hola");
    
      } else {
        //completa el código
        labelMesageError.innerHTML="Debe rellenar todos los valores";
      }
    });

 //Validar formulario búsqueda. En este ejercicio vamos a validar el caso de que la usuaria le dé clic al botón Buscar y no haya rellenado alguno de los valores a buscar
    const inputSearchDesc = document.querySelector('.js_in_search_desc');
    const inputSearchRace = document.querySelector('.js_in_search_race');
    const searchButton = document.querySelector('.js-search-btn')

    searchButton.addEventListener('click', ()=>{
      const valueDesc2 = inputSearchDesc.value;
      const valueRace2 = inputSearchRace.value;
      if (valueDesc2 === "" && valueRace2 === "") {
        //completa el código
        event.preventDefault();
        console.log("hola");
      }
    });