const navigation = document.querySelector('.navigation');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    navigation.style.display = 'flex';
    navigation.style.top= '0';
}

function close(){
    navigation.style.display = 'none';
    navigation.style.top = '100%';
}


