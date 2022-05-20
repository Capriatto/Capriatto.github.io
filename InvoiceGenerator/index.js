const washBtnEl = document.getElementById("washBtn")
const mowBtnEl = document.getElementById("mowBtn")
const pullBtnEl = document.getElementById("pullBtn")
const sendBtnEl = document.getElementById("sendBtn")
const carItemsEl = document.getElementById("car-items")
const payMethodsEl = document.getElementById("pay-methods")
const amountEl = document.getElementById("amount")
const removeEl = document.getElementById("remove")

let services = {
    'wash': 10,
    'mow': 20,
    'pull': 30
}
let sum = 0
let order = []

// funcion que encuentra repetidos en el array
function checkRepetitions(arr, element){
    if (arr.indexOf(element) === -1) {
        arr.push(element);
    }else{
        return false
    }
}

function render(arr){
    if (arr.length > 0 ){
        payMethodsEl.style.visibility = 'visible'
    }
    let lastItem = arr.length - 1
    sum += services[arr[lastItem]]
    carItemsEl.innerHTML += `<li class="item" id="item-${arr[lastItem]}">${arr[lastItem]}</li>
                            <a id="remove-${arr[lastItem]}" class="remove-link">
                                <span id="${arr[lastItem]}" onclick="remove(this.id)">
                                    <small>Remove</small>
                                </span>
                            </a>
                            <span class="price" id="price-${arr[lastItem]}">$${services[arr[lastItem]]}</span></br></br>`
    amountEl.textContent = sum
}

function renderAll(arr){
    let htmlPart = ""
    if (arr.length > 0 ){
        payMethodsEl.style.visibility = 'visible'
    }else{
        payMethodsEl.style.visibility = 'hidden'}
    for (let i =0; i< arr.length; i++){
       htmlPart  += `<li class="item" id="item">${arr[i]}</li>
                            <a id="remove" class="remove-link">
                                <span id="${arr[i]}" onclick="remove(this.id)">
                                    <small>Remove</small>
                                </span>
                            </a>
                            <span class="price" id="price-${arr[i]}">$${services[arr[i]]}</span></br></br>` 
    }
    carItemsEl.innerHTML = htmlPart
    amountEl.textContent = sum
}

function remove(clicked_name){
    for (let i=0; i< order.length; i++){
        if (order[i] === clicked_name){
            // removing element from the array
            order.splice(i, 1)
            // cleaning shopping-car item
            carItemsEl.innerHTML = ""
            // substracting the price of deleted item
            sum -= services[clicked_name]
            // render all remaining items again
            renderAll(order)
        }
    }
}

// ================= CLICK LISTENERS ========================================

washBtnEl.addEventListener("click", function(){
    if (checkRepetitions(order, 'wash') != false){
        render(order)
    }
})

mowBtnEl.addEventListener("click", function(){
    if (checkRepetitions(order, 'mow') != false){
        render(order)
    }

})

pullBtnEl.addEventListener("click", function(){
    if (checkRepetitions(order, 'pull') != false){
        render(order)
    }
})

sendBtnEl.addEventListener("click", function(){
    order = []
    carItemsEl.innerHTML = ""
    amountEl.textContent = 0
    sum=0
    payMethodsEl.style.visibility = 'hidden'
})
