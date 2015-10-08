/*! hover-intent.js | MIT license | Paul Browne */ 
(function() {

  //  We are interested in list items 
  //  that are nested within the nav

  var li = document.getElementsByTagName("li"),
      nav = document.getElementsByTagName("nav")[0];

  //  function will check all the list items
  //  and see if each one is nested within the nav

  function childOf(a, b){
    while((a=a.parentNode)&&a!==b);
    return !!a;
  }

  //  function that returns when the mouse 
  //  stops moving for xxx milliseconds.
  //  A good range is 150-350, less than 
  //  150 it's too quick, greater than 350
  //  and it's too slow. IMO

  function stillMouse(a, b) {
    window.addEventListener("mousemove", function() {
      clearTimeout(b);
      b = setTimeout(a, 250);
    });
    return a;
  }

  function hoverIntent() {
    
    //  attach the listeners to all the list items
    
    li[i].addEventListener("mouseenter", function() {
      
      //  reference "this" for use later within the stillMouse function
      
      var b = this;
      
      //  add the class 'hi-hover' when mouse enters the list item
      
      this.className += " hi-hover";
        stillMouse(function() {
          if(b.className.match(/(?:^|\s)hi-hover(?!\S)/) && !b.className.match(/(?:^|\s)hi-intent(?!\S)/)){
            b.className += " hi-intent";
          }
        });
    });

    li[i].addEventListener("mouseleave", function() {
      var b = this;
      this.className = this.className.replace(/(?:^|\s)hi-hover(?!\S)/g, "");
        stillMouse(function() {
          if(b.className.match(/(?:^|\s)hi-intent(?!\S)/) && !b.className.match(/(?:^|\s)hi-hover(?!\S)/)){
            b.className = b.className.replace(/(?:^|\s)hi-intent(?!\S)/g, "");
          }
        }); 
    });
    
  }
  
  for (var i = 0; i < li.length; ++i) {
    var navli = childOf(li[i], nav);
    if(navli){
      hoverIntent();
    }
  }
})();
