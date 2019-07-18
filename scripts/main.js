const pet = {
    name: "Francis",
    species: "French Bulldog",
    nicknames: ["France", "Frank"],
    age: 3, 
    bark: function () {
        window.alert("WOOF!")
    },
    whine: function() {
        window.alert("WHINE!@#")
    },
    pant: function() {
        window.alert("PANT")
    },
    favoriteToys: [],
    play: function(toy) {
        if (toy === "ball" || toy === "rope") {
            this.favoriteToys.push(toy)
        }
    }
}
pet.bark()
pet.whine()
pet.pant()
pet.play("ball")
pet.play("bone")
pet.play("rope")

console.log(pet.favoriteToys)

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        return this.orders.push(meal)
        console.log(`you ordered ${meal.name}`)
    },
    getAllOrders: function(order) {
        return this.orders
    }
}

const chickenComboMeal = {
    name: "chicken combo",
    sandwichType: "chicken",
    fries: true,
    drinkSize: "medium"
}

const burgerComboMeal = {
    name: "burger combo",
    sandwichType: "burger",
    fries: false,
    drinkSize: "small"
}
const turkeyComboMeal = {
    name: "turkey combo",
    sandwichType: "turkey",
    fries: true,
    drinkSize: "large"
}

// Place an order
restaurant.placeOrder(burgerComboMeal)
restaurant.placeOrder(turkeyComboMeal)
restaurant.placeOrder(chickenComboMeal)

// // Invoke the function to return the list of all orders
const allOrders = restaurant.getAllOrders()
// // Output all orders to the console using console.table()
console.table(allOrders)