/**
 * Sanita Tifentale (c11432632)
 */
/*global var*/
var selectedNav = null; // keep track of currently selected
var flag = 0;

/*navigation style on select*/
function selectNav(el) 
{
    if (selectedNav) // unselect selected
    { 
    	selectedNav.style.fontSize = 'inherit';
    }
    selectedNav = el; // new selected
    selectedNav.style.fontSize = 'large';
}

/*dropdown navigation*/
function openNav()
{
	if (flag % 2 == 0)
	{
		document.getElementById('navBar').style.display = 'block';
		flag = flag + 1;
	}
	else
	{
		document.getElementById('navBar').style.display = 'none';
		flag = flag + 1;
	}
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
    if (username == null || username.trim() == "") 
    {
    	document.getElementById('error').style.display = "block";
        return false;
    }
    /*if textarea is blank alert*/
    if (text == null || text.trim() == "")
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