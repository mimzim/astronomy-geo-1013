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

    		sessionStorage.setItem( "Geocentricity", "0" );

    		sessionStorage.setItem( "Heliocentricity", "0" );

    		sessionStorage.setItem( "Stellar Parallax", "0" );

    		sessionStorage.setItem( "Retrograde Motion", "0" );
    		
    		

        }

	}

}
function visitGeocentricity()

{

sessionStorage.setItem( "Geocentricity", "visited" );



showTest();

 

}

function visitHeliocentricity()

{

sessionStorage.setItem( "Heliocentricity", "visited" );



showTest();

 

}


function visitStellarParallax()

{

sessionStorage.setItem( "Stellar Parallax", "visited" );

showTest();

}



function visitRetrogradeMotion()

{

sessionStorage.setItem( "Retrograde Motion", "visited" );



showTest();

}


//this function will check to see if every page was visited

// if so, show the Test link



function showTest()

{

var GeocentricityVisited = sessionStorage.getItem( "Geocentricity" );

var HeliocentricityVisited = sessionStorage.getItem( "Heliocentricity" );

var StellarParallaxVisited = sessionStorage.getItem( "Stellar Parallax" );

var RetrogradeMotionVisited = sessionStorage.getItem( "Retrograde Motion" );



	if( GeocentricityVisited = "visited" && HeliocentricityVisited == "visited" && StellarParallaxVisited == "visited" && RetrogradeMotionVisited == "visited" )

	

	{

	document.getElementById( "selfCheck2" ).style.display = "inline";

	

	}



} 

