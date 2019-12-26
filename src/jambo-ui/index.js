import './css/index.scss';
import './js/UI';

/*window.onload = function () {
    const header = document.body.querySelector('.navbar');
    const modal =document.body.querySelector('.modal');

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
    function feedback(object){
        console.log(object);
        let feedback = object.parentElement.querySelector('.feedback');
        if(object.value==''){
            feedback.innerHTML='用户名不能为空';
            feedback.classList.add('error');
            return false;
        }else{
            feedback.innerHTML='';
            feedback.classList.remove('error');
            return true;
        }
    }
    modal.querySelector('#username').onchange = function() {
       feedback(this);
    };
    modal.querySelector('#password').onchange = function() {
        feedback(this);
    };
    modal.querySelector('.btn').onclick = function(){
        let isUsernameValid = feedback(modal.querySelector('#username'));
        let isPasswordValid = feedback(modal.querySelector('#password'));
    }
}*/

