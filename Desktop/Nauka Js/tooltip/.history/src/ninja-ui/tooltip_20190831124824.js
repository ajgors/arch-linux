class Tooltip{
    constructor(element){
        this.element = element;
        this.message = element.getAttribute('data-message')
    }
}