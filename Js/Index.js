const wrapperauthentication = document.querySelector('.wrapper-authentication');
const createaccountlink = document.querySelector('.create-account-link');
const signuplink = document.querySelector('.signup-link');
const passwordField = document.getElementById('register-password');
const infoTextPassword = document.querySelector('.info-text-password');
const select = document.getElementById('select');
const fileInput = document.querySelector('.authenttication-input.file');
const customFileInput = document.querySelector('.custom-file-input');

createaccountlink.onclick = (event) => {
    event.preventDefault();

    if (wrapperauthentication.classList.contains('active')) {
        wrapperauthentication.classList.remove('active');
    } else {
        wrapperauthentication.classList.add('active');
    }
};

signuplink.onclick = (event) => {
    event.preventDefault();

    if (wrapperauthentication.classList.contains('active')) {
        wrapperauthentication.classList.remove('active');
    } else {
        wrapperauthentication.classList.add('active');
    }
};

passwordField.addEventListener('click', () => {
    infoTextPassword.style.display = 'block';

    if (window.innerWidth > 768) {
        customFileInput.style.marginTop = '30px';
    }
});

passwordField.addEventListener('blur', () => {
    infoTextPassword.style.display = 'none';

    if (window.innerWidth > 768) {
        customFileInput.style.marginTop = '0';
    }
});

select.addEventListener('change', function () {
    if (select.value === 'aluno-graduacao') {
        fileInput.style.display = 'block';
    } else {
        fileInput.style.display = 'none';
    }
});
