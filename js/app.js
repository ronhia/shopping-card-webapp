const productsContainer = document.querySelector('.products-container')
const templateProductCard = document.getElementById('template-product-card').content
const fragment = document.createDocumentFragment()

window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded")
    fetchProducts()
})

const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:3000/products')
        const products = await response.json()
        showProducts(products)
    } catch (error) {
        console.log(error)
    }
}

const showProducts = products => {
    products.forEach(product => {
        console.log(product)
        templateProductCard.querySelector('.product-card-name').textContent = product.name
        templateProductCard.querySelector('.product-card-description').textContent = product.description
        templateProductCard.querySelector('.product-card-price').textContent = product.price
        templateProductCard.querySelector('.product-card-image-container img').setAttribute('src', product.imageUrl)
        const clone = templateProductCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    productsContainer.appendChild(fragment)
}