import Tooltip from './ninja-ui/tooltip'
import Dropdown from './ninja-ui/dropdown'
import Tabs from './ninja-ui/tabs'
//create  tooltop

const tooltip = new Tooltip(document.querySelector('.tooltip'))

tooltip.init()

//create dropdown 
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown =>{
    const instance = new Dropdown(dropdown)
    instance.init()
})

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'))