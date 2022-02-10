//Récupération de l'id dans l'URL
const queryString = window.location.search
const UrlParams = new URLSearchParams(queryString)
const id = UrlParams.get("id")
if (id != null) {
    let itemPrice = 0
    let imgUrl, altText, articleName
}

//Récupération des données par id avec fetch
fetch(`http://localhost:3000/api/products/${id}`)
.then(response => response.json())
.then((res) => handleData(res))

//Déclaration de la fonction "handleData"
function handleData(kanap) {
    const {altTxt, colors, description, imageUrl, name, price} = kanap
    itemPrice = price
    imgUrl = imageUrl
    altText = altTxt
    articleName = name
    makeImage(imageUrl, altTxt)
    makeTitle(name)
    makePrice(price)
    makeDescription(description)
    makeColors(colors)
}

//Création de fonctions pour les différents éléments
function makeImage(imageUrl, altTxt){
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    const parent = document.querySelector(".item__img")
    if (parent != null) parent.appendChild(image)
}

function makeTitle(name) {
    const h1 = document.querySelector("#title")
    h1.textContent = name
}

function makePrice(price) {
    const span = document.querySelector("#price")
    span.textContent = price
}

function makeDescription(description) {
    const p = document.querySelector("#description")
    p.textContent = description
} 

function makeColors(colors) {
    const select = document.querySelector("#colors") //select=menu déroulant
    if (select != null) {
        colors.forEach((color) => {
            const option = document.createElement("option")
            option.value = color
            option.textContent = color
            select.appendChild(option)
        })
    }
}

const button = document.querySelector("#addToCart") 
button.addEventListener("click", (e) => {
    const color = document.querySelector("#colors").value
    const quantity = document.querySelector("#quantity").value
    if (quantity == null || quantity == 0 || color == null || color == "") {
        alert("Please choose a color and quantity")
        return
    }

const data = { 
    id: id,
    color: color,
    quantity: Number(quantity),
    price: itemPrice,
    imageUrl: imgUrl, 
    altTxt: altText,
    name: articleName
}

localStorage.setItem(id, JSON.stringify(data))
window.location.href = "cart.html"
})