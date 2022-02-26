const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal__listaTweet")


function pegarTweet(event){
event.preventDefault();
const tweetTextarea = textarea.value;
//console.log( tweetTextarea)
criarTweet(tweetTextarea)
}
 tweetar .addEventListener('click', pegarTweet)

 function criarTweet(tweetTexto) { 

  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();

  //objeto

  const tweet= {
      nome: "zaida",
      foto: "./assets/img/perfil.png",
      usuario: "@zaidacueto",
      texto: tweetTexto,
      tempo:  ` ${hora}:${minutos}`
  }  
    listarTweet(tweet) 
}
  


    function listarTweet(tweet){

        const {nome,foto,usuario,texto,tempo} = tweet
     
    //criando elementos para listar o templete
        let li = document.createElement("li")
        li.classList.add("conteudoPrincipal__tweets")
        let img = document.createElement("img")
        img.src = foto
        img.classList.add("tweet__fotoPerfil")
        
        let div = document.createElement("div")
        div.classList.add("tweed__conteudo")
        let h2 = document.createElement("h2")
        h2.innerText = nome
        let span = document.createElement("span")
        span.innerText    =     `${usuario}     - ${tempo}`
        let p = document.createElement("p")
        p.innerText = texto
        console.log(li)
        // criando elemetos dentro da div  
        div.appendChild(h2)
        div.appendChild(span)
        div.appendChild(p)
         //adicionando elementos dentro da li

        li.appendChild(img)
        li.appendChild(div)
       feed.appendChild(li)
    }
    
  