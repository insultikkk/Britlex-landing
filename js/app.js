function validatia(form) {

function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
        parent.querySelector('.error-label').remove()
        parent.classList.remove('error')
    }
    
}

function emailError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label')

    errorLabel.classList.add('error-label')
    errorLabel.textContent = text

    parent.classList.add('error')
    parent.append(errorLabel)
}


    let result = true;

const emailInput = form.querySelectorAll('input');

for (const input of emailInput) {

    removeError(input)

    if (input.value == "") {
        console.log("Error in the Field");
        emailError(input, 'Fill in the field!')
        result = false
    }
}

    return result
}


document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault()
 
    if (validatia(this) == true ) {

        alert('The form has passed, successfully we will write to you soon!')

    }
})
// ----------------------navbar----------------------------//
 
document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("navbarNav").classList.toggle("navbarBritlex")
})