var number;

function gan(number) {
    var numValue = document.querySelector("#num1").value;
    document.querySelector("#num1-value span").innerHTML = numValue;
    number = parseInt(numValue);

    console.log(number)
}