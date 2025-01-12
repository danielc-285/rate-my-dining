let brunch = document.getElementById("brunch");
let dinner = document.getElementById("dinner");
let linkb = document.getElementById("mealtagb");
let linkd = document.getElementById("mealtagd");

brunch.addEventListener("mouseover", function showb(){
    linkb.style.color = "blue";
    linkb.style.textDecoration = "underline";
});

dinner.addEventListener("mouseover", function showd(){
    linkd.style.color = "blue";
    linkd.style.textDecoration = "underline";
});

brunch.addEventListener("mouseleave", function remb(){
    linkb.style.color = "black";
    linkb.style.textDecoration = "none";
});

dinner.addEventListener("mouseleave", function remd(){
    linkd.style.color = "black";
    linkd.style.textDecoration = "none";
});