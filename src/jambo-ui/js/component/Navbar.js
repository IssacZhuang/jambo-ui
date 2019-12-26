function Navbar(node) {
    if(!node){
        return;
    }

    let menuButton = node.querySelector('.menu-button');
    let navLinkContainer = node.querySelector('.nav-link-container');

    if(!menuButton||!navLinkContainer){
        return;
    }

    menuButton.addEventListener('click',()=>{
        navLinkContainer.classList.toggle('open');
    })
}
export default Navbar;