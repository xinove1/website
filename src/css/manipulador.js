function NOMEAR() {
    var nome = document.getElementById("nome").value;
    var snome = document.getElementById("snome").value;
    var nomecompleto = document.getElementById('resultado').innerHTML = nome + " " + snome;
    var resultado = nomecompleto.bold()
   
    if (nome == snome) {
        window.alert("Nome inválido")
        document.getElementById('resultado').innerHTML = " ";
        document.getElementById('nome').value = " ";
        document.getElementById('snome').value = " ";
      } 
      else {
        document.getElementById('resultado').innerHTML = nome + " " + snome;
        document.getElementById('resultado').style.color = "red" ;
        document.getElementById('resultado').style.fontSize = "10";
        document.getElementById('resultado').style.fontWeight = "bold";
        document.getElementById('resultado').innerHTML = resultado
      }
    }

function RENOMEAR() {
    var nome = document.getElementById("nome").value;
    var snome = document.getElementById("snome").value;
    if (nome == snome) {
        window.alert("Nome inválido")
        document.getElementById('resultado').innerHTML = " ";
        document.getElementById('nome').value = " ";
        document.getElementById('snome').value = " ";
      } 
      else {
        document.getElementById('resultado').innerHTML = snome + "," + " " + nome;
        document.getElementById('resultado').style.color = "green";
        document.getElementById('resultado').style.fontSize = "14";
        document.getElementById('resultado').style.fontStyle = "italic";
      }   
}

function AUMENTAR() {
  document.getElementById('imagem').style.width = "150";
  document.getElementById('imagem').style.height = "150";
}

function DIMINUIR() {
  document.getElementById('imagem').style.width = "100";
  document.getElementById('imagem').style.height = "100";
}

function AZUL() {
  document.getElementById('resultado').style.color = "blue";
}

function AVISO() {
  window.alert("AVATAR SELECIONADO");
}

function trocar() {
  location.assign('/');
}