
/*Esto es para que se achique la barra */
const libro=document.getElementById("libro");
const navbarlateral=document.querySelector(".navbarlateral");
const spans=document.querySelectorAll("span"); /*Esto sera para que se oculte las palabra */
const palanca= document.querySelector(".switch");
const circulo= document.querySelector(".circulo");
const main=document.querySelector("main")



palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
});


libro.addEventListener("click",()=>{
    navbarlateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main")
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });

    
});

