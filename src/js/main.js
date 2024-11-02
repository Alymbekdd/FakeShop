let allProducts = document.querySelector(".allProducts");
let allJewel = document.querySelector(".allTovars");
let allClothings = document.querySelector(".allClothings");
let allWomen = document.querySelector(".allWomen");
let main = document.querySelector(".main");
let tovar = document.querySelector(".card")
export let cat = [];

const app = async () => {
    fetch('https://fakestoreapi.com/products/category')
        .then(res => res.json())
        .then((data) => {

        });

};



function card() {
    // Вызов категории Элоктроники
    fetch(`https://fakestoreapi.com/products/category/electronics`)
    .then(res => res.json())
    .then((data) => {
console.log(data)

        allProducts.innerHTML = ""
        data.map((el, idx) => {
            allProducts.innerHTML += `
            <div class="card">
                   <img class="img"
                    src=${el.image}
                    alt="foto">
                <div class="items">
                   <div>
                      <p class="title"><span>называние:</span> ${el.title.substring(0, 25)}</p>
                      <p class="price"><span>цена:</span> ${el.price}</p>
                      <p class="category"><span>категория:</span> ${el.category}</p>
                   </div>
                   <div class="btns">
                        <button class="kup">купить</button>
                        <button class="podrobno podrobnee">Подробнее</button>
                   </div>
                </div>
            </div>
                `
        });

        let kup = document.querySelectorAll(".kup")
        let podrobno = document.querySelectorAll(".podrobno");
    
    
        kup.forEach((el, idx) => {
            el.addEventListener("click", function () {
                cat.push(data[idx])
                console.log(cat)
                localStorage.setItem("obj", JSON.stringify({ cat }))
    
            })
        })
    
    
    
    
        podrobno.forEach((el, idx) => {
            el.addEventListener("click", function () {
                // console.log("sddsd")
                pod(data[idx].id)
            })
        })
    

    });

};

function jewelery() {
    // Вызов категории Ювелерные изделья

    fetch(`https://fakestoreapi.com/products/category/jewelery`)
    .then(res => res.json())
    .then((data) => {


        allJewel.innerHTML = ""
        data.map((el, idx) => {
            allJewel.innerHTML += `
            <div class="card">
                   <img class="img"
                    src=${el.image}
                    alt="foto">
                <div class="items">
                   <div>
                      <p class="title"><span>называние:</span> ${el.title.substring(0, 25)}</p>
                      <p class="price"><span>цена:</span> ${el.price}</p>
                      <p class="category"><span>категория:</span> ${el.category}</p>
                   </div>
                   <div class="btns">
                        <button class="buy">купить</button>
                        <button class="podrobnoc podrobnee">Подробнее</button>
                   </div>
                </div>
            </div>
                `
        });

        let buy = document.querySelectorAll(".buy")
        let podrobnoc = document.querySelectorAll(".podrobnoc");
    
    
        buy.forEach((el, idx) => {
            el.addEventListener("click", function () {
                cat.push(data[idx])
                console.log(cat)
                localStorage.setItem("obj", JSON.stringify({ cat }))
    
            })
        })
    
    
    
    
        podrobnoc.forEach((el, idx) => {
            el.addEventListener("click", function () {
                // console.log("sddsd")
             pod(data[idx].id)


            })
        })
    

    });
};

function men() {
    // Вызов категории Ювелерные изделья

    fetch(`https://fakestoreapi.com/products/category/men's clothing`)
    .then(res => res.json())
    .then((data) => {


        allClothings.innerHTML = ""
        data.map((el, idx) => {
            allClothings.innerHTML += `
            <div class="card">
                   <img class="img"
                    src=${el.image}
                    alt="foto">
                <div class="items">
                   <div>
                      <p class="title"><span>называние:</span> ${el.title.substring(0, 25)}</p>
                      <p class="price"><span>цена:</span> ${el.price}</p>
                      <p class="category"><span>категория:</span> ${el.category}</p>
                   </div>
                   <div class="btns">
                        <button class="bay">купить</button>
                        <button class="podrobnone podrobnee">Подробнее</button>
                   </div>
                </div>
            </div>
                `
        });

        let bay = document.querySelectorAll(".bay")
        let podrobnone = document.querySelectorAll(".podrobnone");
    
    
        bay.forEach((el, idx) => {
            el.addEventListener("click", function () {
                cat.push(data[idx])
                console.log(cat)
                localStorage.setItem("obj", JSON.stringify({ cat }))
    
            })
        })
    
    
    
    
        podrobnone.forEach((el, idx) => {
            el.addEventListener("click", function () {
                // console.log("sddsd")
             pod(data[idx].id)


            })
        })
    

    });
};

function women() {
    // Вызов категории Ювелерные изделья

    fetch(`https://fakestoreapi.com/products/category/women's clothing`)
    .then(res => res.json())
    .then((data) => {


        allWomen.innerHTML = ""
        data.map((el, idx) => {
            allWomen.innerHTML += `
            <div class="card">
                   <img class="img"
                    src=${el.image}
                    alt="foto">
                <div class="items">
                   <div>
                      <p class="title"><span>называние:</span> ${el.title.substring(0, 15)}</p>
                      <p class="price"><span>цена:</span> ${el.price}</p>
                      <p class="category"><span>категория:</span> ${el.category}</p>
                   </div>
                   <div class="btns">
                        <button class="kupit">купить</button>
                        <button class="podrobnos podrobnee">Подробнее</button>
                   </div>
                </div>
            </div>
                `
        });

        let kupit = document.querySelectorAll(".kupit")
        let podrobnos = document.querySelectorAll(".podrobnos");
    
    
        kupit.forEach((el, idx) => {
            el.addEventListener("click", function () {
                cat.push(data[idx])
                console.log(cat)
                localStorage.setItem("obj", JSON.stringify({ cat }))
    
            })
        })
    
    
    
    
        podrobnos.forEach((el, idx) => {
            el.addEventListener("click", function () {
                // console.log("sddsd")
             pod(data[idx].id)


            })
        })
    

    });
};



function pod(num) {
    fetch(`https://fakestoreapi.com/products/${num}`)
        .then(res => res.json())
        .then((item) => {
           main.innerHTML = ""
            console.log(item)
           main.innerHTML += `
         <section class="home">
            <div class="container">
                <div class="allProducts">
                               <div class="carding">
                    <img class="img"  src=${item.image}
                        alt="photo">
                    <div class="input">
                      <div>
                        <p class="title"><span>название:</span> ${(item.title).substring(0,25)}</p>
                        <p class="description"><span>описание:</span> ${item.description}$</p>
                        <p class="price"><span>цена:</span> ${item.price}$</p>
                        <p class="category"><span>котегория:</span>${item.category}</p>          
                        </div>
                        <div class="btns">
                            <button class="kypit">Купить</button> 
                            <button class="back"><a href="./index.html">Назад</a></button>                                                
                        </div>
                    </div>
                </div>   
                </div>
            </div>
        </section>
             `

             let kypit = document.querySelector(".kypit");
             
             
                 kypit.addEventListener("click", function(){
                     cat.push(item)
                     console.log(cat)
                     localStorage.setItem("obj", JSON.stringify({ cat }))
                 })
          

        });

        

};


card();
jewelery();
men();
women();
app();



