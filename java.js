const textos = [
 "Benja",
 "Mica",
 "Male",
 "Papá",
 "Mamá"
  ];

  let textoAnterior = "";

  function generarTexto() {
    let textoAleatorio = obtenerTextoAleatorio();
    
   
    document.getElementById("randomText").innerText = textoAleatorio;


    textoAnterior = textoAleatorio;
  }

  function obtenerTextoAleatorio() {
    let textoAleatorio = textoAnterior;

   
    while (textoAleatorio === textoAnterior) {
      const indiceAleatorio = Math.floor(Math.random() * textos.length);
      textoAleatorio = textos[indiceAleatorio];
    }

    return textoAleatorio;
  }