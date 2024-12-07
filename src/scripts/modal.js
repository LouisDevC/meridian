// objeto para descrições
const descriptOfProd = {
    parceiros: {
        desc: 'Com o auxílio do baralho cigano, iremos analisar as energias do casal, identificando desafios e caminhos para fortalecer os vínculos e trazer harmonia para a relação. A consulta será enviada via áudio, fotos e texto!', 
        quests: [
            ' como está a energia do meu relacionamento?',
            'como meu parceiro está se sentindo?', 
            'como ele enxerga nossa relação?', 
            'quais são os obstáculos da relação?', 
            'quais são as tendências futuras?'
        ], 
        price: '20$', 
        ID:'parceiros'
    },
    ficantes: {
        desc: 'Descubra os caminhos desta conexão. Iremos analisar as intenções, perspectivas e possíveis desdobramentos da relação. A consulta será enviada via áudio, fotos e texto!', 
        quests: [
            'o que ele(a) sente por mim?', 
            'quais são suas verdadeiras intenções comigo?', 
            'o que ele(a) pensa em relação a mim?', 
            'quais são os obstáculos?', 
            'quais são as tendências futuras?',
            'qual é o conselho?',
        ], 
        price:'20$', 
        ID: 'ficantes'
    },
    solteiros: {
        desc: 'Revelamos as energias que envolvem sua vida afetiva, identificamos bloqueios e apontamos oportunidades para novos encontros e conexões. A consulta será enviada via áudio, fotos e texto!; ', 
        quests: [
            ' estou preparado(a) para um novo amor?',
            'o que preciso melhorar para atrair um novo relacionamento?', 
            'qual imagem eu passo para as pessoas com quem me relaciono?', 
            'já conheço a pessoa com quem irei me relacionar?',
            'o que me impede de encontrar alguém?'
        ], 
        price: '20$', 
        ID: 'solteiros'
    },

    ex: {
        desc: 'Avaliar possibilidade de reconciliação ou encerramento definitivo, trazendo orientação para seguir em paz. A consulta será enviada via áudio, fotos e texto!', 
        quests: [
            'o que meu(minha) ex sente por mim?', 
            'ele(a) vai me procurar?', 
            'quais são os obstáculos da relação?', 
            'como me posicionar?', 
            'quais são as tendências futuras?'
        ],
        price: '20$', 
        ID: 'ex'},

    loveGlass: {
        desc: 'Método ideal para quem está em relacionamento. Analisa o futuro próximo, bloqueios amorosos, obstáculos da relação e outros tópicos relacionados ao relacionamento. A consulta será enviada via áudio, fotos e texto!',
        quests: [
            ' como está o relacionamento?',
            'como devo agir?',
            'o que esperar do seu amor?',
            'quais são os pontos da relação que devem melhorar?',
            'quais são os pontos favoráveis da relação?',
            'qual é o futuro próximo e o aconselhamento necessário?',
        ],
        price: '25$', 
        ID: 'taça'
    },

    afrodite: {
        desc: 'Para analisar uma relação afetiva (namoro, ficantes, casamento) em seus aspectos mentais, emocionais e sexuais, e avaliar o possível resultado ou futuro desta união. A consulta será enviada via áudio, fotos e texto!', 
        quests: [
            ' o que cada um pensa da relação e quais são suas intenções?',
            ' quais sentimentos existem entre os dois?',
            'qual é o nível de atração física entre eles?',
            'qual é o possível resultado ou futuro desta união?',
        ], 
        price: '25$', 
        ID:'afrodite'
    },
    crush: {
        desc: 'Perfeito para analisar a energia de ficantes, relações em fase inicial ou até mesmo sentimentos de alguém que não sabe de sua existência romântica. A consulta será enviada via áudio, fotos e texto!', 
        quests: [
            'qual é a energia atual desta pessoa em relação a conexões amorosas?',
            'quais são os sentimentos do crush por mim?',
            'o que o crush pensa sobre mim?',
            'como essa pessoa percebe nossa interação?',
            'quais são os desejos ocultos ou inconscientes que o crush tem em relação a mim?',
            'quais obstáculos existem e qual o aconselhamento?'
        ], 
        price: '20$', 
        ID: 'crush'
    },
    work: {
        desc: 'Para saber a energia que está vibrando neste momento em sua área profissional.',
        quests: [
            'quem é você hoje profissionalmente?',
            'como você é visto no seu trabalho?',
            'quais são os obstáculos?',
            'quais são as tendências futuras?',
            'aconselhamento e direcionamento para o momento atual!'
        ], 
        price: '20$', 
        ID: 'profissional'
    },
    money: {
        desc: 'Método para análise financeira que revela seu estado atual, identifica bloqueios e prevê tendências para os próximos 2 meses.',
        quests: [
            'qual é o estado atual da minha vida financeira?',
            'quais são os principais bloqueios que impedem meu crescimento financeiro?',
            'o que favorece o meu progresso financeiro?',
            'qual é a tendência financeira para os próximos 2 meses?',
            'bônus: Conselho para sua área financeira'
        ], 
        price: '20$', 
        ID: 'financeira'
    },
    mensal: {
        desc: 'Para analisar as energias do mês (profissional, financeira, amorosa/sentimental).', 
        quests:[
            'o que trabalhar em mim neste mês?',
            'o que é necessário evitar?',
            'qual é a área que merece mais atenção?'
        ],
        price: '35$',
        ID: 'mensal'
    },
    key: {
        desc: 'Para auxiliar o consulente a enfrentar momentos de indecisão e obter esclarecimento sobre determinada situação.',
        quests: [
            'assunto principal',
            'O que motiva o consulente?',
            'quais são as influências externas na situação?',
            'riscos e perigos',
            'possíveis resultados',
        ],
        price: '25$',
        ID: 'chave'
    },
    complete: {
        desc:'Análise de tendências futuras e direcionamento para cada área: profissional, financeira e sentimental. Bônus: uma mensagem direcionada à área terapêutica/espiritual.',
        price: '45$',
        ID: 'completa'
    },
    terapy: {
        desc: 'Mais do que uma leitura oracular, a consulta terapêutica com o Baralho Cigano é um momento de autoconhecimento e orientação. Combinando métodos terapêuticos, holísticos e análise intuitiva, este atendimento oferece clareza sobre diversas questões, ajudando você a identificar bloqueios, superar desafios e alinhar-se ao seu propósito de vida. Cada consulta é conduzida com sensibilidade e seriedade, promovendo equilíbrio e bem-estar integral.', 
        price:'50$',
        ID: 'terapeutica'
    },
    loose: {
        desc: 'Perguntas claras e objetivas: 1, 3 ou 5 perguntas (sujeito à alteração dos valores de acordo com a quantidade de perguntas).', 
        price: 'max: 18$', 
        ID: 'avulsas'
    },

    star: {
        desc: 'Para descobrir nuances da personalidade de alguém que conheceu há pouco tempo, o Jogo da Estrela é uma tiragem especial que utiliza 5 cartas dispostas em formato de estrela, onde cada posição revela aspectos únicos e profundos da pessoa em questão. Esta leitura pode ser aplicada para analisar relações recentes, como amizade, paqueras ou relacionamentos precoces, trazendo à tona insights valiosos sobre a verdadeira essência e os sentimentos dessa pessoa.', 
        price: '15$', 
        ID: 'estrela'
    },
    caridade: {
        desc:'Leitura focada em uma área específica da vida (amorosa, profissional ou financeira) para ajudar a trazer clareza e direcionamento em momentos importantes. Também pode ser usada para presentear um amigo ou ente querido', 
        price: 'gratuito', 
        ID: 'caridade'
    }
}
// variáveis
const allServices = document.querySelectorAll('.service') // para abrir e fechar modal
const modal = document.querySelector('#modal')
// para textos do modal
const titleModal = document.querySelector('#title-modal')
const modalImage = document.querySelector('#modal-image')
const descModal = document.querySelector('#desc-modal')
const price = document.querySelector('#price')
const questContainer = document.querySelector('#quest')
const questTitle = document.querySelector('.quest-title')
// para fechar o modal
const closeBtn = document.querySelector('#close-btn')
// funções
const FindService = (receivedText) =>{
    for(let item in descriptOfProd){
        const serviceItems = descriptOfProd[item]
        if(receivedText.toLowerCase().includes(serviceItems.ID.toLowerCase())){
            const filteredServices = {desc: serviceItems.desc, price: serviceItems.price, quests: serviceItems.quests}
            return filteredServices
        }
    }
}
const MakeModal = (card) =>{
    const cardImage = card.querySelector('img')
    const cardText = card.querySelector('p')

    const title = cardText.textContent
    titleModal.textContent = title
    modalImage.src = cardImage.src
    const serviceObj = FindService(title)
    descModal.innerHTML = serviceObj.desc
    price.textContent = serviceObj.price
    questContainer.innerHTML = ''
    if(!serviceObj.quests){
        const listItemNone = document.createElement('h4')
        listItemNone.textContent = 'perguntas reservadas ao consulente!'
        questTitle.innerHTML = ''
        questTitle.appendChild(listItemNone)
    }else{
        serviceObj.quests.forEach(quest => {
            const listItems = document.createElement('li')
            listItems.textContent = quest
            questContainer.appendChild(listItems)
        })
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
closeBtn.addEventListener('click', () =>{
    document.body.classList.remove('open')
        modal.classList.add('closed')
})