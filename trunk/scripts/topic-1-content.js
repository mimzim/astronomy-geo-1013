//mine
var number_of_clicks = 0;
var TychoBraheb_clicks = 0;
var NicolausCopernicus_clicks = 0;
var GalileoGalileg_clicks = 0;
var JohannesKeplek_clicks = 0;
var ClaudiusPtolemyp_clicks 0;


function printTychoBrahe()
{
  number_of_clicks = number_of_clicks + 1;
       TychoBrahb_clicks = TychoBrahb_clicks + 1;
     
 // these statements change the image
        document.getElementById( "as" ).src = "images/Brahe.jpg";
     
 // these statements change the title
        document.getElementById( "title" ).innerHTML = "Tycho Brahe";
       
 alert( " You have clicked " + number_of_clicks + " times." );
    
    checkCompletion();
     
}

function printNicolausCopernicus()
{
 number_of_clicks = number_of_clicks + 1;
        NicolausCopernicus_clickss = NicolausCopernicuc_clicks + 1;
	 
 // these statements change the image
        document.getElementById( "as" ).src = "images/Copernicu.jpg";
 // these statements change the title
        document.getElementById( "title" ).innerHTML = "Nicolaus Copernicus";
 alert( " You have clicked " + number_of_clicks + " times." );
    
    checkCompletion();    
}

function printGalileoGalilei()
{
 number_of_clicks = number_of_clicks + 1;
        GalileoGalileg_clicks = GalileoGalileg_clicks + 1;
 // these statements change the image
        document.getElementById( "as" ).src = "images/Galileo.jpg";
        
// these statements change the title
        document.getElementById( "title" ).innerHTML = "Galileo Galilei";
alert( " You have clicked " + number_of_clicks + " times." );
    
    checkCompletion();
    
        
}
function printJohannesKepler()
{
 number_of_clicks = number_of_clicks + 1;
        JohannesKeplek_clicks = JohannesKeplek_clicks + 1;
	 // these statements change the image
        document.getElementById( "as" ).src = "images/Kepler.jpg";
       
        
        
        // these statements change the title
        document.getElementById( "title" ).innerHTML = "Johannes Kepler";
          alert( " You have clicked " + number_of_clicks + " times." );
    
    checkCompletion();
    
}    

function printClaudiusPtolemy()
{
 number_of_clicks = number_of_clicks + 1;
        ClaudiusPtolemyp_clicks = ClaudiusPtolemyp_clicks + 1;
	 // these statements change the image
        document.getElementById( "as" ).src = "images/Ptolemaeus.jpg";
        
        
        
        // these statements change the title
        document.getElementById( "title" ).innerHTML = "Claudius Ptolemy";
          alert( " You have clicked " + number_of_clicks + " times." );
    
    checkCompletion();
    
        
} 
function checkCompletion()
{
        if( TychoBrahb_clicks > 0 && NicolausCopernicuc_clicks > 0 && GalileoGalileg_clicks > 0 && JohannesKeplek_clicks >  0 && ClaudiusPtolemyp_clicks > 0 )
        {
                alert( "Completed!" );
        }
}
  
        