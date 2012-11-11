


var TychoBrahe 
var NicolausCopernicus
var GalileoGalileg
var JohannesKeplek
var ClaudiusPtolemyp
var SirIssacNewton


function printTychoBrahe()
{    
    document.getElementById( "as" ).src = "images/Brahe.jpg";
    document.getElementById( "title" ).innerHTML = "Tycho Brahe";
    document.getElementById( "box" ).innerHTML ="Tycho Brache- (1546-1601.Danish-Protestant North)." +
    		"Built an observatory with sophisticated equipment for measuring the distance between stars." +
    		"Left Behind 20 years of observations. Data on Mar's orbit that was crucial for Kelper to construct" +
    		"our present model of the solar system. Useed parallax to show: Either earth is the center of the solar system," +
    		"OR, the stars or so far away that the parallax was too far to measure.  Believed in a blend between Ptolemic and" +
    		"Copernicun models (planets orbiting the sun and sun orbits the Earth. ";
}


function printNicolausCopernicus()
{
    document.getElementById( "as" ).src = "images/Copernicu.jpg";
    document.getElementById( "title" ).innerHTML = "Nicolaus Copernicus";
    document.getElementById( "box" ).innerHTML ="Nicolaus Copernicus (1473-1543-Polish Priest)." +
    		"Calculations used to revise Julian calendar to Gregorian claendar." +
    		"Copernicus had a conceptual breakthrough: the Sun centered solar system." +
    		"Still thought circular orbits were correct (perfection in design)." +
    		"Wrote De Revolusionibus in 1543, received well by the church, but in 1616" +
    		"the book was banned until 1865 due to Protestant reformation."
}


function printGalileoGalilei()

 {

   document.getElementById( "as" ).src = "images/Galileo.jpg";
        
   document.getElementById( "title" ).innerHTML = "Galileo Galilei";
   document.getElementById( "box" ).innerHTML ="Galileo Galilei (1564-1642; Italian, anti-reformation Italy)" +
   		"1609: built a telescope after hearing of one built in the Netherlands" +
   		"Problem with the church (the perfect incorruptibility of heavenly bodies" +
   		"Demonstrated some celestial objects did not revolve around the Earth" +
   		"Galilean Moons (moons of Jupiter): Io, Europa, Ganymede, Callisto " +
   		"Phases of Venus More support for a heliocentric solar system" +
   		"Phases of a planet or moon occur when perspective changes over time." +
   		"Galileo�s technological breakthroughs gave evidence for the heliocentric model." +
   		"Mountains on the moon: Not a perfect celestial sphere-Showed the moos is similar to the Earth." +
   		"Demonstrated this by measuring height of mountains based on shadows." +
   		"Moons on Jupiter: There were not only 7 celestial spheres." +
   		"Makes idea that the moon revolves around us and everything else revolves around the sun" +
   		"probable.  Sunspots: not a heavenly, incorruptible body."
   		
}

       
function printJohannesKepler()
{

 document.getElementById( "as" ).src = "images/Kepler.jpg";

 document.getElementById( "title" ).innerHTML = "Johannes Kepler";
 
 document.getElementById( "box" ).innerHTML ="Johannes Kepler (1571-1630 German Protestant North)" +
 		"Thought about the solar system in 3 dimensions and that the spacing between the sphere on which" +
 		"the planents moved were determined by perfect geometric shapes." +
 		"Kepler's Laws. Kepler quotes= 'My opinion of Tycho is this: he is superlatively rich," +
 		"but he knows not how tomake proper use of it, as is the case with most rich people." +
 		"Therefore, one must wrest his riches from him' (Peterson, 1993). 'My aim is to show that the " +
 		"heavenly machine is not a kind of divine, live being, but a kind of clockwork, insofar as" +
 		"nearly all the manifold motions are caused by a most simple, magnetic, and material force," +
 		"just as all motions of the clock are caused by a simple weight. And I also show how these" +
 		"physical causes are to be given numerical and geometrical expression' (Gaithers, 2007)" +
 		""
}
 
function printClaudiusPtolemy()
{
    document.getElementById( "as" ).src = "images/Ptolemaeus.jpg";
    document.getElementById( "title" ).innerHTML = "Claudius Ptolemy";
    document.getElementById( "box" ).innerHTML ="Claudius Ptolmey (165 AD)" +
    		"THe Ptolmec solar system (accepted for 1500 years)" +
    		"Earth centered- Celectial objects move at constant speed-" +
    		"Move in circular orbits-" +
    		"Planents have epicycles"
    		
} 

function printSirIssacNewton()
{    
    document.getElementById( "as" ).src = "images/Newton.jpg";
    document.getElementById( "title" ).innerHTML = "Sir Issac Newton";
    document.getElementById( "box" ).innerHTML ="Sir Isaac Newton (1642-1717; England)" +
    		"Newton�s Law of gravity explained elliptical orbits and speed of orbits." +
    		"Edmond Halley (1656-1742) of Halley�s comet, visited him concerned about Kepler�s Law of elliptical orbit." +
    		"";
}
function clearBox()
{
	document.getElementById( "box" ).innerHTML = "Click on an early astronomer's name to find out more";
}

