function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    var minutes = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutes} hora(s) `
    if(hora>=0 && hora <12){
        //dia
        imagem.src = manha.png
        document.body.style.background = '#e2cd9f'
        }else if(hora >=12 && hora<18){
        //tarde
        imagem.src = tarde.png
        document.body.style,background = ''
    }else{
        //noite
        imagem.src = noite.png
    }
}