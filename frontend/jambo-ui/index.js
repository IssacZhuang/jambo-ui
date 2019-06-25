import './css/index.scss';
import Axios from 'axios';

window.onload = function () {
    const header = document.body.querySelector('.navbar');
    console.log(header);

    header.querySelector('#menu-button').onclick = function () {
        header.querySelector('.nav-link-container').classList.toggle('open');
    };
    header.querySelector('#sign-in').onclick = function(){
        header.querySelector('.modal-container').classList.add('open');
        document.body.classList.add('modal-opened');
    }
    header.querySelector('.close-button').onclick = function(){
        header.querySelector('.modal-container').classList.remove('open');
        document.body.classList.remove('modal-opened');
    }
}