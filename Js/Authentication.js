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
