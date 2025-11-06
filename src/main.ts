// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

// These constants are for button IDs and heading text
const incrementButton = "increment",
  counterButton = "counter",
  title = "CMPM 121 Project";

function createSetup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${title}</h1>
    <p>Counter: <span id="${counterButton}">0</span></p>
    <button id="${incrementButton}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get the button elements from the document
  const incrementElement = document.getElementById(incrementButton),
    decrementElement = document.getElementById("dec"),
    resetElement = document.getElementById("reset"),
    counterElement = document.getElementById(counterButton);

  // Check if any element is missing, then exit the function
  if (
    !incrementElement || !decrementElement || !resetElement || !counterElement
  ) return;

  // Initial Display
  updateDisplay(counterElement!, counter);

  const actions: Record<string, () => void> = {
    [incrementButton]: () => counter++,
    dec: () => counter--,
    reset: () => counter = 0,
  };

  for (const [id, action] of Object.entries(actions)) {
    const button = document.getElementById(id);
    if (!button) continue;
    button.addEventListener("click", () => {
      action();
      updateDisplay(counterElement!, counter);
    });
  }
}

createSetup();

function updateDisplay(a: HTMLElement, counter: number) {
  // Update the counter display
  a.innerHTML = `${counter}`;
  // Update the document title
  document.title = "Clicked " + counter;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
}
