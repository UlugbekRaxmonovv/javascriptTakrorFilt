let products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: "30",
            img: "https://www.alcissports.com/cdn/shop/products/AAMTRASM00016202-1.jpg?v=1650285115"
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "49",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/3/b33b6a1ALRSS511FPB_1.jpg?rnd=20200526195200&tr=w-512"
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            img: "https://i.ebayimg.com/images/g/DI8AAOSww-ZlONQH/s-l1200.jpg"
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "29",
            img: "https://www.alcissports.com/cdn/shop/products/AAMTRASM00060602_2.jpg?v=1677827341"
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "145",
            img: "https://media-assets.grailed.com/prd/listing/temp/c4547091ce6e4dd8ae1469daaa224f8a?"
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Bottomwear",
            price: "89",
            img: "https://www.alcissports.com/cdn/shop/products/AAMTRASM00038402_1.jpg?v=1662717484"
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "159",
            img: "https://m.media-amazon.com/images/I/718kn0mMV0L._AC_SR175,263_.jpg"
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: "175",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_0PLc2gK0dgWXTHGUJWac8xJs3z-DhBhATAII-Uf5x-PH7A1mQZTpdCXrpdBzfxSUdiY&usqp=CAU"
        },
    ],
};

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    let imgContent = document.createElement("div");
    imgContent.classList.add("img-container");
    let img = document.createElement("img");
    img.setAttribute("src", i.img);
    imgContent.appendChild(img);
    card.appendChild(imgContent);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h3");
    name.classList.add("product_name");
    name.textContent = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("p");
    price.classList.add("price");
    price.textContent = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll('.button_value');
    buttons.forEach(button => {
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value === "all") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchValue = document.getElementById("search_input").value.toUpperCase();
    let elements = document.querySelectorAll(".product_name");
    let cards = document.querySelectorAll('.card');
    elements.forEach((element, index) => {
        if (element.innerText.includes(searchValue)) {
            cards[index].classList.remove('hide');
        } else {
            cards[index].classList.add('hide');
        }
    });
});

window.onload = () => {
    filterProduct("all");
};