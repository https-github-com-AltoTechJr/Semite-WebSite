const wrapperauthentication = document.querySelector('.wrapper-authentication');
const createaccountlink = document.querySelector('.create-account-link');

createaccountlink.onclick = (event) => {
    event.preventDefault();

    if (wrapperauthentication.classList.contains('active')) {
        wrapperauthentication.classList.remove('active');
    } else {
        wrapperauthentication.classList.add('active');
    }
}

const passwordField = document.getElementById('register-password');
const infoTextPassword = document.querySelector('.info-text-password');

passwordField.addEventListener('click', () => {
    infoTextPassword.style.display = 'block';
});

passwordField.addEventListener('blur', () => {
    infoTextPassword.style.display = 'none';
});

const select = document.getElementById('select');
const fileInput = document.querySelector('.authenttication-input.file');

select.addEventListener('change', function () {
    if (select.value === 'aluno-graduacao') {
        fileInput.style.display = 'block';
    } else {
        fileInput.style.display = 'none';
    }
});

