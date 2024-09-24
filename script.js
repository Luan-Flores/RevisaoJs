var itemCardSac = document.querySelectorAll(".card-sac");
itemCardSac.forEach(card =>{
    card.querySelector("button").addEventListener("click", function(){
        card.classList.toggle('ativo');
    });
})