
const totalHits = document.getElementById("dead");
const totalMissed = document.getElementById("lost");

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 10; i++) {
	getHole(i).onclick = function () {
		if (getHole(i).className.includes("hole_has-mole") === true) {
			totalHits.textContent = String(Number(totalHits.textContent) + 1);
		} else {
			totalMissed.textContent = String(Number(totalMissed.textContent) + 1);
		}
		if (totalHits.textContent === "10") {
           
			alert("Победа!");
			totalHits.textContent = 0;
			totalMissed.textContent = 0;
		}
		if (totalMissed.textContent === "5") {
            
			alert("Поражение!");
			totalHits.textContent = 0;
			totalMissed.textContent = 0;
		}
	}
}