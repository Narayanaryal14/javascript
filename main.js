//class="submission-form"
/*
<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>*/

function validation()
{
	var result= true;
	var i=document.getElementsByTagName("email")[1].value;
	document.write(i);
	//if(i[0].value.length==0)
	 result=false;
	return (result);
}





/*function validation()
{
	var result= true;
	var i=document.getElementsByTagName("input");
	if(i[0].value.length==0)
	 result=false;
	return (result);
}*/


/*function f1()
{
	var x=document.getElementsByTagName("p");
	 //alert(x[0].innerHTML);
	 // alert(x[1].innerHTML);
	 //alert(x.innerHTML);
	 //x.innerHTML="This is modified content by Inner HTML";
	
}*/

/*  accessing style
function f1()
{
	var x=document.getElementById("p1");
	x.style.color="green";
	x.style.fontSize="50px";
	
}*/

/*function effect()
{
 var x=document.getElementById("Para1");
 x.style.backgroundColor="lightblue";
	
}
function effectback()
{
 var x=document.getElementById("Para1");
 x.style.backgroundColor="white";
	
}*/

/*var x=5,i=1;
var x = confirm("Do you want proceed with red color");
if(x)
{
  document.getElementsByTagName("body")[0].style.backgroundcolor="red";	
}

while(i<=10)
{
document.write(x+" x "	+i +" ="+x*i +"<br>");
i++;
}*/
/*
<p id="Para1" onmouseover="effect()" onmouseout="effectback()">This is my first paragraph<p>
*/
 /*<form class="modal-content animate" action="registranation.php" method="get" onSubmit=" return validation()">
  <div id="id01" class="modal">
	   Name :<input type="text" name="username" /> <br>
	   Email:<input type="text" name="email" required /> <br>
	   <input type="submit" />
   </div>>	
</form>*/