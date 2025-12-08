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

    // use querySelectorAll because >1 checkbox can be checked
    // we use can [name='<name>'] to select by name
    let selectedVIPServiceCheckboxes = document.querySelectorAll(`[name="vipServices"]:checked`);
    let selectedVIPServices = []; // create an empty array to store the values
    for (let checkbox of selectedVIPServiceCheckboxes) {
        selectedVIPServices.push(checkbox.value);
    }
    
    let selectedFreeFoodOption = document.querySelector("#freeFood");
    let selectedFreeFood = selectedFreeFoodOption.value;



    console.log(lastName, numberPax, selectedRoomType, selectedVIPServices, selectedFreeFood);

})