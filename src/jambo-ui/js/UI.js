import Navbar from './component/Navbar';
import { Modal, modalBindTrigger } from './component/Modal';
import { View, viewBindTrigger } from './component/View';

window.addEventListener('load', () => {
    const Navbars = document.body.querySelectorAll('.navbar');

    const ModalNodes=document.body.querySelectorAll('.modal');
    const Modals =[];
    const ModalTriggers = document.body.querySelectorAll('[modal]');

    const ViewNodes =document.body.querySelectorAll('.view');
    const Views = [];
    const ViewTriggers = document.body.querySelectorAll('[view]');

    //Navbr

    Navbars.forEach((item) => {
        Navbar(item);
    });

    //Modal

    ModalNodes.forEach(node => {
        Modals.push(Modal(node))
    });

    ModalTriggers.forEach(trigger => {
        let target = trigger.getAttribute('modal');
        
        Modals.forEach(modal => {

            if(target==modal.id){
                modalBindTrigger(modal, trigger);
            }
        });
    });

    //View

    ViewNodes.forEach(node => {
        Views.push(View(node));
    });

    ViewTriggers.forEach(trigger => {
        let target = trigger.getAttribute('view');
        let key = trigger.getAttribute('view-key');

        Views.forEach(view => {
            if (key&&target==view.id) {
                viewBindTrigger(view, trigger, key)
            }
        });
    });
});
