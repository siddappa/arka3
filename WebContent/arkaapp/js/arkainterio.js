	$(document).ready(function() {
				/*
				 * $("#completeproject").click(function(){
				 * $("#middleContent").hide(100);
				 * $("#middleContent").load('projectpage.html');
				 * $("#middleContent").show('slow');
				 * 
				 * }); 
				 */
		         
			    // 

			 
		    
			

			    setTimeout(function(){ 
			    	$('.loadingimag').hide();
			    	$('.container').show();
			    	doamins();
			    	
			    	
			    }, 3500);
			    $('.flexslider').flexslider({ 
			    animation: "fade",
			    easing: "swing",  
				 
				slideshowSpeed: 3500,
				animationSpeed: 350, 
				 
				/*
				 * controlNav: false, directionNav: false, pausePlay: false,
				 * pauseText: 'Pause', playText: 'Play'
				 */
				// after: function(){$(this).flexslider('slideshowSpeed',1000)}
			  });
			  
					 var blink = function() {
					    $('.goldtext').animate({
					        opacity: '0'
					        
          						 
					    }, function(){
					    
					        $(this).animate({
					            opacity: '1'
					            
					        }, blink);
					    });
					}
   
			   blink();   
		 
	         
	    		  
         		   
         		  
			    
		});
	 
		
function doamins(){
	    setTimeout(function(){ $('#wel').show('slow'); }, 200);
	    setTimeout(function(){ $('.custombbtn').show('slow'); doscrolitext() }, 3000);
	    setTimeout(function(){ doTextiffe() }, 1000);
	    $('.welc').hide();
	    $('.scrllingText').hide();
}


		function doTextiffe(){
		$('.welc').show();
			$('.welc').textEffect({
			    effect: 'dropdown',  // fade,edaf,worg,grow,jumble,elbmuj,slide,edils,dropdown,nwodpord
			    effectSpeed: 150,
			    completionSpeed: 6000,
			    reverse: false,
			    jumbleColor:'red'  
		}); 
		}
		
		function doscrolitext(){
				 $('.scrllingText').show();
				$('.scrllingText').css({right:0});
			    $('.scrllingText').textEffect({
			    effect: 'slide',  // fade,edaf,worg,grow,jumble,elbmuj,slide,edils,dropdown,nwodpord
			    effectSpeed: 150,
			    completionSpeed: 3000,
			    reverse: false,
			    jumbleColor:'red'  
			     
			    
			}); 
			
			  setTimeout(function(){  loop();
			    }, 5000);
		}
		
		
		function loop() {
			 
		      $('.scrllingText').css({right:0});
		        $('.scrllingText').animate ({
		            right: '+=1000',
		        }, 16000, 'linear', function() {
		         doscrolitext();
		        
		        });
		   }
	         
	 
		
		