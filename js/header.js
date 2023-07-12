function scrolldown(){
    var headerb = document.getElementById("aniHeader");
    if(window.scrollY > 0){
        headerb.classList.add("header__scroll");
    }
    else{
        headerb.classList.remove("header__scroll");
    }
}
window.addEventListener("scroll", scrolldown);
