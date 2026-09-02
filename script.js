
const button = document.getElementById("button");
button.addEventListener("click", function(event) {
    event.preventDefault();
    let input = document.getElementById("input").value;
    let num = input.split(",")
    let sum = 0
    function sumNumber (element){
        element.trim()
        sum += Number(element)
    }
    num.forEach(sumNumber);
    alert(`میانگین اعداد وارد شده ${sum/num.length} می باشد`)
});
