// This function processes the quiz data
function hideCertificate()
{
	
}

function submitQuiz1()
{
	var numberCorrect = 0;
	var q1 = document.forms.quiz1.question1;
	var q2 = document.forms.quiz1.question2;
	var q3 = document.forms.quiz1.question3;
	var q4 = document.forms.quiz1.question4;
	var q5 = document.forms.quiz1.question5;
	var q6 = document.forms.quiz1.question6;
	var q7 = document.forms.quiz1.question7;
	var q8 = document.forms.quiz1.question8;
	var q9 = document.forms.quiz1.question9;
	var q10 = document.forms.quiz1.question10;
	var q11 = document.forms.quiz1.question11;
	var q12 = document.forms.quiz1.question12;
	var q13 = document.forms.quiz1.question13;
	var q14 = document.forms.quiz1.question14;
	var q15 = document.forms.quiz1.question15;
	var q16 = document.forms.quiz1.question16;
	var q17 = document.forms.quiz1.question17;
	var q18 = document.forms.quiz1.question18;
	var q19 = document.forms.quiz1.question19;
	var q20 = document.forms.quiz1.question20;
	
	
	if( q1[0].checked == true)
	{
			numberCorrect = numberCorrect + 1;
	}
	
	if( q2[0].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	
	if(q3[3].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	
	if(q4[1].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	
	if(q5[3].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q6[3].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q7[4].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q8[1].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q9[0].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q10[3].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q11[1].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q12[3].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q13[1].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q14[3].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q15[2].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q16[0].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q17[4].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q18[0].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q19[1].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	if(q20[0].checked == true)
		{
			numberCorrect = numberCorrect + 1;
		}
	
	var score = numberCorrect / 20 * 100;
	alert("Your score is " + score + "%");
	
	if(score >= 70)
	{
		alert("You passed!")
		document.getElementById("certificate").style.display = "inline";
	}

if(score < 70)
	{
		alert("Try again.")
	}
	
	// call the function to report scores
	parent.reportScores();
}