let hall = document.getElementsByClassName("hall");

for(let i = 0; i < hall.length; i++){
    hall[i].addEventListener("mouseover", function hoverLink(){
        hall[i].style.textDecoration = "underline";
    });
    hall[i].addEventListener("mouseout", function unhoverLink(){
        hall[i].style.textDecoration = "none";
    })
}
