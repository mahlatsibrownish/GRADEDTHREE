document.getElementById("add").addEventListener("click", function() {

    let task = document.getElementById("item").value.trim();
    let list = document.getElementById("list");

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let listItem = document.createElement("li");
    listItem.textContent = task;
    list.appendChild(listItem);

    document.getElementById("item").value = "";
});

document.getElementById("remove").addEventListener("click", function() {

    let task = document.getElementById("item").value.trim().toLowerCase();
    let list = document.getElementById("list");
    let items = list.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.toLowerCase() === task) {
            list.removeChild(items[i]);
            break;
        }
    }

    document.getElementById("item").value = "";
});