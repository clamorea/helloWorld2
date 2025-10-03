function changeText() {
    document.getElementById("para1").textContent = "Hola y bienvenido a mi sitio. Haz clic en el botón Cambiar texto para cambiar el diseño."
    document.getElementById("para1").style.color = "red";
    document.getElementById("para1").style.fontFamily = "Courier";
}
// I chose to translate my paragraph into Spanish along with changing the color and font

function displayGreeting() {
    let name = document.getElementById("nameInput");
    alert( "Hello, " + name);
}

let favoriteFoods = ["Steak", "Mashed Potatoes", "Asparagus", "Peach", "Pasta"];
// I know that asparagus is questionable in this list, but when cooked/seasoned well, it is really good.

let list = document.getElementById("foodList");

for (let i = 0; i < favoriteFoods.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = favoriteFoods[i];
    list.appendChild(listItem);
}

function chooseClasses(){
    let checkboxes = document.querySelectorAll('input[name="class"]')
    let selectedClasses = ""
    for (let i = 0; i < checkboxes.length; i++) {
        let checkbox = checkboxes[i];
        if (checkbox.checked){
            selectedClasses = selectedClasses + " " + checkbox.value;
        }
    }
    alert(selectedClasses) //this line makes an alert box with the classes that the user selected
}