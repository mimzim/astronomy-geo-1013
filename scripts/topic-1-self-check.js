var oCurrentDragger = null;		


var aDraggerBays = new Array( 6 );	


for( var i = 0; i < aDraggerBays.length; i = i + 1 )
{
	aDraggerBays[ i ] = -1;
}


function processForm()
{
	var bCorrect = true;
	
	for( var i = 0; i < aDraggerBays.length; i = i + 1 )
	{
		if( aDraggerBays[ i ] != i )
		{
			bCorrect = false;
			break;
		}
	}
	
	if( bCorrect )
	{
		document.getElementById( "response" ).innerHTML = "Correct!";
	}
	else
	{
		document.getElementById( "response" ).innerHTML = "Incorrect!  <a href='topic-1-8-self-check.html'>click here to try again</a>";
	}
}

function startDrag( evt )
{    
	evt.dataTransfer.effectAllowed = "move";

	evt.dataTransfer.setData( "sData", evt.target.getAttribute( "value" ) );
    evt.dataTransfer.setDragImage( evt.target, 75, 50 );
    oDragger = evt;
    
    oCurrentDragger = evt.target;
    return true;   
}

function dropDragger( evt )
{
	var nDraggerBayIndex = evt.target.getAttribute( "value" );
	
	if( evt.stopPropagation )
	{
		evt.stopPropagation();
	}
	
	if( aDraggerBays[ nDraggerBayIndex ] == - 1 )
	{
		var nDraggerIndex = evt.dataTransfer.getData( "sData" );
		aDraggerBays[ nDraggerBayIndex ] = nDraggerIndex; 
		
		
		evt.target.innerHTML = "<div class='dragger'>" + oCurrentDragger.innerHTML + "</div>";
		
		evt.target.style.border = "none";
		oCurrentDragger.style.display = "none";
	}
	return false;
}

function isTaken( nIndex )
{
	if( aDraggerBays[ nIndex ] == -1 )
		return false;
	
	return true;
}

function dragOver( evt )
{
	return false;
}

function enterDragger( evt )
{
	return true;
}

function endDrag( evt )
{
	return false;
}