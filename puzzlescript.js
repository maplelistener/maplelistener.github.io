function askOld(){
  var year = prompt("How old are you? (Please answer with numbers) ")
  var name = prompt("What's your name?")
  alert("Hello! "+ year + " years old " + name + ", we will provide you some puzzles that fit for you~")
  return year
}

var year1 = askOld()

//if(year1 >= 18){
  //window.location.href="puzzle2.html"
//}

function greet()
{
	var time=new Date().getHours();
	if(time<12)
		alert("Good morning");
	else if(time<18)
		alert("Good afternoon");
	else
		alert("Good night");
}

function coreCount()
{
	var cores=0;
	var qestions=document.getElementsByClassName("question")
	for(var i=0;i<qestions.length;i++)
	{
		var count=0;
		var flag=1;
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++)
		{
			if(answer[j].checked)
			{
				if(answer[j].value*1<0)
				{
					flag=0;
					break;
				}
				else
					count+=answer[j].value*1;
			}
		}
		if(flag==1)
			cores+=count;
	}
	alert("Your score is "+cores);
}

function showWhichWrong()
{
	var qestions=document.getElementsByClassName("question")
	for(var i=0;i<qestions.length;i++)
	{
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++)
		{
			if(answer[j].checked)
			{
				if(answer[j].value*1<=0)
				{
					x=document.getElementById(i+1);
					x.style.color="red";
				}
			}
		}
	}
	for(var i=0;i<qestions.length;i++)
		{
			var answer=document.getElementsByName("answer"+(i+1));
			for(var j=0;j<answer.length;j++)
			{
				if(!answer[j].checked)
				{
					if(answer[j].value*1>0)
					{
						answer[j].style.backgroundColor="red";
					}
				}
			}
		}
}
