function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
     msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12){
        // Bom dia!
        msg.src = 'manha1.png'
        document.body.style.background = '#F2DA04'
    } else if ( hora >= 12 && hora < 18) {
        // Boa Tarde!
        img.src = 'tarde1.png'
        document.body.style.background =  '#F6AB68'
    } else {
        // Boa Noite!
        img.src = 'noite1.png'
        document.body.style.background = '#03036C'
    }
    
}
