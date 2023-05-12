'use strict';

const inputUAH = document.querySelector('#uah'),
      inputUSD = document.querySelector('#usd');

inputUAH.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current1.json');
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = "Something went wrong";
        }
    });
});