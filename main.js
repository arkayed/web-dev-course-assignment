function addItem(){    //defining the function that is called from list.html when the 'add' button is clicked
    let addText = document.querySelector("#add-list").value   //getting the submitted text from user and putting it into a variable   
    if (addText ==""){          //checking that the user has typed something 
        alert("You did not enter any item");  //if they haven't typed anything, an alert appears
    }
    
    else{   //if they have typed something, the following occurs
        const item = document.createElement("li")  //creating an empty list element for the added text to go into
        item.textContent =   addText //inserting the submitted input into the list element
        document.querySelector("#function-list").appendChild(item) //appending the list element into the existing list
        document.querySelector("#add-list").value=""   //clearing the input box    
    }
}