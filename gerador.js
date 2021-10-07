let bottom = document.getElementById("gerar");
bottom.addEventListener("click", function(e){
   e.preventDefault();
   gerarSenha();
});


let gerarSenha = () => {
   let aleatorio;
   let aux = []
   let resultado;
   let maiusculeChars;
   let minusculeChars;
   let chars;
   let maiusculeAletory;
   let minusculeAleatory;
   let charsAleatory;
   for (let i = 0; i < 8; i++) {
      maiusculeChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      minusculeChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      chars = ['@', '!', '#', '$', '%', '&', '*', '-'];
      maiusculeAletory = maiusculeChars[Math.floor(Math.random() * maiusculeChars.length)];
      minusculeAleatory = minusculeChars[Math.floor(Math.random() * minusculeChars.length)];
      charsAleatory = chars[Math.floor(Math.random() * chars.length)];
      aleatorio = Math.random() * 9;
      aux[i] = Math.floor(aleatorio);
   }

   return resultado=document.getElementById("senha").innerHTML = aux.concat(maiusculeAletory).concat(minusculeAleatory).concat(charsAleatory).join('');

}

