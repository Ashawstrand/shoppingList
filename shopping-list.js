/**
 * This is a javascript project intended to solidify the concepts of arrays, objects,
 * forEach, for...in/ for....of loops, DOM, destructuring,
 */

//DOM variables------------------------------------------------------------------------------------

const addItemButton = document.getElementById("addItem");
const clearButton = document.getElementById("clearList");
const list = document.getElementById("items");
const nameInput = document.getElementById("nameInput");
const categoryInput = document.getElementById("categorySelect");
const priceInput = document.getElementById("priceInput");
const alertMessage = document.getElementById("alertMessage");


//initial items-----------------------------------------------------------------------------------

shoppingList = [
                {name:'Milk', category: 'Dairy', price: 2.50},
                {name:'Eggs', category: 'Dairy', price: 5.25},
                {name:'Bread', category: 'Bakery', price: 1.75},
                {name:'Chicken', category: 'Meat', price: 2.50},
                {name:'Beef', category: 'Meat', price: 2.50},
                {name:'Ice Cream', category: 'Frozen', price: 3.25}
            ];

//load existing items----and new user items------------------------------------------------------------------

//for...of
// for (item of shoppingList){
//     let li = document.createElement("li");
//     li.textContent = `${item.name} ${item.category} $${item.price}`;
//     list.appendChild(li);
// }

//forEach
shoppingList.forEach((item) => 
   { 
    //destructure
    const { name, category, price } = item;
    let li = document.createElement("li");
    li.textContent = `${name} -- ${category} -- $${price.toFixed(2)}`;
    list.appendChild(li)});


//add item functionality-----------------------------------------------------------------


addItemButton.onclick = () => {

//exception handling for proper inputs

if (nameInput.value == ""){
    alertMessage.innerText = `Please enter a valid item name.`;
}
else if (isNaN(parseFloat(priceInput.value)) ||
         priceInput.value > 100){
    alertMessage.innerText = `Please enter a price under $100.`;
}
else {


    function titleCase(string) {
       const lowerString = string.toLowerCase();
       return lowerString.charAt(0).toUpperCase() + lowerString.slice(1);
    }


    //submit info
    let userItem =  {
            name: titleCase(nameInput.value),
            category: categoryInput.value,
            price: parseFloat(priceInput.value)
        };

    shoppingList.push(userItem);


    //create new list item in DOM
    let li = document.createElement("li");
    //destructure ** easier to grab the object properties and their values
    const { name,category,price } = userItem;
    //same as 
    //const name = userItem.name;
    //const category = userItem.category;
    //etc
    //or li.textContent = `${userItem.name} -- ${userItem.category} -- $${userItem.price.toFixed(2)}`;
    li.textContent = `${name} -- ${category} -- $${price.toFixed(2)}`;
    list.appendChild(li);

    //clear the form inputs
    nameInput.value = "";
    categoryInput.value = "";
    priceInput.value = "";
    }
}

    //clear list functionality-----------------------------------------------------

    clearButton.onclick = () => {
        shoppingList = [];
        list.innerHTML = "";
    }
