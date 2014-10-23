/**
 * 
 */
function()
{
	window.scroll
	(
		function()
		{
			var pos = window.scrollTop();
			  
			  if(pos<$("#services").offset().top - 91){
				  select_nav("start");
			  }else if(pos>($("#services").offset().top - 91) && pos<($("#services").offset().top + $("#services").height()) ){
				  select_nav("services");
			  }else if(pos>($("#work").offset().top - 91) && pos<($("#work").offset().top + $("#work").height() + 90) ){
				  select_nav("work");
			  }else if( pos>($("#clients").offset().top - 91) && pos<($("#clients").offset().top + $("#clients").height() + 90) ){
				  select_nav("clients");
			  }else if( pos>($("#book").offset().top - 91) && pos<($("#book").offset().top + $("#book").height() + 90) ){
				  select_nav("book");
			  }else{
				  select_nav("contact");
		}
	)
}