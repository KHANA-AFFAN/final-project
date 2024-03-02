let form = document.getElementById('form');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

const userData = JSON.parse(localStorage.getItem('data')) || [];
console.log(userData);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    getData();
})

const getData = () => {
    let email = emailInput.value;
    let password = passwordInput.value;

    if (!email || !password) {
        Swal.fire({
            icon: 'error',
            title: 'Please Enter Email and Password',
            showConfirmButton: true,
            confirmButtonText: 'Signin',
            allowOutsideClick: false,
          }).then(() => {
            window.location.href = 'signin.html'; 
          });   
        return;
    }

    let userFound = false;

    userData.forEach(obj => {
        if (obj.Email === email && obj.Password === password) {
            userFound = true;
            Swal.fire({
                icon: 'success',
                title: 'Thank you for Logging',
                showConfirmButton: true,
                confirmButtonText: 'Countinue',
                allowOutsideClick: false,
              }).then(() => {
                window.location.href = './Html/index.html';
              });   
            

        }
    });

    if (!userFound) {
        Swal.fire({
            icon: 'error',
            title: 'Account Did not Found',
            showConfirmButton: true,
            confirmButtonText: 'Retry',
            allowOutsideClick: false,
          }).then(() => {
            window.location.href = 'signin.html'; 
          });   
    }
}