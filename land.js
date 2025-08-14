document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(data);//adiciona linha para verificar os dados no console

    fetch('SEU ENDEREÇO DO SCRIPT D PLANILHA', {
        method: 'POST',
        body: new URLSearchParams(data)
    })
    
});