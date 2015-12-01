<<<<<<< HEAD
/*! hover-intent.js | MIT license | Paul Browne */
!function(){
var h = document.getElementsByTagName("html")[0];  
if(!(('ontouchstart' in window)||(navigator.MaxTouchPoints > 0)||(navigator.msMaxTouchPoints > 0))){
    h.className += " no-touch";
}else{   
    h.className += " touch";
}
    
function a(a,b){return window.addEventListener("mousemove",function(){clearTimeout(b),b=setTimeout(a,250)}),a}function b(){c[d].addEventListener("mouseenter",function(){var b=this;b.className+=" hi-hover",a(function(){b.className.match(/(?:^|\s)hi-hover(?!\S)/)&&!b.className.match(/(?:^|\s)hi-intent(?!\S)/)&&(b.className+=" hi-intent")})}),c[d].addEventListener("mouseleave",function(){var b=this;this.className=this.className.replace(/(?:^|\s)hi-hover(?!\S)/g,""),a(function(){b.className.match(/(?:^|\s)hi-intent(?!\S)/)&&!b.className.match(/(?:^|\s)hi-hover hi-intent(?!\S)/)&&(b.className=b.className.replace(/(?:^|\s)hi-intent(?!\S)/g,""))})})}for(var c=document.getElementsByTagName("li"),d=0;d<c.length;++d)b();


  var t = document.getElementsByTagName("ul");
  for (var j=0; j<t.length; ++j){
    var q = t[j].parentNode;
    if(q.nodeName=="LI"){
      var e = document.createElement("span");
      e.className = "more";
      e.addEventListener("click",function(){
        var w = this.parentNode;
          
function getChildren(n, skipMe){
    var r = [];
    for ( ; n; n = n.nextSibling ) 
       if ( n.nodeType == 1 && n != skipMe)
          r.push( n );        
    return r;
};

function getSiblings(n) {
    return getChildren(n.parentNode.firstChild, n);
};
          var yy = getSiblings(w);
          for(var k=0;k<yy.length;++k){
          
          if(yy[k].className.match(/(?:^|\s)active(?!\S)/)){
            yy[k].className = yy[k].className.replace(/(?:^|\s)active(?!\S)/g, " inactive"); 
          }
        }
          
        if(w.className.match(/(?:^|\s)inactive(?!\S)/)){
          w.className = w.className.replace(/(?:^|\s)inactive(?!\S)/g, " active");
        }else{
          w.className = w.className.replace(/(?:^|\s)active(?!\S)/g, " inactive");
        }
      });
      q.className += " parent inactive";
      q.insertBefore(e, t[j]);
    }
  } 

}();


=======
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

  //  function that fires when the mouse 
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
    
    //  attach the listeners to all the list items within the nav
    
    li[i].addEventListener("mouseenter", function() {
      
      //  reference 'this' for use later within the stillMouse function
      
      var b = this;
      
      //  add the class 'hi-hover' when mouse enters the list item
      
      b.className += " hi-hover";
        stillMouse(function() {
          
          //  only add the class 'hi-intent' if the
          //  mouse is hovering over the element after 250 milliseconds 
          //  and the class isn't already attached
          
          if(b.className.match(/(?:^|\s)hi-hover(?!\S)/) && !b.className.match(/(?:^|\s)hi-intent(?!\S)/)){
            b.className += " hi-intent";
          }
        });
    });

    li[i].addEventListener("mouseleave", function() {
      var b = this;
      
      //  removes the class 'hi-hover' when mouse leaves the list item
      
      b.className = b.className.replace(/(?:^|\s)hi-hover(?!\S)/g, "");
        stillMouse(function() {
          
          //  only remove the class 'hi-intent' if the
          //  element has the class attached, and if the
          //  mouse is not hovering over the element after 250 milliseconds 
          
          if(b.className.match(/(?:^|\s)hi-intent(?!\S)/) && !b.className.match(/(?:^|\s)hi-hover(?!\S)/)){
            b.className = b.className.replace(/(?:^|\s)hi-intent(?!\S)/g, "");
          }
        }); 
    });
  }
  
  //  evaluate all list items in the DOM
  //  if a list item is a child of the nav
  //  then call the hoverIntent function
  
  for (var i = 0; i < li.length; ++i) {
    var navli = childOf(li[i], nav);
    if(navli){
      hoverIntent();
    }
  }
})();
>>>>>>> origin/master
