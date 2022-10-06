const btnSubmit = document.querySelector("#btn-submit");

const inputPass = document.querySelector("#ip-pass");

const outputBox = document.querySelector("#output");

// console.log(btnSubmit)

inputPass.addEventListener('input' , (event) =>{
    outputBox.innerText = event.target.value;
})


