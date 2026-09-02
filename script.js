const form = document.getElementById("form");
const input = document.getElementById("input");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const numbers = input.value
        .split(",")
        .map(item => Number(item.trim()))
        .filter(item => !isNaN(item));

    if (numbers.length === 0) {
        result.style.display = "block";
        result.textContent = "لطفاً حداقل یک نمره وارد کنید.";
        return;
    }

    const sum = numbers.reduce((total, number) => total + number, 0);

    const average = sum / numbers.length;

    result.style.display = "block";
    result.textContent = `میانگین نمرات شما: ${average.toFixed(2)}`;
});
