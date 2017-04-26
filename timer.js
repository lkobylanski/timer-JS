function counting()
{	
	var now = new Date();	

	var day = now.getDate();
	var week = now.getDay();
	var month = now.getMonth()+1;
	var year = now.getFullYear();

	switch(week)
	{
	case 1:
		week = "Monday";
		break;
	case 2:
		week = "Tuesday";
		break;
	case 3:
		week = "Wednesday";
		break;
	case 4:
		week = "Thursday";
		break;
	case 5:
		week = "Friday";
		break;
	case 6:
		week = "Saturday";
		break;
	case 7:
		week = "Sunday";
		break;
	}

	switch(month)
	{
	case 1:
		month = "January";
		break;
	case 2:
		month = "February";
		break;
	case 3:
		month = "March";
		break;
	case 4:
		month = "April";
		break;
	case 5:
		month = "May";
		break;
	case 6:
		month = "June";
		break;
	case 7:
		month = "July";
		break;
	case 8:
		month = "August";
		break;
	case 9:
		month = "September";
		break;
	case 10:
		month = "October";
		break;
	case 11:
		month = "November";
		break;
	case 12:
		month = "December";
		break;
	}

	var h = now.getHours();	
	if(h < 10) h = "0" + h;	
	
	var m = now.getMinutes();	
	if(m < 10) m = "0" + m;	
	
	var s = now.getSeconds();		
	if(m < 10) s = "0" + s;

document.getElementById("clock").innerHTML = week + "/" + day + "/" + month + "/" + year + " | " + h + ":" + m + ":" + s; /

setTimeout("counting()", 1000);
}