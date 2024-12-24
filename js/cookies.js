/*I think it traverses through cookies to look for a specific one?
I assume it's checking to see if there are any cookies of the same name as the parameter, if not then return none.*/

function getCookie(c_name)
{
	if (document.cookie.length>0)
	{
		c_start=document.cookie.indexOf(c_name);
		if (c_start!=-1)
		{ 
			c_start=c_start + c_name.length+1; 
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) 
			{
               c_end=document.cookie.length;
            }
		return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return "none";
}


/*Function is setting an expiration date, name, and value for the cookie*/
function setCookie(c_name,value)
{
	var expdate=new Date();
	expdate.setDate(expdate.getDate()+365);
	document.cookie=c_name+ "=" +value+";expires="+expdate.toGMTString();
}


/*This should be the first function that the document calls when the page loads.
The checkCookie() method calls on the getCookie() to see if there is a cookie that already exists.
If there isn't a cookie then this function will call on the setCookie() function to make a new cookie,
if there is already a cookie then the function will send out an alert then update the cookie.*/
function checkCookie()
{
	var previsit=getCookie('lastvisit');
	var newname=getCookie('friendname');
	
	if (previsit!=null && previsit!="none")
	{
		/*If I already got your name then I shall address you by your name, we have become friends.*/
		if(newname!=null && newname!="none")
		{
			alert( 'Welcome back, '+ newname + '! I hope you\'ve been doing well.\n\nYou visited me ' + previsit + ' times! I hope to see you again!');
			parseInt('previsit',10);
			++previsit;
			previsit.toString();
			setCookie('lastvisit',previsit);
			setCookie('friendname',newname);
		}
		/*I don't know your name yet, so I'd like to get on your next visit after the first one.
		  If a friend is not provided then I will call you friend by default.*/
		else
		{
			let promptname = prompt('Hey, it\'s your ' + previsit + 'nd visit! I did not get your name the last time we met.\n\nCan you please tell me your name?');
			if(promptname == null)
			{
				promptname = 'friend';
			}
			alert('Thank you, ' + promptname + ', I think we can be great friends together!');
			parseInt('previsit',10);
			++previsit;
			previsit.toString();
			setCookie('lastvisit',previsit);
			setCookie('friendname',promptname);
		}
   }
  else 
  {
	alert( 'Hello, this is Brandy Nguyen welcoming you on your first visit to my website!\n\nEnjoy your time here!');
	setCookie('lastvisit',2);
  }
}