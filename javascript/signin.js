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
    let phone = document.getElementById('Num');
    let Email = document.getElementById('Email');
    let pass = document.getElementById('pass');

    let validInfo = document.getElementById('validInfo');
    let invalidInfo = document.getElementById('invalidInfo');


    if(Fname.value != '' && Lname.value != '' && phone.value != '' && Email.value != '' && pass.value != '' && !FormValidation()){
        let usersData = JSON.parse(localStorage.getItem('usersData')) || [];

        let newUsers = {
            FirstName: Fname.value.trim(),
            LastName: Lname.value.trim(),
            PhoneNumber: phone.value.trim(),
            EmailAddress: Email.value.trim(),
            password: pass.value
        };
        
        usersData.push(newUsers);
        
        localStorage.setItem('usersData', JSON.stringify(usersData));
        
        // show success pop-up
        validInfo.style.visibility = 'visible';
        validInfo.style.opacity = '10';
        event.preventDefault();

        setTimeout(() => {
            validInfo.style.visibility = 'hidden';
            validInfo.style.opacity = '0';
            location.reload();
        }, 1000);
    }else{
        invalidInfo.style.visibility = 'visible';
        invalidInfo.style.opacity = '1';
        event.preventDefault();

        // Hide the error message after 1 seconds and reload the page.
        setTimeout(() => {
            invalidInfo.style.visibility = 'hidden';
            invalidInfo.style.opacity = '0';
        }, 1000);
    }
}

// show user name in sidebar

let storedUserData = localStorage.getItem('usersData');
let usersData = JSON.parse(storedUserData) || [];

let storedUserMail = localStorage.getItem('UserMail');
let userMail = JSON.parse(storedUserMail) || [];


if (usersData.length > 0 && userMail.length > 0) {
    let usersName = document.getElementById('usersName');
    let firstUserLastName = usersData[0].LastName;
    usersName.innerHTML = firstUserLastName;
}
else {
    usersName.innerHTML = 'Sign in';
}

function signIn(){
    let Email1 = document.getElementById('Email1').value;
    let pass1 = document.getElementById('pass1').value;

    let usersData = JSON.parse(localStorage.getItem('usersData')) || [];

    let errorPopUp = document.getElementById('errorPopUp');
    let successPopUp = document.getElementById('successPopUp');
    let found = false;

    for(let i = 0; i < usersData.length; i++){
        let user = usersData[i];
        if(user.EmailAddress === Email1 && user.password === pass1){
            found = true;
            break;
        }
    }

    if (found) {
        successPopUp.style.visibility = 'visible';
        successPopUp.style.opacity = '1';
        event.preventDefault();

        // Hide the success message after 1 seconds and redirect to another page.
        setTimeout(() => {
            successPopUp.style.visibility = 'hidden';
            successPopUp.style.opacity = '0';
            window.location.href = "../index.html";
        }, 1000);
    } 
    else {
        errorPopUp.style.visibility = 'visible';
        errorPopUp.style.opacity = '1';
        event.preventDefault();

        // Hide the error message after 1 seconds and reload the page.
        setTimeout(() => {
            errorPopUp.style.visibility = 'hidden';
            errorPopUp.style.opacity = '0';
            location.reload();
        }, 1000);
    }

    emailPass();
}


// validation using Regular expression
function FormValidation(){
    const Aname = document.getElementById('Fname');
    const Bname = document.getElementById('Lname');
    const Num = document.getElementById('Num');
    const mails = document.getElementById('Email')
    const pswrd = document.getElementById('pass');

    const Fnamevalid = document.getElementById('Fnamevalid');
    const Lnamevalid = document.getElementById('Lnamevalid');
    const NumValid = document.getElementById('NumValid');
    const Mailvalid = document.getElementById('Mailvalid');
    const passvalid = document.getElementById('passvalid');

    Aname.addEventListener('blur',()=>{
        let regx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
        let str = Aname.value;

        if(regx.test(str)){
            console.log('it match');
            Fnamevalid.classList.add('hidden');
        }else{
            console.log('it not match');
            Fnamevalid.classList.remove('hidden');;
        }
    })

    Bname.addEventListener('blur',()=>{
        let regx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
        let str = Bname.value;

        if(regx.test(str)){
            console.log('it match');
            Lnamevalid.classList.add('hidden');
        }else{
            console.log('it not match');
            Lnamevalid.classList.remove('hidden');;
        }
    })


    Num.addEventListener('blur',()=>{
        let regx = /^([0-9]){10}$/;
        let str = Num.value;

        if(regx.test(str)){
            console.log('it match');
            NumValid.classList.add('hidden');
        }else{
            console.log('it not match');
            NumValid.classList.remove('hidden');;
        }
    })

    mails.addEventListener('blur',()=>{
        console.log('mail blur')
        let regx = /^([a-zA-Z_\-\.0-9]+)@([a-zA-Z_\-\.0-9]+)\.([a-zA-Z]){2,7}$/;
        let str = mails.value;

        if(regx.test(str)){
            console.log('it match');
            Mailvalid.classList.add('hidden');
        }else{
            console.log('it not match');
            Mailvalid.classList.remove('hidden');;
        }
    })

    pswrd.addEventListener('blur',()=>{
        console.log('pass blur')
        let regx = /^[a-zA-Z]([0-9a-zA-Z]){8,}$/;
        let str = pswrd.value;

        console.log(regx,str)

        if(regx.test(str)){
            console.log('it match');
            passvalid.classList.add('hidden');
        }else{
            console.log('it not match');
            passvalid.classList.remove('hidden');;
        }
    })
}

FormValidation();



// click to show pass
function showpass(){
    let pass = document.getElementById('pass');
    if(pass.type === 'password'){
        pass.type = 'text';
    }else{
        pass.type = 'password';
    }
}

// show user account page
function showUser(){

    let storedUserMail = localStorage.getItem('UserMail');
    
    let userMail = JSON.parse(storedUserMail) || [];

    let signinContainer = document.querySelector(".signin-container")
    let account = document.querySelector('.account');
    if(userMail != "" && Email1.value == Email.value && pass1.value == pass.value){
        account.style.display = 'block';
        signinContainer.style.display = "none";
    }
    else{
        account.style.display = 'none';
        signinContainer.style.display = "flex";
    }

    
    let storedUserData = localStorage.getItem('usersData');
    
    let usersData = JSON.parse(storedUserData) || [];
    
    if (storedUserMail.length > 0) {
        
        let UserName = document.querySelector('.UserName');
        let UserNumber = document.querySelector('.UserNumber');
        let userEmail = document.querySelector('.userEmail')
        let SecondMail = document.querySelector('.SecondMail')
        
        let UserFirstName = usersData[0].FirstName;
        let UserLastName = usersData[0].LastName;
        let UserPhone = usersData[0].PhoneNumber;
        let UserMailId = usersData[0].EmailAddress;
        
        UserName.innerHTML = UserFirstName + " " + UserLastName; 
        UserNumber.innerHTML = UserPhone;
        userEmail.innerHTML = UserMailId;
        SecondMail.innerHTML = UserMailId;
    }
    else{
        account.style.display = 'none';
        signinContainer.style.display = "flex";
    }
    
    emailPass();
}

showUser();

let Logout = document.querySelector('.Logout');
let popupModal = document.querySelector('#popup-modal');

Logout.addEventListener("click", () =>{
    popupModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

function ClosePopMenu(){
    popupModal.style.display = 'none';
    document.body.style.overflow = 'hidden';
};

function logOut(){
    let logOutPopUp = document.getElementById("logOutPopUp");
    logOutPopUp.style.visibility = 'visible';
    logOutPopUp.style.opacity = '1';
    localStorage.removeItem('UserMail');
    event.preventDefault();

    let popupModal = document.getElementById('popup-modal');
    popupModal.style.opacity = 0;

    setTimeout(() => {
        logOutPopUp.style.visibility = 'hidden';
        logOutPopUp.style.opacity = '0';
        window.location.href = "../index.html";
    }, 1000);

    let signinContainer = document.querySelector(".signin-container")
    let account = document.querySelector('.account');
    account.style.display = 'none';
    signinContainer.style.display = "flex";
}

// store email and pass data into localstorage
function emailPass(){
    let Email1 = document.getElementById("Email1");
    let pass1 = document.getElementById("pass1");

    let userMail = JSON.parse(localStorage.getItem('UserMail')) || [];

    let NewSign = {
        userEmail: Email1.value.trim(),
        UserPass: pass1.value
    };
    
    userMail.push(NewSign);
    
    localStorage.setItem('UserMail', JSON.stringify(userMail));
  
}