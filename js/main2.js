const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));
const product = PRODUCTS.find(p => p.id === productId);

if (product) {
    document.getElementById('product-image').src = `images/${product.image}`;
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = formatCurrency(product.price);
    document.getElementById('product-description').textContent = product.description;
}
