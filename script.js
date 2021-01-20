const product = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kcall: 400,
        amount: 0,
        get Sum() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        },
        img: 'images/product2.jpg'
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        kcall: 500,
        amount: 0,
        get Sum() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        },
        img: 'images/product1.jpg'
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 600,
        amount: 0,
        get Sum() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        },
        img: 'images/product3.jpg'
    },
}; 

const btn = document.querySelectorAll('.main__product-btn')



for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        prepare(this)
    })
}
// closest() - obj metodi bo'lib, El o'rab turgan elementlaridan eng yaqiniga ulanadi
// getAttribute() - element atributini olishga iwlatiladi
function prepare(element) {
    let parent = element.closest('.main__product')
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector('.main__product-num')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')
    let sym = element.getAttribute('data-symbol')
    let miqdor = product[parentId].amount
    
    
    if(sym == '+' && miqdor < 10 ) {
        miqdor++
    } else if(sym == '-' && miqdor > 0) {
        miqdor--
    }
    num.innerHTML = miqdor
    product[parentId].amount = miqdor
    price.innerHTML = product[parentId].Sum
    kcall.innerHTML = product[parentId].Kcall
}

const addCart = document.querySelector('.addCart')
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptWindowOut = document.querySelector('.receipt__window-out')
const pay = document.querySelector('.receipt__window-btn')

addCart.addEventListener('click', () => {
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '10%'
    }, 200);
    receipt.style.display = 'flex'
    
    let menu = 'Your cart:\n\n'
    let totalPrice = 0
    let totalKcall = 0
    for (const key in product) {
        if(product[key].amount) {
            menu += `${product[key].name} ${product[key].amount}x\n`
            totalPrice += product[key].Sum
            totalKcall += product[key].Kcall
        }
    }
    
    receiptWindowOut.innerHTML = `${menu}\nTotal price: ${totalPrice}sum\nTotal kcall: ${totalKcall}kcall`
})

pay.addEventListener('click', ()=> {location.reload()})


let headerTimer = document.querySelector('.header__timer-extra')
function level() {


    if (headerTimer.innerHTML < 60) {
        headerTimer.innerHTML++
        setTimeout(function () {level()}, 70)
    }else if (headerTimer.innerHTML < 75) {
        headerTimer.innerHTML++
        setTimeout(function () {level()}, 90)
    }else if (headerTimer.innerHTML < 90) {
        headerTimer.innerHTML++
        setTimeout(function () {level()}, 120)
    }else if (headerTimer.innerHTML < 100) {
        headerTimer.innerHTML++
        setTimeout(function () {level()}, 170)
    }
}
level()




const productImg = document.querySelectorAll('.main__product-info')
let view = document.querySelector('.view')
let viewImg = document.querySelector('.view img')
let viewClose = document.querySelector('.view__close')

for (let i = 0; i < productImg.length; i++) {
    productImg[i].addEventListener('dblclick', function () {
        img(this)
        view.style.display = 'flex'
    })

    viewClose.addEventListener('click' , function(){
        view.style.display = 'none'
    })
}
function img(images) {
    let parent = images.closest('.main__product')
    let parentId = parent.getAttribute('id')
    viewImg.style.margin = 'auto'
    viewImg.src = product[parentId].img
}