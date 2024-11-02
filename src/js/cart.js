let allProducts = document.querySelector('.allProducts');
let cat = JSON.parse(localStorage.getItem('obj'))
let tovar = cat.cat
allProducts.innerHTML=""
console.log(tovar)

tovar.map((el, idx)=>{
    allProducts.innerHTML+=`
    
        <table>
            <tr>
                <td class="korzina">${idx +1}) ${el.title}</td>
            </tr>
        </table>
    `
})

