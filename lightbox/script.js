const thumbnails = document.querySelectorAll(".thumbnail");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


let currentImageIndex = 0;

function showImage(index){
    if(index < 0){
        currentImageIndex = thumbnails.length - 1;
    }
    else if(index >= thumbnails.length){
        currentImageIndex = 0;
    }
    else{
        currentImageIndex = index;
    }
    lightboxImg.src = thumbnails[currentImageIndex].src;
}

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", ()=>{
        currentImageIndex = index;
        lightbox.classList.add("active");
        lightboxImg.src = thumb.src;
    });
});

closeBtn.addEventListener("click", ()=>{
    lightbox.classList.remove("active");
});

prevBtn.addEventListener("click", ()=>{
    showImage(currentImageIndex - 1);
});

nextBtn.addEventListener("click", ()=>{
    showImage(currentImageIndex + 1);
});

