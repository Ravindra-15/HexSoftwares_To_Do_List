const inputBox = document.querySelector("#input-box");
const listContainer= document.querySelector("#list-container");
const addButton = document.querySelector("button");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();

    // Add animation class to the button
    addButton.classList.add("animate-btn");

    // Remove the animation class after the animation ends (0.3 seconds)
    setTimeout(function () {
        addButton.classList.remove("animate-btn");
    }, 300);  // Duration matches the animation in the CSS
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();