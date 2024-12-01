const allImages = document.querySelectorAll('.slide');
let cont = 0; 
const imageBtn = document.querySelectorAll('.image-btn')

function showNextImage() { 
    cont++; 
    if (cont === allImages.length) { 
        cont = 0; 
    } 
    allImages.forEach((img) => { 
        img.style.transform = `translateX(${-cont * 100}%)`; 
    }); 
} setInterval(showNextImage, 7000);

imageBtn.forEach((btn, index) =>{
    btn.addEventListener('click', ()=>{
            allImages.forEach(img => { 
                img.style.transform = `translateX(${-index * 100}%)`; 
            }); 
    })
})