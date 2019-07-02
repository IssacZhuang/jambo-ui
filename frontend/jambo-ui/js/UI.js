import Navbar from './component/Navbar';
import {Modal,modalBindTrigger} from './component/Modal';
import {View,viewBindTrigger} from './component/View';

window.onload=function(){
    const Navbars=document.body.querySelectorAll('.navbar');
    const ModalTriggers=document.body.querySelectorAll('[modal]');
    const ViewTriggers=document.body.querySelectorAll('[view]');

    Navbars.forEach((item)=>{
        Navbar(item);
    });

    ModalTriggers.forEach((item)=>{
        let target = item.getAttribute('modal');
        let modalNode = document.body.querySelector(`#${target}`);
        let modal = Modal(modalNode);

        if(modal){
            modalBindTrigger(modal,item);
        }
    });

    ViewTriggers.forEach(item => {
        let target = item.getAttribute('view');
        let key=item.getAttribute('view-key');
        let viewNode = document.body.querySelector(`#${target}`);

        console.log(item);
        let view=View(viewNode);

        

        if(key&&view){
            viewBindTrigger(view,item,key)
        }
    });
}
