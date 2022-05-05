const product = {
     plainBurger: {
         name: "GAMBURGER",
         price: 10000,
         amount: 0,
         kkal: 500,
         get Summ() {
             return this.price * this.amount
         },
         get kkalSumm() {
             return this.kkal * this.amount
         }
     },


     freshBurger: {
         name: "GAMBURGER FRESH",
         price: 20500,
         amount: 0,
         kkal: 800,
         get Summ() {
             return this.price * this.amount
         },
         get kkalSumm() {
             return this.kkal * this.amount
         }
     },
     freshCombo: {
         name: "FRESH COMBO",
         price: 31900,
         amount: 0,
         kkal: 1200,
         get Summ() {
             return this.price * this.amount
         },
         get kkalSumm() {
             return this.kkal * this.amount
         }
     },
        
    }

const plusOrMinus = document.querySelectorAll('.main__product-btn')
for (let i = 0; i < plusOrMinus.length; i++) {
    plusOrMinus[i].addEventListener('click', function (e) {
        e.preventDefault()
        push(this)
    })
}























// const product = {
//     plainBurger: {
//         name: "GAMBURGER",
//         price: 10000,
//         amount: 0,
//         kkal: 500,
//         get Summ() {
//             return this.price * this.amount
//         },
//         get kkalSumm() {
//             return this.kkal * this.amount
//         }
//     },
//     freshBurger: {
//         name: "GAMBURGER FRESH",
//         price: 20500,
//         amount: 0,
//         kkal: 800,
//         get Summ() {
//             return this.price * this.amount
//         },
//         get kkalSumm() {
//             return this.kkal * this.amount
//         }
//     },
//     freshCombo: {
//         name: "FRESH COMBO",
//         price: 31900,
//         amount: 0,
//         kkal: 1200,
//         get Summ() {
//             return this.price * this.amount
//         },
//         get kkalSumm() {
//             return this.kkal * this.amount
//         }
//     },

// }

// const plusOrMinus = document.querySelectorAll('.main__product-btn')
// for (let i = 0; i < plusOrMinus.length; i++) {
//     plusOrMinus[i].addEventListener('click', function (e) {
//         e.preventDefault()
//         push(this)
//     })
// }
// function push(el) {
//     let parent = el.closest(".main__product"),
//         parentId = parent.getAttribute('id'),
//         num = parent.querySelector('.main__product-num'),
//         price = parent.querySelector('.main__product-price'),
//         kkal = parent.querySelector('.main__product-kcall'),
//         attribute = el.getAttribute('data-symbol')
        

//     if (attribute == "+" && product[parentId].amount < 10) {
//         product[parentId].amount++
//     } else if (attribute == "-" && product[parentId].amount > 0) {
//         product[parentId].amount--
//     }
//     num.innerHTML = product[parentId].amount
//     price.innerHTML = product[parentId].Summ
//     kkal.innerHTML = product[parentId].kkalSumm
// }


// const addCart = document.querySelector('.addCart'),
//     receipt = document.querySelector('.receipt'),
//     receiptWindow = document.querySelector('.receipt__window'),
//     receiptWindowOut = document.querySelector('.receipt__window-out')

// addCart.addEventListener('click', () => {
//     receipt.style = 'display:flex'
//     setTimeout(() => {
//         receipt.style.opacity = '1'
//         receiptWindow.style = `top:15%`
//     }, 500);


//     let total = ""
//     let title = "  <h1>Purchased : </h1>"
//     const productList = Object.values(product).filter(index => index.amount)

//     for (let i = 0; i < productList.length; i++) {
//         if (productList[i].amount > 0) {
//             total += `
//             <div class="receipt_product">
//                 <span>${i + 1}</span>
//                 <div class="receipt__name">${productList[i].name}</div>
//                 <div class="receipt__amount">${productList[i].amount} x ${productList[i].price} = </div>
//                 <div class="receipt__total">${productList[i].Summ}</div>
//             </div>`

//         }
//     }

//     receiptWindowOut.innerHTML = title + total




// })