
const timerElement = document.getElementById("timer");

function changeTimer () {
    let time = +timerElement.textContent;
    time--;
    timerElement.textContent = time;
  
    if (timerElement.textContent <= 0) {
        
        alert("Вы победили в конкурсе!"); 
        clearInterval(timerID);
    } 
}

//const timerID = setInterval(changeTimer, 1000);
const timerID = setInterval(changeTimer, 50);