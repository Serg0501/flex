/*
1. Создайте 10 параграфов и первым трем дайте класс Выделенный текст, 
который выделяет текст например фоном.
*/

let testP = document.createElement('p');
testP.className = 'highlightedText';
testP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing.';
document.body.append(testP);

let testP1 = document.createElement('p');
testP1.className = 'highlightedText';
testP1.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing.';
document.body.append(testP1);

let testP2 = document.createElement('p');
testP2.className = 'highlightedText';
testP2.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing.';
document.body.append(testP2);

let testP3 = document.createElement('p');
testP3.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing.';
document.body.append(testP3);

let testP4 = document.createElement('p');
testP4.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing.';
document.body.append(testP4);

let testP5 = document.createElement('p');
testP5.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing.';
document.body.append(testP5);

let textDecor = document.querySelectorAll('p.highlightedText');

textDecor.forEach((el) => {
   el.style.background = 'blue',el.style.color = 'yellow'; 
});

//2. Создайте список. В каждый элемент списка напишите текст свой, например дни недели или цвета радуги.
//2* выделите каждый элемент списка случайным цветом поменяв ему цвет текста или фон


function liContent() {
    let result = [];

    for(let i=1; i<=7; i++) {
    let li = document.createElement('li');
    li.append(i);
    result.push(li);
  }
  result.forEach((el, i) => {
    el.style.background = 'grey';
    if (i==0) el.innerText = 'Monday', el.style.color = 'blue';
    if (i==1) el.innerText = 'Tuesday', el.style.color = 'yellow';
    if (i==2) el.innerText = 'Wednesday', el.style.color = 'green';
    if (i==3) el.innerText = 'Thursday', el.style.color = 'black';
    if (i==4) el.innerText = 'Friday', el.style.color = 'silver';
    if (i==5) el.innerText = 'Saturday', el.style.color = 'gold';
    if (i==6) el.innerText = 'Sanday', el.style.color = 'aqua';
  })
  return result;
}
task2.append(...liContent());

/*
3* по просьбе трудящихся :)
объект Товара (название, цена, другие характеристики ...) создайте карточку
*/

const product = {
    img: '#',
    title: 'Pasta',
    description: {
        weight:'weight: 500gr',
        price:'price: 0.85 euro',
        producing:'producing country: Italy',
    }
};

function createProductImage(productImageSrc){
    const imgCont = document.createElement('div');
    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', productImageSrc);
    imgProduct.setAttribute('alt', 'photo');
    imgCont.append(imgProduct);
    return imgCont;
};

function createTitleProduct(title){
    const cardTitleProduct = document.createElement('p');
    cardTitleProduct.classList.add('prodTitle');
    cardTitleProduct.innerText = title;
    return cardTitleProduct;
}

function createDescriptionCont(descriptions){
    const descriptionCont = document.createElement('div');
    descriptionCont.classList.add('descrCont');
    descriptionCont.innerText = 'description:';
//weight
    const description1 = document.createElement('p');
    description1.classList.add('weight');
    description1.innerText = product.description.weight;
    descriptionCont.append(description1);
//price
    const description2 = document.createElement('p');
    description2.classList.add('descrCont','price');
    description2.innerText = product.description.price;
    descriptionCont.append(description2);
//producing
    const description3 = document.createElement('p');
    description3.classList.add('descrCont','producing');
    description3.innerText = product.description.producing;
    descriptionCont.append(description3);

    return descriptionCont;
};

function createCard (objectCard){
    const card = document.createElement('div');
    card.classList.add('cardCont');
    card.append(createProductImage(objectCard.imgSrc));

    const cardInformation = document.createElement('div');
    cardInformation.classList.add('infoCont');
    cardInformation.append(createTitleProduct(objectCard.title));
    cardInformation.append(createDescriptionCont(objectCard.descriptions));

    card.append(cardInformation);
    return card;
};

const prodCard = document.getElementById('productCardCont');
prodCard.append(createCard(product));


