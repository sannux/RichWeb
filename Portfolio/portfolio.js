/**
 * Sanita Tifentale (c11432632)
 */
/*global var*/
var selectedNav = null; // keep track of currently selected

/*navigation style on select*/
function selectNav(el) 
{
    if (selectedNav) // unselect selected
    { 
    	selectedNav.style.color = 'white';
    	selectedNav.style.fontSize = 'inherit';
    }
    selectedNav = el; // new selected
    el.style.color = '#2e2e2e';
    selectedNav.style.fontSize = 'large';
}
/*validation for the contact form*/
function validateForm() 
{
	var username = document.forms["contactForm"]["userName"].value;
	var email = document.forms["contactForm"]["userEmail"].value;
	var text = document.forms["contactForm"]["message"].value;
	
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    
    /*if email is incorrect alert*/
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) 
    {
    	document.getElementById('error').style.display = "block";
        return false;
    }
    /*if username is blank alert*/
    else if (username == null || trim(username == "")) 
    {
    	document.getElementById('error').style.display = "block";
        return false;
    }
    /*if textarea is blank alert*/
    else if (text == null || trim(text == ""))
    {
    	document.getElementById('error').style.display = "block";
        return false;
    }
    else
    {
    	document.getElementById('error').style.display = "none";
    	return true;
    }
}