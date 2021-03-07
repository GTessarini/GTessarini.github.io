
$(document).ready(function(){
    const cards = document.querySelectorAll(".card");    
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
            }else{
                sinopseContainer.classList.add("hidden");
            }
        });
    });
});