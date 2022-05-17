const company = document.querySelector('#company');
const features = document.querySelector('#features');
const main = document.querySelector('.main');
const menuCollapsed = document.querySelector('.navbar__menu-collapsed');
const navbarArrowDownC = document.querySelector('.navbar__arrow-downC');
const navbarArrowDownF = document.querySelector('.navbar__arrow-downF');
const navbarArrowUp = document.querySelector('.navbar__arrow-up');
const navbarArrowUpC = document.querySelector('.navbar__arrow-upC');
const navbarArrowUpF = document.querySelector('.navbar__arrow-upF');
const navbarClose = document.querySelector('.navbar__close');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarSubListsCompany = document.querySelector('.navbar__sub-lists-company');
const navbarSubListsFeatures = document.querySelector('.navbar__sub-lists-features');

company.addEventListener('click', displayCompanySubmenu)
features.addEventListener('click', displayFeaturesSubmenu);
navbarClose.addEventListener('click', hideCollapsedMenu);
navbarMenu.addEventListener('click', showCollapsedMenu);

function showCollapsedMenu(){
    main.classList.add('low-brightness');
    menuCollapsed.setAttribute('data-visible', 'true');
    document.body.style.backgroundColor = "hsl(0, 0%, 41%)";
}

function hideCollapsedMenu(){
    main.classList.remove('low-brightness');
    menuCollapsed.setAttribute('data-visible', 'false');
    document.body.style.backgroundColor = "unset";
}

function displayFeaturesSubmenu(){
    const visible = navbarSubListsFeatures.getAttribute('data-visible');
    if(visible === 'false'){
        navbarArrowDownF.classList.add('active');
        navbarArrowUpF.classList.remove('active');
        navbarSubListsFeatures.setAttribute('data-visible', 'true');
    }else{
        navbarArrowDownF.classList.remove('active');
        navbarArrowUpF.classList.add('active');
        navbarSubListsFeatures.setAttribute('data-visible', 'false');
    }
}

function displayCompanySubmenu(){
    const visible = navbarSubListsCompany.getAttribute('data-visible');
    if(visible === 'false'){
        navbarArrowDownC.classList.add('active');
        navbarArrowUpC.classList.remove('active');
        navbarSubListsCompany.setAttribute('data-visible', 'true');
    }else{
        navbarArrowDownC.classList.remove('active');
        navbarArrowUpC.classList.add('active');
        navbarSubListsCompany.setAttribute('data-visible', 'false');
    }
}