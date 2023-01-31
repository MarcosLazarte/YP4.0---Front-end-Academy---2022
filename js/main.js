
function colorAleatorio(){  /*La idea es poder entregar un color diferente en cada llamada, para así, generar un
                            boton que cambie aleatoriamente los colores de los elementos en pantalla*/
    let valorMax = 0xFFFFFF;                    //Establecemos el valor max que puede tomar los colores
    let randomNum = Math.random() * valorMax;   //Retorna un numero aleatorio "floating-point" 
    randomNum = Math.floor(randomNum);          //Convertimos el numero "floating-point" a un entero
    randomNum = randomNum.toString(16);         //Convernitos el numero a uno hexagecimal
    randomNum = randomNum.padStart(6, 0);
    randomNum = randomNum.toUpperCase();
    let randColor = `#${randomNum}`;            //Nos aseguramos que sea de un largo de 6

    return randColor;
}

function charlemos(){
    let fondo = document.getElementById("bodyID");
    let foot = document.getElementById("footerID")
    fondo.style.background = 'linear-gradient('+colorAleatorio()+', '+colorAleatorio()+', '+colorAleatorio()+')';
}

const observer = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {
  console.log(entry);
  if(entry.isIntersecting){
   entry.target.classList.add('show');
  } else {
   entry.target.classList.remove('show');
  }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const contactame_form = document.getElementById("contactame_form");


contactame_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const contactame_nombre = contactame_form['contactame_nombre'].value;
    const contactame_email = contactame_form['contactame_email'].value;
    const contactame_mensaje = contactame_form['contactame_mensaje'].value;
    /*
    const mensaje = await db.collection("mensajes").doc().set({
        nombre: contactame_nombre,
        email: contactame_email,
        mensaje: contactame_mensaje
    })*/
    db.collection("mensajes").add({
        nombre: contactame_nombre,
        email: contactame_email,
        mensaje: contactame_mensaje
    })
    .then((docRef) => {
        console.log("Documento con el ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error al agregar el documento: ", error);
    });
    document.getElementById("contactame_sombra").classList.add('contactame_aparecer-sombra');
    document.getElementById("contactame_alert").classList.add('contactame_aparecer-cartel');
    document.getElementById('bodyID').classList.add('stop')
})

function contactame_cerrar(){
    document.getElementById("contactame_sombra").classList.remove('contactame_aparecer-sombra');
    document.getElementById("contactame_alert").classList.remove('contactame_aparecer-cartel');
    document.getElementById("bodyID").classList.remove("stop");
}