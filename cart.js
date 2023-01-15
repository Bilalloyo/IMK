const product = [
    {
        id: 1,
        image: 'image/AIRJORDAN3.jpg',
        title: 'Air Jordan',
        price: 'Rp.3.600.000'
    },
    {
        id: 2,
        image: 'image/AIRJORDANDIOR.jpg',
        title: 'Air Jordan Dior',
        price: 'Rp.‎282.000.000'
    },
    {
        id: 3,
        image: 'image/NIKEAIRFORCE107.jpg',
        title: 'Nike Air Force 1 07',
        price: 'Rp.1.400.000'
    },
    {
        id: 4,
        image: 'image/LEPTOPALIENWARE.jpg',
        title: 'Leptop Alienware New 8th',
        price: 'Rp.62.000.000'
    },
    {
        id: 5,
        image: 'image/LEPTOPRAZER.jpg',
        title: 'Leptop Razer',
        price: 'Rp.86.000.000'
    },
    {
        id: 6,
        image: 'image/SendalBata.jpg',
        title: 'Sendal Bata (Brown)',
        price: 'Rp.187.000.00'
    },
    {
        id: 7,
        image: 'image/VARSITYJACKETMIZUNO.jpg',
        title: 'Varsity Jacket Mizuno',
        price: 'Rp.250.000.00'
    },
    {
        id: 8,
        image: 'image/VARSITYJACKETBRAVEEFFECT.jpg',
        title: 'Varsity Jacket Brave Effect',
        price: 'Rp.200.000.00'
    },
]
const categories = [...new set(product.map((item)=>
    {return item}))]

let cart = document.getElementById('root')
cart.innerHTML = categries.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class="box">
            <div class="img-box">
                <img src=${image}></i>
            </div>
            <div class="left">
                <p>${title}</p>
                <h2>${price}</h2>
                <button?Add to Cart</button>
            </div>
        </div>`
    )
}).join('')