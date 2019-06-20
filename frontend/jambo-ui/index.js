import './css/index.scss';

var $ = function (arg) {
    return document.querySelector(arg);
}

window.onload=function(){
    $('#menu-button').onclick = function () {
        $('.nav-link-container').classList.toggle('open');
    }
}