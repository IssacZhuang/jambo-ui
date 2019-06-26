class InputObject{
    constructor(node){
        this.inputFeild=node.querySelector('input');
        this.feedback=node.querySelector('.feedback');
    }

    get(){
        if(this.inputFeild){
            return this.inputFeild.value;
        }
        return;
    }

    success(msg){
        let feedback=this.feedback;
        if(feedback){
            feedback.classList.add('success');
            feedback.innerHTML=msg;
        }
    }

    error(msg){
        let feedback=this.feedback;
        if(feedback){
            feedback.classList.add('error');
            feedback.innerHTML=msg;
        }
    }
}

function Input(node){
    if(!node){
        return;
    }
    
    return new InputObject(node);
}
export default Input;