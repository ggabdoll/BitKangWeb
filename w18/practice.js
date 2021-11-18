
//1단계 객체리터럴 배열 선언
const orders = []

const menus = [
    {name:'콜드브루', price:4500, picture:'img/c02.jpg'},
    {name:'토피넛라떼', price:5500, picture:'img/c03.jpg'},
    {name:'아아', price:4000, picture:'img/c05.jpg'},
    {name:'자몽에이드', price:5500, picture:'img/j01.jpg'},
    {name:'망고주스', price:2500, picture:'img/j02.jpg'},
    {name:'포도주스', price:1000, picture:'img/j03.jpg'},
    {name:'키위주스', price:5500, picture:'img/j04.jpg'},
    {name:'갈배', price:1000, picture:'img/j05.jpg'},
    {name:'딸기케이크', price:4000, picture:'img/k01.jpg'},
    {name:'더블치즈케이크', price:4000, picture:'img/k03.jpg'},
    {name:'한라봉케이크', price:5500, picture:'img/k05.jpg'},
]

//2단계 <div>와 <li>을 이용해서 객체들을 출력
const menuList = document.querySelector(".menuList")
let str = ''
for (let i = 0; i < menus.length; i++) {
    const menu = menus[i]
    
    str += `<li data-idx="${i}">
                <div class="mdiv">
                    <img src="${menu.picture}">
                    <div class="name" data->${menu.name}</div>
                    <div>${menu.price}원</div>
                </div>
            </li>`
}
menuList.innerHTML = str

//3단계 <li>태그에 click이벤트를 걸수 있나?
menuList.addEventListener("click", e => {
    const target = e.target
    const liEl = target.closest("li")

    const liIdx = liEl.getAttribute("data-idx")
    const liname = liEl.getAttribute(".name")
    const menu = menus[liEl.getAttribute("data-idx")]
    console.log("LiIdx:::", liIdx)
    console.log("target::", menu)
    addCart(menu)
},false)

//orders배열을 선언하고 클릭한 메뉴의 정보를 추가
const addCart = (menu) => {
orders.push({...menu})
    console.log(orders)
    showOrderList()
}

const showOrderList = () => {
    const orderListEl = document.querySelector(".orderList")
    const cost = document.querySelector(".cost")

    let str = ''
    let sum = 0
    let costStr = ''

    for (let i = 0; i < orders.length; i++) {
        const item = orders[i]

        str += `<li class="orderLi">${item.name} : ${item.price}원</li>`
        sum += item.price
    }
    costStr += `<div class="totalDiv"><h2>Total</h2><div>${sum}원</div><div> <button onclick="areYouOkay()">결제</button>`
    orderListEl.innerHTML = str
    cost.innerHTML = costStr
}

const areYouOkay = () => {
    alert("돈뺐어갈건데 괜찮아???")
}