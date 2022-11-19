

// hora AO // 

setInterval(()=>/*criando uma funcao*/{

    // criando vars para chamar os enderecos para exibir o tempo
    let horas = document.querySelector('#horas');
    let minutos = document.querySelector('#minutos');
    let segundos = document.querySelector('#segundos');

    const data = new Date(); // criando o objeto data

    hr = data.getHours(); // chamando a hora do pc
    min = data.getMinutes(); // chamando os minutos do pc
    sec = data.getSeconds(); // chamando os segundos do pc

    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    
    horas.textContent = hr;
    segundos.textContent = sec;
    minutos.textContent = min;

})