//problem 1


document.getElementById("btnOne").addEventListener("click", function() {


    alert("Button is clicked");


});


let count = 0;
document.getElementById("btnTwo").addEventListener("click", function() {


    let countNumber = document.getElementById("count");
    count = count + 1;


    let setCount = document.getElementById("count").innerText = count;




});


document.getElementById("hide").addEventListener("click", function() {


    let secHide = document.getElementById("secOne");


    secHide.style.display = "none";









});