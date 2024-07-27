// Initiation of vars
var flexElementColumnOne = document.getElementById("flex-element-column-one");
var flexElementColumnTwo = document.getElementById("flex-element-column-two");
var flexElementColumnThree = document.getElementById("flex-element-column-three");
var flexElementColumnFour = document.getElementById("flex-element-column-four");

//hide first button and show second button
flexElementColumnOne.addEventListener('click', function(event) {
    flexElementColumnOne.style.display = 'none';

});

flexElementColumnTwo.addEventListener('click', function(event) {
    flexElementColumnTwo.style.display = 'none';
});

flexElementColumnThree.addEventListener('click', function(event) {
    flexElementColumnThree.style.display = 'none';
});

flexElementColumnFour.addEventListener('click', function(event) {
    flexElementColumnFour.style.display = 'none';
});
