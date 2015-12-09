var container;
var clickTag = "http://www.google.org";


init = function(){
		
        container = document.getElementById('container');
        plane = document.getElementById('plane');
        anim();
	    container.style.cursor = "pointer";
        plane.style.display = "block";
}


anim = function(){ 

	   TweenLite.set("#offer", {scale:0.6});
        TweenLite.set(["#red_line1", "#red_line2"], {opacity:1});
       TweenLite.fromTo("#red_line1", 0.7, {clip:"rect(0,0,20,0)"}, {clip:"rect(0,300,20,0)", delay:0.5, ease:Quad.easeOut});   
	   TweenLite.fromTo("#red_line2", 0.7, {clip:"rect(0,0,20,0)"}, {clip:"rect(0,300,20,0)", delay:2, ease:Quad.easeOut}); 		    
       TweenLite.set("#red_circle_sprite", {opacity:1,  delay:3.1}); 
	   TweenLite.to(["#red_circle_sprite","#red_line1, #red_line2, #bullet_points"], 1, {opacity:0,  delay:5.5});
	   TweenLite.to("#copy1", 1, {opacity:1,  delay:6.5}); 
	   TweenLite.to("#plane", 8.5, {opacity:1,  x:450, y:-60, delay:7}); 
	   TweenLite.to("#purple", 3, {opacity:1,  delay:12});
	   TweenLite.to("#copy1", 0.5, {opacity:0,  delay:8.5});
	   
	   TweenLite.to("#copy2", 1, {opacity:1,  delay:9.5}); 
	   TweenLite.to("#offer", 1, {opacity:1,  delay:10, scaleX:1, scaleY:1, ease:Bounce.easeOut});
   	   TweenLite.to("#copy2", 0.5, {opacity:0,  delay:13});  
	   
	   TweenLite.to("#copy3", 1, {opacity:1,  delay:14});   
	   TweenLite.to("#cta", 1, {opacity:1,  delay:15, onComplete: playCTA});   
	   
	    
} 



playCTA = function(){
        document.getElementById("container").addEventListener("mouseenter", playCTA);
        TweenLite.set("#sheen", {opacity:1, x:"-100px"});
        TweenLite.to("#sheen", 1, {x:"+170px", delay:0, ease:Quad.easeOut});
}

window.onload = function(){ 
    init();
}