const $input = document.querySelector(".input");
const $errorMessageOne = document.querySelector(".error__message-one")
const $errorMessageTwo = document.querySelector(".error__message-two")
const $btnSubmit = document.querySelector(".btn__submit");

$input.addEventListener("input",(e) => {
  
  const $valid = e.target.validity.valid
  
  if (!$valid && $input.value !== "") {
    $errorMessageOne.classList.add("active");
    $errorMessageTwo.classList.remove("active")
  }
  
  if ($valid) {
    $errorMessageOne.classList.remove("active");
    $errorMessageTwo.classList.remove("active")
  }
} )

$btnSubmit.addEventListener("click",(e) => {
  
  if($input.value == "") {
    $errorMessageTwo.classList.add("active");
    $errorMessageOne.classList.remove("active");
  }
})