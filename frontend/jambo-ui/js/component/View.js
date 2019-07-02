class ViewObject{
    constructor(node){
        this.default=node.getAttribute('default');
        this.contents=node.querySelectorAll('.view-content');
        
        if(this.default){
            this.open(this.default)
        }
    }

    open(key){
        this.contents.forEach(element => {
            if(element.getAttribute('key')==key){
                element.classList.add('open')
            }else{
                element.classList.remove('open')
            }
        });
    }
}

function View(node){
    if(!node){
        return;
    }

    return new ViewObject(node);
}

function viewBindTrigger(view,trigger,key){
    if(!view||!trigger){
        return;
    }

    trigger.onclick=()=>{
        view.open(key);
    }
}

export {View,viewBindTrigger};