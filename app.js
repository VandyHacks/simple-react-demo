import React from 'react';
import { render } from 'react-dom';

const renderPrice = price =>
    render(
        <h1>The current price of Bitcoin is ${price}</h1>,
        document.getElementById('app')
    );

const displayPrice = () =>
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(res => renderPrice(res.bpi.USD.rate));

displayPrice();
setInterval(displayPrice, 3000);
