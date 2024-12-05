// objeto para descrições
const descriptOfProd = {
    parceiros: {desc: 'Com auxílio do baralho cigano iremos analizar as energias do casal, IDentificando desafios, e caminhos para fortalecer os vínculos e trazer armonia para a relação. neste jogo teremos as seguintes perguntas: - como está a energia do meu relacionamento?; - como meu parceiro está se sentindo?; - como ele enxerga nossa relação?; - obstáculos da relação! - tendências futuras!; A consulta será enviado via audio, fotos e texto!', price: '20$', ID:'parceiros'},
    ficantes: {desc: 'Descubra os caminhos desta conexão, iremos análisar as intensões, perspectiva e posssíveis desdobramentos da relação. neste jogo teremos as seguintes perguntas: - o que ele(a) sente por mim?; - quais são suas verdadeiras intensões comigo?; - O que ele(a) pensa em relação a mim? - obstáculos! - tendências futuras!; - conselho;A consulta será enviado via áudio, fotos e texto!', price:'20$', ID: 'ficantes'},
    solteiros: {desc: 'Revelamos as energias que envolvem sua vIDa afetiva, IDentificamos bloqueeios e apontamos oportunIDades para novos encontros e conexões. neste jogo teremos as seguintes perguntas: - estou preparado(a) para um novo amor?; - O quepreciso melhorar para atrair um novo relacionamento?; - qual a imagem que eu passo para as pessoas com quem me relaciono?; - já conheço a pessoa que irei me relacionar?; - O que me impede de encontrar alguém? A consulta será enviado via áudio, fotos e texto!; ', price: '20$', ID: 'solteiros'},
    ex: {desc: 'Avaliar possibilIDade de reconciliação, ou encerramento definitivo trazendo orientação para seguir em paz. neste jogo teremos as seguintes perguntas: - o que meu(minha) ex sente por mim?; - ele(a) vai me procurar?; - obstáculos da relação!; - como me posicionar!; - tendências futuras! A consulta será enviado via áudio, fotos e texto!', price: '20$', ID: 'ex'},
    loveGlass: {desc: 'Método IDeal para quem está em relacionamento. Futuro próximo e distante, amor, bloqueeios amorosos e obstáculos da relação. neste jogo teremos as seguintes perguntas:', price: '25$'},
    afrodite: {desc: '', price: '25$', ID:'taça'},
    crush: {desc: '', price: '20$', ID: 'crush'},
    work: {desc: '', price: '20$', ID: 'profissional'},
    money: {desc: '', price: '20$', ID: 'financeira'},
    mensal: {desc: '', price: '35$', ID: 'mensal'},
    key: {desc: '', price: '25$', ID: 'chave'},
    complete: {desc:'', price: '45$', ID: 'completa'},
    terapy: {desc: '', price:'50$', ID: 'terapeutica'},
    loose: {desc: '', price: '4$', ID: 'avulsas'},
    star: {desc: '', price: '15$', ID: 'estrela'},
    caridade: {desc:'', price: 'gratuito', ID: 'caridade'}
}
// variáveis
const allServices = document.querySelectorAll('.service') // para abrir e fechar modal
const modal = document.querySelector('#modal')
// para textos do modal
const titleModal = document.querySelector('#title-modal')
const modalImage = document.querySelector('#modal-image')
const price = document.querySelector('#price')
// funções
const forEachInID = () =>{
    // descriptOfProd.forEach(itemOfService =>{
    //     console.log(itemOfService)
    // })
}
const MakeModal = (card) =>{
    const cardImage = card.querySelector('img')
    const cardText = card.querySelector('p')
    console.log(cardImage, cardText)
    titleModal.textContent = cardText.textContent
    modalImage.src = cardImage.src
    if(titleModal.textContent.includes(forEachInID())){

    }
}
// eventos
allServices.forEach(service =>{
    service.addEventListener('click', () =>{
        MakeModal(service)
        document.body.classList.add('open')
        modal.classList.remove('closed')
    })
})