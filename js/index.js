//problem 1


document.getElementById("btnOne").addEventListener("click", function() {


    alert("Button is clicked");


});

//problem 2

let count = 0;
document.getElementById("btnTwo").addEventListener("click", function() {


    let countNumber = document.getElementById("count");
    count = count + 1;


    let setCount = document.getElementById("count").innerText = count;




});

//problem 3

document.getElementById("hide").addEventListener("click", function() {


    let secHide = document.getElementById("secOne");


    secHide.style.display = "none";









});

//problem 4

document.getElementById("dark").addEventListener("click", function() {


    let bodyTag = document.getElementsByTagName("body")[0];

    bodyTag.style.backgroundColor = "black";




});
document.getElementById("light").addEventListener("click", function() {


    let bodyTag = document.getElementsByTagName("body")[0];

    bodyTag.style.backgroundColor = "white";




});

//problem-5

document.getElementById("sum").addEventListener("click", function() {



    let inputOne = document.getElementById("n1").value;
    let inputTwo = document.getElementById("n2").value;

    let numberOne = parseFloat(inputOne);
    let numberTwo = parseFloat(inputTwo);



    let sumOfTwo = (numberOne + numberTwo);

    let total = document.getElementById("calOut").innerText = sumOfTwo;


    document.getElementById("n1").value = '';
    document.getElementById("n2").value = '';








});