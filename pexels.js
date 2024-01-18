//salvo la mia key per l'autenticazione e l'url api

const apiKey = 'GtnIedu6865oHKAFc8f7ECt9I5zAik2Dop1xWParewrFouKg0zXTnHhZ'
const myUrl = 'https://api.pexels.com/v1/search?query=animals'
//  seleziono il button load images

const primaryLoadButton = document.getElementById('load-images')


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
console.log('ricerca foto', photosObject)
const arrayImgTag = document.getElementsByTagName('img')
console.log(arrayImgTag)

for (let i = 0; i < arrayImgTag.length; i++) {
    
arrayImgTag[i].src = photosObject[i].src.tiny;
arrayImgTag[i].classList.add("img-fluid");

}


    
});
   
  })
  
        

