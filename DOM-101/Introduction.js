/* TODO:
- DRY the code / Refactor: Callback functions - DONE!
- Debug Keydown event listener: Enter key not working!!! - DONE!

- Toggle `.done` class on list items - DONE!
- Add a `delete` button to all list items - DONE!
*/

// DOM Events
var button0 = document.getElementsByTagName("button")[0];
var input0 = document.getElementById("add-item");
var list0 = document.getElementsByClassName("list");

// listItemCreation
function listItemCreation() {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(input0.value + "\t"));
    list0[0].appendChild(listItem);
    console.log('"' + input0.value + '" added to the Shopping List!');
    input0.value = "";

    // .done
    listItem.addEventListener("click", (event) => {
        listItem.classList.toggle("done");
    });

    // .doneButton
    var doneButton = document.createElement("button");
    doneButton.appendChild(document.createTextNode("Done!"));
    doneButton.classList.add("doneButton");
    listItem.appendChild(doneButton);
    doneButton.addEventListener("click", (event) => {
        listItem[0].classList.toggle("done");
    });

    // .deleteButton
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete!"));
    deleteButton.classList.add("deleteButton");
    listItem.appendChild(deleteButton);
    deleteButton.addEventListener("click", (event) => {
        list0[0].removeChild(listItem);
    });
}

// addItemUponClick
function addItemUponClick() {
    // console.log("You know... I'm just a button... I don't do much... I just exist for some reason... idk...")
    if (input0.value.trim().length !== 0) {
        listItemCreation();
    }
}

// addItemUponEnter
function addItemUponEnter(event) {
    if (event.code === "Enter" && input0.value.trim().length !== 0) {
        listItemCreation();
    }
}


// Event Listeners
button0.addEventListener("click", addItemUponClick);
input0.addEventListener("keydown", addItemUponEnter);



/* Sources:

https://developer.mozilla.org/en-US/docs/Web/API/Document

*/
