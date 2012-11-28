// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  

// This function starts the course.  This function should be called first to ensure that
// all session variables are created
function loadOLM()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage == "undefined" || sessionStorage.disabled )
	{
		alert( "You must enable cookies for this course to work properly." );
	}
	else
	{
		// if it is enabled, checked to see if this course was started
		// if it was not able to retrieve, the key "course_started", then
		// then this is the first time we are running the course
        if( !sessionStorage.getItem( "course_started" ) )
        {
        	// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    		sessionStorage.setItem( "course_started", "1" );
    			
			// set the values you want to persist throughout the website here
    		sessionStorage.setItem( "home", "0" );
    		sessionStorage.setItem( "page1", "0" );
    		sessionStorage.setItem( "page2", "0" );
    		sessionStorage.setItem( "page3", "0");
    		sessionStorage.setItem( "page4", "0" );
    		sessionStorage.setItem( "page5", "0" );
    		sessionStorage.setItem( "page6", "0" );
    		sessionStorage.setItem( "page7", "0" );
    		sessionStorage.setItem( "page8", "0" );
    		sessionStorage.setItem( "page9", "0" );
        
        
        }
	}
	
	// initializeSCORM after the OLM environment has been set up
	initializeSCORM();
}

function hideTest()
{
	document.getElementById("test-link").style.display = "none";
	document.getElementById("certificate").style.display = "none";
	document.getElementById("study").style.display = "none";
	document.getElementById("refs").style.display = "none";
}

function visitHome()
{
	sessionStorage.setItem("home", "visited");
	showAssessment();
}

function visitPage1()
{
	sessionStorage.setItem("page1", "visited");
	showAssessment();
}

function visitPage2()
{
	sessionStorage.setItem("page2", "visited");
	showAssessment();
}

function visitPage3()
{
	sessionStorage.setItem("page3", "visited");
	showAssessment();
}

function visitPage4()
{
	sessionStorage.setItem("page4", "visited");
	showAssessment();
}

function visitPage5()
{
	sessionStorage.setItem("page5", "visited");
	showAssessment();
}

function visitPage6()
{
	sessionStorage.setItem("page6", "visited");
	showAssessment();
}

function visitPage7()
{
	sessionStorage.setItem("page7", "visited");
	showAssessment();
}

function visitPage8()
{
	sessionStorage.setItem("page8", "visited");
	showAssessment();
}

function visitPage9()
{
	sessionStorage.setItem("page9", "visited");
	showAssessment();
}

function showAssessment()
{
	var homeVisited = sessionStorage.getItem( "home" );
	var page1Visited = sessionStorage.getItem( "page1" );
	var page2Visited = sessionStorage.getItem( "page2" );
	var page3Visited = sessionStorage.getItem( "page3" );
	var page4Visited = sessionStorage.getItem( "page4" );
	var page5Visited = sessionStorage.getItem( "page5");
	var page6Visited = sessionStorage.getItem( "page6");
	var page7Visited = sessionStorage.getItem( "page7");
	var page8Visited = sessionStorage.getItem( "page8");
	var page9Visited = sessionStorage.getItem( "page9");
	
	
	if( page1Visited == "visited" && page2Visited == "visited" && page3Visited == "visited" && page4Visited == "visited" && page5Visited == "visited" && page6Visited == "visited" && page7Visited == "visited" && page8Visited == "visited" && page9Visited == "visited")
		
	{
		document.getElementById("test-link").style.display = "inline";
		document.getElementById("study").style.display = "inline";
		document.getElementById("refs").style.display = "inline";
	
	}
	
}

// This function initializes the course by connecting the OLM to the LMS 
// The SCORM connection is done once at the beginning of the course
// Another function, reportScores(), will connect again when the 
// user is done with the online learning module
function initializeSCORM()
{
	var lmsConnected = oScorm.init();
	
	// we only want to run initializeSCORM once, so use course_started
	// to keep track of how many times we have initialized 
	var getStarted = sessionStorage.getItem( "course_started" );
	
	// only do the following if we are connected to the LMS and
	// if course_started has a value of 1
	if( lmsConnected && getStarted == "1" )
	{
        // always set the status to incomplete
		oScorm.set( "cmi.success_status", "unknown" );
		oScorm.set( "cmi.lesson_status", "incomplete" );
		oScorm.set( "cmi.completion_status", "incomplete" );
		
		// change course_started to another value so that this initializeSCORM
		// does not run the initialization code again; otherwise, this OLM
		// will be incomplete if the user goes back to the first page even after
		// passing the exam 
		sessionStorage.setItem( "course_started", "2" );
    		
		// retrieve the LMS values here and integrate them into your course
		
	}
}

// This function reports the score from the assessment to the LMS
// This should only be called when the user submits the answers to the quiz
function reportScores()
{	
	// these are some test values
	oScorm.set("cmi.score.raw", 83 );
	oScorm.set("cmi.score.min", 0 );
	oScorm.set("cmi.score.max", 100 );
	oScorm.set("cmi.score.scaled", .83 );
	
	// Set the values and status here
	// for now, just set it to passed and completed
	oScorm.set( "cmi.success_status", "passed" );
	oScorm.set( "cmi.completion_status", "completed" );
	oScorm.set( "cmi.lesson_status", "passed" );

	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.
function finishOLM()
{
	oScorm.save();
	oScorm.quit();
}

// This function hides the final assessment until all topics have been clicked.
