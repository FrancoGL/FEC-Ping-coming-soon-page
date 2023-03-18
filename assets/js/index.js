const $input = document.querySelector(".input");
const $errorMessage = document.querySelector(".error__message")

$input.addEventListener("input",(e) => {
  console.log(e.target.validity.valid);
  const $valid = e.target.validity.valid

  
  if (!$valid) {
    $errorMessage.classList.add("active");
  }
  
  if ($valid) {
    $errorMessage.classList.remove("active");
  }
} )