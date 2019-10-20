class SnackBar{
    constructor(){
        this.snackbar = document.createElement('div')
    }
    init(){
        this.snackbar.classList.add('snackbark');
        document.querySelector('body').appendChild(this.snackbar)
    }
    show(message){
        this.snackbar.textContent = message;
        this.snackbar.classList.add('active')
    }
}
export {SnackBar as default}