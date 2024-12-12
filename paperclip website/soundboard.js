function addToCartAndPlaySound() {
    // Play the victory sound when the "Add to Cart" button is clicked
    let sound = document.getElementById('victory-sound');
    sound.play();

    // Add product to the cart (using the function from cart.js)
    let product = {
        name: 'Gilded Clutché Paperclip',
        price: 500,
        material: '18-Karat Gold'
    };

    addToCart(product);  // This is the cart function from cart.js
}
