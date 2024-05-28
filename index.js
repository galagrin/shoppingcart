const priceFirst = document.getElementById('priceFirst');
const priceSecond = document.getElementById('priceSecond');
const priceThird = document.getElementById('priceThird');
const priceForth = document.getElementById('priceForth');
const discountButton = document.getElementById('discountbutton');


const totalPrice = +priceFirst.innerHTML + +priceSecond.innerHTML + +priceThird.innerHTML+ +priceForth.innerHTML;
console.log(totalPrice);

const priceOutput = document.querySelector('.totalprice');
priceOutput.textContent = 'Итого: ' + totalPrice.toLocaleString('ru-RU')+ ' руб.'; 



function addDiscount (){
    const discountPrice = totalPrice * 0.8;
    priceOutput.textContent = 'Итого со скидкой: ' + discountPrice.toLocaleString('ru-RU')+ ' руб.'; 
};

discountButton.addEventListener ('click', addDiscount);
