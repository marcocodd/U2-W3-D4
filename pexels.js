//salvo la mia key per l'autenticazione e l'url api

const apiKey = 'GtnIedu6865oHKAFc8f7ECt9I5zAik2Dop1xWParewrFouKg0zXTnHhZ'
const myUrl = 'https://api.pexels.com/v1/search?query=animals'
//  seleziono i bottoni che mi serviranno

const primaryLoadButton = document.getElementById('load-images')
const editButton = document.getElementsByClassName('btn-outline-secondary')
console.log(editButton)
primaryLoadButton.addEventListener('click', function () {
    // Effettua una richiesta API a Pexels
    fetch(myUrl, {
      headers: {
        Authorization: apiKey,
      },
    })
    .then((response) => {
       
        console.log('response', response)
        if (response.ok) {
          
          return response.json()
        } else {
          // 
          throw new Error('errore nella chiamata')
        }
      })
      .then((data) =>{
        
const photosObject = data.photos

const arrayImgTag = document.getElementsByTagName("img");

console.log(photosObject);
for (let i = 0; i < arrayImgTag.length; i++) {
 arrayImgTag[i].src = photosObject[i].src.tiny;
}

for (let i = 0; i < editButton.length; i++) {

if(i % 2 !== 0)
    editButton[i].textContent = 'Hide';
   }
    
});

    
});

  
  
        

