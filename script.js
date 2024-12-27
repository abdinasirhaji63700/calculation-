function updateForm() {
    const shape = document.getElementById("shape").value;
    const inputsDiv = document.getElementById("inputs");

    // Clear previous inputs
    inputsDiv.innerHTML = "";

    if (shape === "rectangle" || shape === "square") {
        // Rectangle or Square: Length and Width or just side length
        inputsDiv.innerHTML = `
            <label for="length">Length:</label>
            <input type="number" id="length" required>
            <label for="width">Width:</label>
            <input type="number" id="width" required>
        `;
        if (shape === "square") {
            document.querySelector("label[for='width']").innerText = "Side:";
        }
    } else if (shape === "circle") {
        // Circle: Radius
        inputsDiv.innerHTML = `
            <label for="radius">Radius:</label>
            <input type="number" id="radius" required>
        `;
    } else if (shape === "triangle") {
        // Triangle: Base and Height
        inputsDiv.innerHTML = `
            <label for="base">Base:</label>
            <input type="number" id="base" required>
            <label for="height">Height:</label>
            <input type="number" id="height" required>
        `;
    }
}

function calculateArea() {
    const shape = document.getElementById("shape").value;
    let area;

    if (shape === "rectangle" || shape === "square") {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);
        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            alert("Please enter valid numbers for length and width.");
            return;
        }
        area = shape === "square" ? length * length : length * width;
    } else if (shape === "circle") {
        const radius = parseFloat(document.getElementById("radius").value);
        if (isNaN(radius) || radius <= 0) {
            alert("Please enter a valid radius.");
            return;
        }
        area = Math.PI * Math.pow(radius, 2);
    } else if (shape === "triangle") {
        const base = parseFloat(document.getElementById("base").value);
        const height = parseFloat(document.getElementById("height").value);
        if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
            alert("Please enter valid numbers for base and height.");
            return;
        }
        area = (base * height) / 2;
    }

    document.getElementById("result").innerText = `Area: ${area.toFixed(2)} square units`;
}

