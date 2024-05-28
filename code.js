function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 6       //Forçar hora!
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 5 && hora < 12){
        //manha
        img.src = 'manha.jpg'
        document.body.style.background = '#FFE25B'
    }
     else if(hora >= 12 && hora < 19){
        //tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#5DD449'
    }
    else{
        //noite
        img.src = 'noite.jpg'
        document.body.style.background = '#3C3286'
    }
}
