const serviceContainer = document.querySelectorAll('.services');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const allService = document.querySelectorAll('.service');
const allServicesSearchParams = document.querySelectorAll('.service p');

// Função para retornar todos os serviços
const ReturnAllServices = () => {
    serviceContainer.forEach(container => container.innerHTML = ''); // Limpar contêineres
    allService.forEach(service => {
        if (service.innerText.includes('heiki')) {
            serviceContainer[1].innerHTML += service.outerHTML;
        } else {
            serviceContainer[0].innerHTML += service.outerHTML;
        }
    });
}

// Função para filtrar os serviços
const ServiceFilter = (param) => {
    if (!param) return;
    serviceContainer.forEach(container => container.innerHTML = '');
    allService.forEach(service => {
        if (service.innerText.toLowerCase().includes(param.toLowerCase())) {
            if (service.innerText.includes('heiki')) {
                serviceContainer[1].innerHTML += service.outerHTML;
            } else {
                serviceContainer[0].innerHTML += service.outerHTML;
            }
        }
    });
}

// Eventos
searchInput.addEventListener('keyup', () => {
    const search = searchInput.value;
    if (!search) {
        ReturnAllServices();
    } else {
        ServiceFilter(search);
    }
});

searchBtn.addEventListener('click', () => {
    const search = searchInput.value;
    if (!search) return;
    ServiceFilter(search);
});

// Inicializar com todos os serviços
ReturnAllServices();
