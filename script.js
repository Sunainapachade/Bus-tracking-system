const menuIcon = document.querySelector('.menu-icon')
const sideNavigation = document.querySelector('.side-nav')
const sideNavCloseBtn = document.querySelector('.close-btn')
menuIcon.addEventListener('click', handleSideNavClick)
sideNavCloseBtn.addEventListener('click', handleSideNavClick)


function handleSideNavClick() {
    if (sideNavigation.style.width === '') {
        sideNavigation.style.width = '30rem';
    }
    else {
        sideNavigation.style.width = '';
    }
}
function successCallback(position){
    console.log(`Position: 
    ${position}`)
}

function formHandler() {
    let username = document.getElementById('name').value
    let password = document.getElementById('password').value
    
    if (username === 'svpcet' && password === 'password') {
        window.open('./main.html', '_parent');
    }
    else {
        document.querySelector('.msg-txt').innerText = 'Invalid Username or password'
    }
}