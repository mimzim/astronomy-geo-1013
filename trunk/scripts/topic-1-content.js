function startCourse()

	

{



	// check to see if cookies is enabled, otherwise, this won't work

	if( typeof sessionStorage === "undefined" || sessionStorage.disabled )

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

    		sessionStorage.setItem( "course_started", "1" );

    		sessionStorage.setItem( "Ptolemy", "0" );

    		sessionStorage.setItem( "Copernicus", "0" );

    		sessionStorage.setItem( "Brahe", "0" );

    		sessionStorage.setItem( "Kepler", "0" );
    		
    		sessionStorage.setItem( "Galileo", "0" );

        }

	}

}
function visitPtolemy()

{

sessionStorage.setItem( "Ptolemy", "visited" );



showTest();

 

}

function visitCopernicus()

{

sessionStorage.setItem( "Copernicus", "visited" );



showTest();

 

}


function visitBrahe()

{

sessionStorage.setItem( "Brahe", "visited" );

showTest();

}



function visitKepler()

{

sessionStorage.setItem( "Kepler", "visited" );



showTest();

}

function visitGalileo()

{

sessionStorage.setItem( "Galileo", "visited" );



showTest();

 

}
//this function will check to see if every page was visited

// if so, show the Test link



function showTest()

{



var PtolemyVisited = sessionStorage.getItem( "Ptolemy" );

var CopernicusVisited = sessionStorage.getItem( "Copernicus" );

var BraheVisited = sessionStorage.getItem( "Brahe" );

var KeplerVisited = sessionStorage.getItem( "Kepler" );

var GalileoVisited = sessionStorage.getItem( "Galileo" );
	

	

	if( PtolemyVisited = "visited" && CopernicusVisited == "visited" && BraheVisited == "visited" && KeplerVisited == "visited" && GalileoVisited == "visited" )

	

	{

	document.getElementById( "selfCheck1" ).style.display = "inline";

	

	}



} 

