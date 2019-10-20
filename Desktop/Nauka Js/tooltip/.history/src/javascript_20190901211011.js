import Tooltip from './ninja-ui/tooltip'
import Dropdown from './ninja-ui/dropdown'
import Tabs from './ninja-ui/tabs'
import Snackbar from './ninja-ui/snackbar'
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
tabs.init()

//create snackabr
const snackbar = new Snackbar();
snackbar.init()

const button = document.querySelector('button');
button.addEventListener('click', () =>{
    snackbar.show('you clicke me :)')
});