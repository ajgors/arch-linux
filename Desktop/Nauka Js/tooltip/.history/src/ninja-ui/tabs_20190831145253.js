class Tabs {
    constructor(container){
        this.container = container;
        this.tabs = container.querySelector('.trigger');

    }
    init(){
        this.tabs.forEach(tab =>{
            tab.addEventListener('click', e=>{
                this.toggleTabs(e)
                this.toggleContent(e)
            })
        })
    }
    toggleTabs(e){
        //remove current acive classes
        this.tabs.forEach(tab => tab.classList.remove('active'))
        //add new active active calss
        e.target.classList.add('active')
    }
    toggleContent(e){
        //remove current acitve classes from content
        this.container.querySelectorAll('.content').forEach(item =>{
            item.classList.remove('active');
        })
        //add new active class to content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector)
        content.classList.add('active')
    }
}