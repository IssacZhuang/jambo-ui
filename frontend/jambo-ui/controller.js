import Input from './js/component/Input'
import Axios from 'axios'

window.addEventListener('load', () => {
    let csrfField = document.head.querySelector('meta[name="csrf"]');
    let authFeild = document.head.querySelector('meta[name="auth"]');

    let auth = authFeild ? authFeild.getAttribute('content') : null;

    if (!auth) {
        console.warn('Nonce not exist');
        return;
    }

    Axios.defaults.headers.common['X-WP-Nonce'] = auth;

});

window.addEventListener('load', () => {
    let windowSignIn = document.body.querySelector('.view-content[key="sign-in"]');

    if (!windowSignIn) {
        console.warn('no sign in window');
        return;
    }

    let username = Input(windowSignIn.querySelector("[name='username']").parentElement);
    let password = Input(windowSignIn.querySelector("[name='password']").parentElement);
    let submitButton = windowSignIn.querySelector(".btn");

    if (!username) {
        console.warn('no username feild');
        return;
    }

    if (!password) {
        console.warn('no password feild');
        return;
    }

    if (!submitButton) {
        console.warn('no submit button');
        return;
    }

    submitButton.onclick = () => {

        Axios.post('http://develop.travelschool.cn/wp-json/jambo/v2/login', {
            username: username.get(),
            password: password.get()
        })
            .then((response) => {

            })
            .catch((response) => {

            });
        console.log('sended');
    }
});

//手机验证码登录窗口

window.addEventListener('load', () => {
    let windowSignInPhone = document.body.querySelector('.view-content[key="sign-in-phone"]');

    if (!windowSignInPhone) {
        console.warn('no phone sign in window');
        return;
    }
});

window.addEventListener('load', () => {
    let windowSignOn = document.body.querySelector('.view-content[key="sign-on"]');

    if (!windowSignOn) {
        console.log('no sign on window');
        return;
    }
});