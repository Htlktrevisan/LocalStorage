function enviar(){
    let numero = document.getElementById("numero").value 

    localStorage.setItem("numero", numero) 
    alert("Numero armazenado")
    
}