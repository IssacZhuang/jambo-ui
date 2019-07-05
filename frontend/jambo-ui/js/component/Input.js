class InputObject{
    constructor(node){
        this.inputFeild=node.querySelector('input');
        this.feedback=node.querySelector('.feedback');

        this.inputFeild.oninput=()=>{
            if(this.empty()){
                this.error('不能为空');
            }else{
                this.default('')
            }
        }
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
            feedback.classList.remove('error');
            feedback.innerHTML=msg;
        }
    }

    error(msg){
        let feedback=this.feedback;
        if(feedback){
            feedback.classList.add('error');
            feedback.classList.remove('success');
            feedback.innerHTML=msg;
        }
    }

    default(msg){
        let feedback=this.feedback;
        if(feedback){
            feedback.classList.add('success');
            feedback.classList.remove('error');
            feedback.innerHTML=msg;
        }
    }

    empty(){
        return this.get()=='';
    }
}

function Input(node){
    if(!node){
        return;
    }
    
    return new InputObject(node);
}
export default Input;