const input = document.querySelector(".search-input");

input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        event.preventDefault();

        let pesquisa = input.value.toLowerCase().trim();

        if(
            pesquisa === "fruta" ||
            pesquisa === "frutas"
        ){
            window.location.href = "sobreafruta.html";
        }

        else{
            alert("Página não encontrada.");
        }
    }
});

