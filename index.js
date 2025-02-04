
function showForm(type) {
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('loginForm').classList.add('d-none');
    
    if (type === 'register') {
        document.getElementById('registerForm').classList.remove('d-none');
    } else if (type === 'login') {
        document.getElementById('loginForm').classList.remove('d-none');
    }
}

function register() {
    const firstname = document.getElementById('regFirstname').value;
    const lastname = document.getElementById('regLastname').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    
    if (!firstname) {
        alert("Please enter your fast name.");
        return;
    }
    if (!lastname) {
        alert("Please enter your last name.");
        return;
    }
    if (!email) {
        alert("Please enter your email.");
        return;
    }
    if (!password) {
        alert("Please enter your password.");
        return;
    }


    const user = { firstname, email, password }
    localStorage.setItem(email, JSON.stringify(user))
    
    alert("Registration Successful!! You can now login")

    document.getElementById('regFirstname').value ='';
    document.getElementById('regLastname').value ='';
    document.getElementById('regEmail').value ='';
    document.getElementById('regPassword').value = '';
    
    showForm('login');
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const InputPassword = document.getElementById('loginPassword').value;

    if (!email) {
        alert("Email field is required!")
        return;
    }
    if (!InputPassword) {
        alert("Password field is required!")
    }

    const user = localStorage.getItem(email)
    
    if (!user) {
        alert("User not exist!")
        return;
    }

    const perseUser = JSON.parse(user)
    
    if (InputPassword != perseUser.password) {
        alert("Incorrect Password")
        return;
    }

    alert("Login Successful!! Welcome " + perseUser.fullname)

    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}