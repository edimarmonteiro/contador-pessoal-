//CONFIGURAÇÂO DA ENERGIA
function leiaMais(){
   var pontos = document.getElementById('pontos');
   var maisTexto = document.getElementById('mais');
   var butleimais = document.getElementById('butleimais');

   //IF = para ocutar ou mostra o texto
   /*Se na animação/CSS PONTOS estiver a tivado o
   DISPLAY:NOME; segue as informações */
   if(pontos.style.display === 'none'){
    //se o texto estiver ocuto, ao clicar coloque em linhas
    pontos.style.display = 'inline';
    maisTexto.style.display = 'none';
    butleimais.innerHTML = 'Leia Mais';
   } else{
    /*se o texto estiver em linhas(grande), ao
    clicar coloque ocuto(pequeno)*/
    pontos.style.display = 'none';
    maisTexto.style.display = 'inline';
    butleimais.innerHTML = 'Leia Menos';
   }
}

//CONFIGURAÇÂO DA ÀGUA
function leiaMaisAgua(){
   var pontos_agua = document.getElementById('pontos_agua');
   var maisTexto_agua = document.getElementById('mais_agua');
   var butleimais_agua = document.getElementById('butleimais_agua');

   //IF = para ocutar ou mostra o texto
   /*Se na animação/CSS PONTOS estiver a tivado o
   DISPLAY:NOME; segue as informações */
   if(pontos_agua.style.display === 'none'){
    //se o texto estiver ocuto, ao clicar coloque em linhas
    pontos_agua.style.display = 'inline';
    maisTexto_agua.style.display = 'none';
    butleimais_agua.innerHTML = 'Leia Mais';
   } else{
    /*se o texto estiver em linhas(grande), ao
    clicar coloque ocuto(pequeno)*/
    pontos_agua.style.display = 'none';
    maisTexto_agua.style.display = 'inline';
    butleimais_agua.innerHTML = 'Leia Menos';
   }
}

//CONFIGURAÇÂO GÀS
function leiaMaisGas(){
   var pontos_gas = document.getElementById('pontos_gas');
   var maisTexto_gas = document.getElementById('mais_gas');
   var butleimais_gas = document.getElementById('butleimais_gas');

   //IF = para ocutar ou mostra o texto
   /*Se na animação/CSS PONTOS estiver a tivado o
   DISPLAY:NOME; segue as informações */
   if(pontos_gas.style.display === 'none'){
    //se o texto estiver ocuto, ao clicar coloque em linhas
    pontos_gas.style.display = 'inline';
    maisTexto_gas.style.display = 'none';
    butleimais_gas.innerHTML = 'Leia Mais';
   } else {
    /*se o texto estiver em linhas(grande), ao
    clicar coloque ocuto(pequeno)*/
    pontos_gas.style.display = 'none';
    maisTexto_gas.style.display = 'inline';
    butleimais_gas.innerHTML = 'Leia Menos';
   }
}
