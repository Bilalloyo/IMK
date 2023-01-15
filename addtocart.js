const product = [
    {
      id: 1,
      image: "image/AIRJORDAN3.jpg",
      title: "Air Jordan",
      price: 3600000,
    },
    {
      id: 2,
      image: "image/AIRJORDANDIOR.jpg",
      title: "Air Jordan Dior",
      price: 282000000,
    },
    {
      id: 3,
      image: "image/NIKEAIRFORCE107.jpg",
      title: "Nike Air Force 1 07",
      price: 1400000,
    },
    {
      id: 4,
      image: "image/LEPTOPALIENWARE.jpg",
      title: "Leptop Alienware New 8th",
      price: 62000000,
    },
    {
      id: 5,
      image: "image/LEPTOPRAZER.jpg",
      title: "Leptop Razer",
      price: 86000000,
    },
    {
      id: 6,
      image: "image/SendalBata.jpg",
      title: "Sendal Bata (Brown)",
      price: 187000,
    },
    {
      id: 7,
      image: "image/VARSITYJACKETMIZUNO.jpg",
      title: "Varsity Jacket Mizuno",
      price: 250000,
    },
    {
      id: 8,
      image: "image/VARSITYJACKETBRAVEEFFECT.jpg",
      title: "Varsity Jacket Brave Effect",
      price: 200000,
    },
  ];
  const categories = [...new Set(product.map((item) => 
    {return item}))]
    let i=0;

document.getElementById('root').innerHTML = categories.map((item)=>
{
    var{image, title, price} = item;
    return(
        `<div class='box'>
            <div class="img-box">
             <img src=${image}></img>
        </div>
        <div class='left'>
        <p>${title}</p>
        <h2>Rp.${price.toLocaleString()},00</h2>` +
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>    
        </div>`
    )
}).join('')

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j=0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rp."+0+",00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rp."+total.toLocaleString()+",00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>Rp.${price.toLocaleString()},00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}

