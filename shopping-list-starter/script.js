// shoppinglistItems is an array.
let shoppingListItems = ['Milk', 'Bread', 'Cheese']

//Shopping list is shopping-list-items (ul-unordered list element)
let shoppingList = document.getElementById('shopping-list-items')

//loop notes by each line:
//loop through each item in the shoppinglistItems' array 
//Variable called listItem equals to  <li></li>
//listItem content is the item <li>Bread</li>
//Result of the first 2 steps of loop below:

//   <li>Milk</li>
//   <li>Bread</li>
//   <li>Cheese</li>

// final result of loop:
// <ul>
///   <li>Milk</li>
//   <li>Bread</li>
//   <li>Cheese</li>
// </ul>

shoppingListItems.forEach((item) => {
    let listItem = document.createElement('li')
    listItem.innerHTML = item


    shoppingList.appendChild(listItem)
})

 /**
  * 1. Get the value of the input  with the id of new-item-text
  * 2. . Create a list item with the value
  * 3. call appendChild on th shopping list to add the list item
  */

 //1 

    // 1. 
    
function addItem() {
    let inputField = document.getElementById("new-item-text")
    shoppingListItems.push(inputField.value)

    updateItems()
}

function updateItems() {
    let shoppingList = document.getElementById('shopping-list-items')
    shoppingList.InnerHTML = ''

    shoppingListItems.forEach((item) => {
        console.log(item)
    })

}
