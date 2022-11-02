const iceCream [{
    name: "Vanilla",
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0
    }, {
        name: "Cookie Dough",
        image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
        price: 2,
        quantity: 0

    }, {
        name: "Strawberry",
        image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
        price: 2,
        quantity: 0

    }
]








// function buyVanilla() {
//     console.log("buying the BLT")
//     // find the icecream I want to buy
//     // after finding the icecream.... increase the quantity
//     let iceCream = iceCreams.find(iceCream => iceCream.name == "Vanilla")
//     iceCream.quantity++
//     console.log(iceCream);
// }

// function buyCookieDough(){
//     let iceCream = iceCreams.find(s)
// }

function drawCart() {
    //if I bought something, add it to my cart
    //how can i check to see if i bought something
    // if quantity is greater than 0 or > 0 add it to my cart... draw the item in the cart
    let template = ' '
    iceCreams.forEach(s => {
        if (s.quantity > 0) {
            console.log(s);
        }
        document.getElementById('cart').innerHTML = template
        drawTotal()
    })
}

function drawTotal() {
    //iterate through all of the sandwiches
    // if I have a sandwich, add its price and quantity to my total
    let total = 0
    iceCreams.forEach(s => {
        total += s.price * s.quantity
    })
    document.getElementById('total').innerText = total.toFixed(2)
}

function checkout() {
    // when I click on a button.. clear my cart
    // reset the quantity of all the sandwiches
    if (window.confirm("Are you sure you want to clear your cart?"))
// review make sure to wrap your logic INSIDE of your confirm

}


function removeItem() {
    // when I click on a button, find the iceCream I want to remove
    // after finding the iceCream,, decrease the amount I have (quantity)
    // NOTE .filter() method returns an array, .find() returns a single item
    let foundIceCream = iceCreams.find(s => s.name == iceCreamName)
    console.log(foundIceCream, 'found icecream');


}