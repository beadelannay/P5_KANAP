//Récupération des données avec Fetch
fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => addProducts(data))

//Déclaration de la fonction "addProducts"
function addProducts(kanaps) {

    kanaps.forEach((kanap) => {     //Création d'une loupe pour avoir tous les produits affichés

        const { _id, imageUrl, altTxt, name, description } = kanap  //La fonction récupère et crée les éléments
        const anchor = makeAnchor(_id)
        const article = document.createElement("article")
        const image = makeImage(imageUrl, altTxt)
        const h3 = makeH3(name)
        const p = makeParagraph(description)

        appendElementsToArticle (article, image, h3, p)
        appendArticleToAnchor(anchor, article)
    })
}

//Création de fonctions pour les différents éléments
function appendElementsToArticle (article, image, h3, p) {
    article.appendChild(image)
    article.appendChild(h3) 
    article.appendChild(p) 
}
    
function makeAnchor(id) {
    const anchor = document.createElement("a")
    anchor.href = "./product.html?id=" + id
    return anchor  
}  

function appendArticleToAnchor(anchor,article) {
    const items = document.querySelector("#items")
    items.appendChild(anchor)
    anchor.appendChild(article)
} 

function makeImage(imageUrl, altTxt) {
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    return image 
} 

function makeH3(name) {
    const h3 = document.createElement("h3")
    h3.textContent = name
    h3.classList.add("productName")
    return h3
}

function makeParagraph(description) {
    const p = document.createElement("p")
    p.textContent = description   
    p.classList.add("product.Description")
    return p
}
    
