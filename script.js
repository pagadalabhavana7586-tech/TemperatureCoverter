function convertTemperature() {

    let temp = parseFloat(document.getElementById("temp").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = document.getElementById("result");

    if (isNaN(temp)) {
        result.innerHTML = "Please enter a valid temperature.";
        result.style.color = "red";
        return;
    }

    // Convert input to Celsius
    let celsius;

    switch (from) {
        case "C":
            celsius = temp;
            break;
        case "F":
            celsius = (temp - 32) * 5 / 9;
            break;
        case "K":
            celsius = temp - 273.15;
            break;
    }

    // Convert Celsius to selected unit
    let converted;

    switch (to) {
        case "C":
            converted = celsius;
            break;
        case "F":
            converted = (celsius * 9 / 5) + 32;
            break;
        case "K":
            converted = celsius + 273.15;
            break;
    }

    let unit = "";

    switch (to) {
        case "C":
            unit = "°C";
            break;
        case "F":
            unit = "°F";
            break;
        case "K":
            unit = "K";
            break;
    }

    result.style.color = "green";
    result.innerHTML = "Converted Temperature: " + converted.toFixed(2) + " " + unit;
}
