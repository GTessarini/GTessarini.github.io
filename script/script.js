
$(document).ready(function(){
    const cards = document.querySelectorAll(".card-link");    
    cards.forEach(function(card){
       card.addEventListener("click", function(event){
            event.preventDefault();
            const section = card.getAttribute("data-value");  
            $('html, body').animate({
                scrollTop: document.querySelector(`#${section}`).offsetTop
            }, 600, function(){         
              window.location.hash = section;
            });            
        });
    });
    const btnsSinopse = document.querySelectorAll(".btn-ler-sinopse");
    btnsSinopse.forEach(function(btnSinopse){
        btnSinopse.addEventListener("click", function(event){
            event.preventDefault();
            const sinopse = btnSinopse.getAttribute("data-value");  
            const sinopseContainer = document.querySelector(`div.sinopse-container[data-value="${sinopse}"]`);
            if(sinopseContainer.classList.contains("hidden")){
                sinopseContainer.classList.remove("hidden");
                btnSinopse.textContent = "Ocultar sinopse";
            }else{
                sinopseContainer.classList.add("hidden");
                btnSinopse.textContent = "Ler sinopse";
            }            
        });
    });
    const btnVerArtigos = document.querySelector("#btn-ver-artigos");
    btnVerArtigos.addEventListener("click", function(event){
        event.preventDefault();
        const artigosContainer = document.querySelector(`div.ver-artigos-container`);
        artigosContainer.classList.remove("hidden");
        btnVerArtigos.classList.add("hidden");    
        document.querySelector(`.ver-artigos-titulo`).classList.remove("hidden");   
    });

    //Slide
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(slideNumber) {
        let cont;
        let slides = document.getElementsByClassName("socialSlides");
        let dots = document.getElementsByClassName("dot");
        if (slideNumber> slides.length) {
            slideIndex = 1;
        }
        if (slideNumber< 1) {
            slideIndex = slides.length;
        }
        for (cont = 0; cont < slides.length; cont++) {
            slides[cont].style.display = "none";
        }
        for (cont = 0; cont < dots.length; cont++) {
            dots[cont].className = dots[cont].className.replace(" active", "");
        }
        if(slides[slideIndex-1] && dots[slideIndex-1]){
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        }
    }

    const btnSlidesSocialPrev = document.querySelector("section#dizem #btn-slides-social-prev");
    const btnSlidesSocialNext = document.querySelector("section#dizem #btn-slides-social-next");
    btnSlidesSocialPrev.addEventListener("click", function(event){
        event.preventDefault();
        plusSlides(-1);
    });
    btnSlidesSocialNext.addEventListener("click", function(event){
        event.preventDefault();
        plusSlides(1);
    });
    const currentSlideDot = document.querySelectorAll("section#dizem .social-slides-dot");
    for(let cont = 0; cont < currentSlideDot.length; cont++){
        currentSlideDot[cont].addEventListener("click", function(event){
            event.preventDefault();
            currentSlide(cont+1);
        });
    }
});
/* Gabriel Tessarini */
