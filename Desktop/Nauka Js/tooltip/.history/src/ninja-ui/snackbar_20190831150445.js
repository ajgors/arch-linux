class SnackBar{
    constructor(){
        this.snackbar = document.createElement('div')
    }
    init(){
        this.snackbar.classList.add('snack-bark');
        document.querySelector('body').appendChild(this.snackbar)
    }
}
export {SnackBar as default}