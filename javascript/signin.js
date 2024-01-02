
let SignIn = document.querySelector('.sign-in');
let create = document.querySelector('.create');

let SignInBtn = document.getElementById('SignIn');
let createBtn = document.getElementById('CreateAcnt');

function click1(){
    SignIn.style.display = 'block';
    create.style.display = 'none';
    SignInBtn.style.borderBottomColor = 'black';
    createBtn.style.borderBottomColor = '#e5e7eb';
}

function click2(){
    SignIn.style.display = 'none';
    create.style.display = 'block';
    SignInBtn.style.borderBottomColor = '#e5e7eb';
    createBtn.style.borderBottomColor = 'black';
}


// store user data into local storage

function signInDetail(){
    let Lname = document.getElementById('Lname');
    let Fname = document.getElementById('Fname');
    let Email = document.getElementById('Email');
    let pass = document.getElementById('pass');
    
    localStorage.setItem('FirstName', Fname.value);
    localStorage.setItem('LastName', Lname.value);
    localStorage.setItem('EmailAddress', Email.value);
    localStorage.setItem('Password', pass.value);

    location.reload();
}


function signIn(){
    let Email1 = document.getElementById('Email1').value;
    let pass1 = document.getElementById('pass1').value;
    
    let varEmail = localStorage.getItem('EmailAddress');
    let varPass = localStorage.getItem('Password');
    
    let errorPopUp = document.getElementById('errorPopUp');
    let successPopUp = document.getElementById('successPopUp');

    if(varEmail == Email1 && varPass == pass1){
        successPopUp.style.visibility = 'visible';
        successPopUp.style.opacity = '1';
        event.preventDefault();

        setTimeout(() => {
            successPopUp.style.visibility = 'invisible';
            successPopUp.style.opacity = '0';
            window.location.href = "../index.html";
        }, 2000);
        // alert('ok');
    }else{
        errorPopUp.style.visibility = 'visible';
        errorPopUp.style.opacity = '1';
        event.preventDefault();

        setTimeout(() => {
            errorPopUp.style.visibility = 'invisible';
            errorPopUp.style.opacity = '0';
            location.reload();
        }, 2000);
    }


}

let usersName = document.getElementById('usersName');
let userLastName = localStorage.getItem('LastName');

if(!userLastName == ''){
    usersName.innerHTML = userLastName;
}
else{
    usersName.innerHTML = 'Sign in';
}
