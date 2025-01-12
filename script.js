let search = document.getElementById("search");
let entries = [];
entries[0] = null;
let count = 0;
let img = document.getElementById("img");

search.addEventListener("click", function dropdown(){
    count++;
    img.src = "./dropdownup.png";
    let drop = document.getElementById("drop");
    entries[0] = document.createElement("a");
    entries[0].setAttribute("href", "./univs/ucsb.html");
    entries[0].textContent = "University of California, Santa Barbara";
    drop.appendChild(entries[0]);
    search.style.outlineColor = "white";
    entries[0].addEventListener("mouseover", function show(){
        entries[0].style.color = "blue";
    });
    entries[0].addEventListener("mouseleave", function rem(){
        entries[0].style.color = "black";
    });
    if(count == 2){
        drop.innerHTML = "";
        img.src = "https://static.thenounproject.com/png/1123247-200.png"
        count = 0;
    }
});