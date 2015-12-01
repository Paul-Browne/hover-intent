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


