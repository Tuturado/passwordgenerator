let bottom = document.getElementById("gerar");
let aleatorio;
let resultado = [];   
bottom.addEventListener("click", gerar_senha);
   

function gerar_senha(){
   for(let i=0; i<8;i++){
      maiusculeChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      minusculeChars = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      chars = ['@', '!', '#', '$', '%', '&', '*','-'];
      maiusculeAletory = maiusculeChars[Math.floor(Math.random()* maiusculeChars.length)];
      minusculeAleatory = minusculeChars[Math.floor(Math.random()* minusculeChars.length)];
      charsAleatory = chars[Math.floor(Math.random() *chars.length)];
      aleatorio = Math.random() * 9;
      resultado[i] = Math.floor(aleatorio);   
   }
   
   document.getElementById("senha").innerHTML = resultado.concat(maiusculeAletory).concat(minusculeAleatory).concat(charsAleatory).join('');
   
}
