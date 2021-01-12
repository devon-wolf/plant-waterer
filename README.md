# plant-waterer

Keeps track of the water level of a plant

## HTML Setup:
- Needs a **button**
	- on click, it will change the **water level**
- Needs an **image**
	- to give feedback to the user about how the plant is doing
- Needs an informational div
	- to show the user the **current water level**; the raw data that is informing the image

1. Grab some *DOM elements*
	- so they will need IDs
2. *Initialize* some state
	- water level starts at 0 (`let waterLevel = 0;`)
3. Add an *event listener* to the button
	- On click:
		1. State: water level increments
		2. View: image changes to match the current water level
		3. View: info div changes to reflect the new data
