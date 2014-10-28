/**
 * 
 */
var selectedNav = null; // keep track of currently selected

function selectNav(el) 
{
    if (selectedNav) // unselect selected
    { 
    	selectedNav.style.color = 'white';
    	selectedNav.style.textShadow = 'none';
    }
    selectedNav = el; // new selected
    el.style.textShadow = '0 0 5px #FFFFFF';
    el.style.color = '#2e2e2e';
}