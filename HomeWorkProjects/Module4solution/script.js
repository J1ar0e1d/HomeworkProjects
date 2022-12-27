

(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    


    for (var i = 0; i < names.length; i++) {  
    
      var char = names[i];
      
                 
      
             
      var firstletter = char.charAt(0);
      var sample =  firstletter.toLowerCase();

      var letter = 'j';
      
      
  
      if (sample == letter) {
       
      
         byeSpeaker.speak(names[i]);   
      
          
        } 
    
     else {
       
        helloSpeaker.speak(names[i]);
      

    }
  
  


 }




})();




