console.log("Hello world");
let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function(){
    // Select the DOM element responsible for the last name textbox
    let lastNameTextbox = document.querySelector("#lastName");
    // To get what the user has typed into the textbox, use .value
    let lastName = lastNameTextbox.value;

    let numberPaxTextbox = document.querySelector("#numberPax");
    let numberPax = numberPaxTextbox.value;

    // using querySelector because one radio button can be checked
    let selectedRoomTypeRadio = document.querySelector(
        ".roomType:checked"
    )
    let selectedRoomType = selectedRoomTypeRadio.value;

    console.log(lastName, numberPax, selectedRoomType);

})