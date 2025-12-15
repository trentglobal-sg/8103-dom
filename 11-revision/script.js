let form = document.querySelector("#form");
form.addEventListener("submit", function(e){
    e.preventDefault(); // prevent the form from reaching the server
    alert("form submitted");

})