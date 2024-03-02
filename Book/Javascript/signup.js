let form = document.getElementById('form');
let nameInput = document.getElementById('name');
let addressInput = document.getElementById('address');
let phonenumberInput = document.getElementById('phonenumber');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let signUpBtnInput = document.getElementById('signup-btn');

let collectionData = [];
let formValues = {
    Name: "",
    Address: "",
    PhoneNumber: "",
    Email: "",
    Password: ""
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
        getData();
        window.location.href = '../signin.html';
    
})

const getData = () => {

    const retrievedData = localStorage.getItem("data");

    if (retrievedData) {
        collectionData = JSON.parse(retrievedData);
    }

    let name = nameInput.value;
    let address = addressInput.value;
    let phonenumber = passwordInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;

    formValues = {
        Name: name,
        Address: address,
        PhoneNumber: phonenumber,
        Email: email,
        Password: password,
    }

    collectionData.push(formValues);

    localStorage.setItem("data", JSON.stringify(collectionData))
}


