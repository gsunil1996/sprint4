const jwellery = [
    {
        name: 'Gold set',
        brand: 'Gold One',
        picture: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/13/w1200X800/Gold_Jewellery_EPS.jpg',
        price: '100000',
    },

    {
        name: 'Gold bangles',
        brand: 'Gold two',
        picture: 'https://images.indianexpress.com/2020/05/gold-jewellery_1200-Copy.jpg',
        price: '10000',
    },

    {
        name: 'Gold Chain',
        brand: 'Gold three',
        picture: 'https://5.imimg.com/data5/EV/PQ/MY-13748354/gold-imitiation-necklace-set-500x500.jpg',
        price: '1000',
    },

    {
        name: 'Gold ring',
        brand: 'Gold four',
        picture: 'https://manubhai.in/SocialMedia/post_artworks/3103202109531020.jpg',
        price: '99999',
    },

    {
        name: 'Gold ear rings',
        brand: 'Gold five',
        picture: 'https://c.ndtvimg.com/2020-08/1dp5ha8o_gold-jewellery-unsplash_625x300_15_August_20.jpg',
        price: '99999',
    },

    {
        name: 'Gold chains set 2',
        brand: 'Gold six',
        picture: 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/2-Gold-Jewellery-Sets-with-Kada-o1.jpg',
        price: '9999',
    },

];

if (localStorage.getItem('jwellery') == null) {
    localStorage.setItem('jwellery', JSON.stringify('jwellery'));
}
function showStore(d) {
    let jwellery = d;
    let jwellery_div = document.getElementById("jwellery");
    jwellery_div.innerHTML = null;

    jwellery.forEach(function (el) {
        let div = document.createElement('div');

        let name = document.createElement('p');
        name.innerHTML = el.name;

        let price = document.createElement('p');
        price.innerHTML = el.price;

        let brand = document.createElement('p');
        brand.innerHTML = el.brand;

        let img = document.createElement('img');
        img.src = el.picture;

        let button = document.createElement('button');
        button.textContent = "Add to Cart";

        button.addEventListener('click', function () {
            addtocart(el);
        })

        button.style.display = "block";
        
        div.append(img, name, price, button, brand);

        jwellery_div.append(div);
    })
}
    showStore(JSON.parse(localStorage.getItem('jwellery')));

    function sortingLH() {
        let jewellery = JSON.parse(localStorage.getItem('jwellery'));
        jewellery = jewellery.sort(function (a, b) {
            return (a.price - b.price);
        });
        console.log('jwellery')
        showStore(jwellery);
    }
    function sortingHL() {
        let jewellery = JSON.parse(localStorage.getItem('jwellery'));
        jewellery = jewellery.sort(function (a, b) {
            return (b.price - a.price);
        });
        console.log('jwellery')
        showStore(jwellery);
    }