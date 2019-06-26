import Navbar from './component/Navbar';
import {Modal,bindTrigger} from './component/Modal';

window.onload=function(){
    const Navbars=document.body.querySelectorAll('.navbar');
    const ModalTriggers=document.body.querySelectorAll('[modal]');

    Navbars.forEach((item)=>{
        Navbar(item);
    });

    ModalTriggers.forEach((item)=>{
        let target = item.getAttribute('modal');
        let modalNode = document.body.querySelector(`#${target}`);
        let modal = Modal(modalNode);

        if(modal){
            bindTrigger(modal,item);
        }
    });
}
