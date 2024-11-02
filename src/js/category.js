let allProducts = document.querySelector('.allProducts-category');
let bt = document.querySelector(".btns");
let card = document.querySelector(".cards-category");
import { cat } from "../js/main.js"
console.log(cat)

const app = async () => {
    await fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then((data) => {
            console.log(data)

            bt.innerHTML = ""
            names(data)

            let btns = document.querySelectorAll('.btn');

            btns.forEach((el, idx) => {
                el.addEventListener("click", function () {
                    cot(data[idx])
                })
                cot("electronics" || data[idx])
            })


        })
};


function names(arry) {
    if (arry) {
        arry.map((el, idx) => {
            bt.innerHTML += `
    <button class="btn">
       ${el
                    == "electronics" ? "Электроника" : ''
                        || el == "jewelery" ? "Ювелирные изделья" : ''
                            || el == "men's clothing" ? "Мужская одежда" : ''
                                || el == "women's clothing" ? "Женская одежда" : ''

                }</button>
             `
        })
    } else { }

};


function cot(item) {
    fetch(`https://fakestoreapi.com/products/category/${item}`)
        .then(res => res.json())
        .then((item) => {


            card.innerHTML = ""
            item.map((el, idx) => {
                card.innerHTML += `
        <div class="card">
            <img class="img" src=${el.image}
                alt="photo">
            <div class="tipe">
              <div>
                <p class="title"><span>название:</span> ${(el.title).substring(0, 15)}</p>
                <p class="price"><span>цена:</span> ${el.price}$</p>
                <p class="category"><span>котегория:</span>${el.category}</p>
              </div>
                <div class="btns">
                <button class="buying">Купить</button>                               
                <button class="podrobno podrobnee">Подробнее</button>
                     
                </div>
            </div>
        </div>   
     `
            })


            let buy = document.querySelectorAll('.buying');

            buy.forEach((el, idx) => {
                el.addEventListener("click", function () {
                    cat.push(item[idx])
                    console.log(cat)
                    localStorage.setItem("obj", JSON.stringify({ cat }))
                })
            })

            let podrobno = document.querySelectorAll(".podrobno");

            podrobno.forEach((el, idx) => {
                el.addEventListener("click", function (e) {
                    pod(item[idx].id)
                    console.log()

                })
            })


        })
};


function pod(num) {
    fetch(`https://fakestoreapi.com/products/${num}`)
        .then(res => res.json())
        .then((item) => {
            console.log(item)
            allProducts.innerHTML = ""
            allProducts.innerHTML += `
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
                        <button class="buyProduct kypit">Купить</button>  
                         <button class="back"><a href="../components/category.html">Назад</a></button>                                                 
                    </div>
                </div>
            </div>   
         `        
         let buyProduct = document.querySelector(".buyProduct");

         buyProduct.addEventListener("click", function(){
             cat.push(item)
             console.log(cat)
             localStorage.setItem("obj", JSON.stringify({ cat }))
         })
 

        });


};




names()
// cot()
// pod()
app()




