function add() {
    const listField = document.getElementById("list");
    const inputField = document.getElementById("inputf");

    if (inputField.value === '') {
        alert("You have to write something!");
    } else {
        const newItem = document.createElement("li");
        newItem.innerHTML = inputField.value;
        newItem.className = "flex justify-between";
        
        const removeBtn = document.createElement("button");
        removeBtn.innerHTML = "delete";
        removeBtn.onclick = function() {
            this.parentElement.remove();
            savedata(); // Save data after deletion
        };
        
        newItem.appendChild(removeBtn);
        listField.appendChild(newItem);
    }

    inputField.value = "";
    savedata(); // Save data after addition
}

function savedata() {
    const listField = document.getElementById("list");
    localStorage.setItem("data", listField.innerHTML);
}

// Load saved data when the page loads
window.onload = function() {
    const listField = document.getElementById("list");
    listField.innerHTML = localStorage.getItem("data") || "";
};
