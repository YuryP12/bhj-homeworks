
const image = document.getElementById("cookie");
const clickTotal = document.getElementById("clicker__counter")

image.onclick = () => { 

    if (image.width === 200) {
    image.width = 150;
    } else 
    image.width = 200;
    clickTotal.textContent++;
}