class ModalObject{
    constructor(node){
        this.node=node;
        if(!node){
            return;
        }
    
        let closeButton = node.querySelector('.close-button');
    
        if(closeButton){
            closeButton.onclick=()=>{
                node.classList.remove('open');
                document.body.classList.remove('modal-opened')
            }
        }
    }

    open(){
        this.node.classList.add('open');
        document.body.classList.add('modal-opened')
    }
}

function Modal(node){
    if(!node){
        return;
    }

    return new ModalObject(node);
}

function modalBindTrigger(modal,trigger){
    if(!modal||!trigger){
        return;
    }

    trigger.onclick=()=>{
        modal.open();
    }
}

export {Modal,modalBindTrigger};