function addItem(){
    const item = document.createElement("li")  //creating an empty list element for the added text to go into
    item.textContent = document.querySelector("#add-list").value  //inserting the submitted input into the list element
    document.querySelector("#function-list").appendChild(item) //appending the list element into the existing list
    document.querySelector("#add-list").value=""   //clearing the input box
}