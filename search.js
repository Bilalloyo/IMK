const product=[
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
]
const categories = [...new Set(product.map((item) => { return item }))]

        document.getElementById('searchBar').addEventListener('keyup', (e) => {
            const searchData = e.target.value.toLowerCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.title.toLowerCase().includes(searchData)
                )
            })
            displayItem(filteredData)
        });

        const displayItem = (items) => {
            document.getElementById('root').innerHTML = items.map((item) => {
                var { image, title, price } = item;
                return (
                    `<div class='box'>
                        <div class='img-box'>
                            <img class='images' src=${image}></img>
                        </div> 
                        <div class='bottom'>
                            <p>${title}</p>
                            <h2>$ ${price}.00</h2>
                        <button>Add to cart</button>
                        </div>
                    </div>`
                )
            }).join('')
        };
        displayItem(categories);