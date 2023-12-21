const fnIconEl = document.getElementById("fn_icon-el")
let fnErrorEl = document.getElementById("fn_error-el")
const lnIconEl = document.getElementById("ln_icon-el")
let lnErrorEl = document.getElementById("ln_error-el")
const pIconEl = document.getElementById("p_icon-el")
let pErrorEl = document.getElementById("p_error-el")
const emIconEl = document.getElementById("em_icon-el")
let emErrorEl = document.getElementById("em_error-el")

function fnCheck() {
    let fnInputEl = document.getElementById("fn_input-el").value
    let fnError = document.getElementById("fn_field")
    if(fnInputEl.length == 0){
        fnError.classList.add("error_field")
        fnIconEl.classList.remove("hidden")
        fnErrorEl.textContent = "First name cannot be empty"
        return false
    } else {
        return true
    }
}
function lnCheck() {
    let lnInputEl = document.getElementById("ln_input-el").value
    let lnError = document.getElementById("ln_field")
    if(lnInputEl.length == 0){
        lnError.classList.add("error_field")
        lnIconEl.classList.remove("hidden")
        lnErrorEl.textContent = "Last name cannot be empty"
        return false
    } else {
        return true
    }
}
function pCheck() {
    let pInputEl = document.getElementById("p_input-el").value
    let pError = document.getElementById("p_field")
    if(pInputEl.length == 0){
        pError.classList.add("error_field")
        pIconEl.classList.remove("hidden")
        pErrorEl.textContent = "Password cannot be empty"
        return false
    } else {
        return true
    }
}
function emCheck() {
    let emInputEl = document.getElementById("em_input-el").value
    let emError = document.getElementById("em_field")
    const regex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if (regex.test(emInputEl)) {
        return true
    } else if (emInputEl == 0){
        emError.classList.add("error_field")
        emIconEl.classList.remove("hidden")
        emErrorEl.textContent = "Email cannot be empty"
        return false
    } else {
        emError.classList.add("error_field")
        emIconEl.classList.remove("hidden")
        emErrorEl.textContent = "Looks like this is not an email"
        return false
    }
}


function validateForm(){
    fnCheck()
    lnCheck()
    pCheck()
    emCheck()
}


document.getElementById("btn-submit").addEventListener("click", function submitForm(){
    validateForm()

    if ( fnCheck() == true && lnCheck() == true && pCheck() == true && emCheck() == true){
        console.log("thank you for your submission")
    } else {
        console.log("please complete the form")
    }
})