     const checkboxpraia = document.getElementById("check1")
     const checkboxmontanha = document.getElementById("check2")
     const checkboxneve = document.getElementById("check3")
  
     const campo2 = document.getElementById("campo2")
     const campo = document.getElementById("campo")

     const campo3 = document.getElementById("campo3")
 
    function atualizar(){
    if(checkboxpraia.checked  ){
      campo.style.display = "block"
    }
     else{
      campo.style.display = "none"

    }
    if(checkboxmontanha.checked){
    campo2.style.display = "block"

    }
    else{
      campo2.style.display = "none"
    }

    if(checkboxneve.checked){
      campo3.style.display= "block"
    }
    else{
      campo3.style.display = "none"
    }
    };

    checkboxmontanha.addEventListener("change", atualizar);
    checkboxpraia.addEventListener("change", atualizar)
    checkboxneve.addEventListener("change", atualizar )

    window.onload = atualizar;