// Javascript coding

/* Displays a greeting based upon the current time
   This is an example from the Javascript & JQuery Interactive front-end web development book
   by Jon Duckett */

var today = new Date();          // Create a new date object
var hourNow = today.getHours();  // Find the current hour
var greeting;

// Display a greeting based on the current time
if (hourNow > 18) {
    greeting = 'Good evening! Welcome to my site!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon! Welcome to my site!'; 
} else if (hourNow > 0) {
    greeting = 'Good morning! Welcome to my site!'; 
} else {
    greeting = 'Welcome to my site!';
}

document.write('<h1>' + greeting + '</hi>'); // Displays the greeting in the main heading
