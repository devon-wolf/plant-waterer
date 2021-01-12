const waterButton = document.getElementById('water-button');
const waterLevelSpan = document.getElementById('water-level');
const plantImage = document.getElementById('plant-image');

let waterLevel = 0;

waterButton.addEventListener('click', () => {
    waterLevel++;
    waterLevelSpan.textContent = waterLevel;
	
    if (waterLevel < 3) {
        plantImage.textContent = 'DRY PLANT';
    }
    else if (waterLevel >= 3 && waterLevel < 8) {
        plantImage.textContent = 'HAPPY HEALTHY PLANT';
    }
    else {
        plantImage.textContent = 'SOGGY OVERWATERED PLANT';
    }
});