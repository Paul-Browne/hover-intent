/*! hover-intent.js | MIT license | Paul Browne */ 
(function() {
  var h = document.getElementsByTagName("html")[0];
  if (!(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))) {
    h.className += " no-touch";
  } else {
    h.className += " touch";
  }

  function z(p, tt) {
    window.addEventListener("mousemove", function() {
      clearTimeout(tt);
      tt = setTimeout(p, 550);
    });
    return p;
  }

  function b() {
    
    c[d].addEventListener("mouseenter", function() {
      var b = this;
      this.className += " hi-hover";
        z(function() {
          if(b.className.match(/(?:^|\s)hi-hover(?!\S)/) && !b.className.match(/(?:^|\s)hi-intent(?!\S)/)){
            b.className += " hi-intent";
          }
        });
    });

    c[d].addEventListener("mouseleave", function() {
      var b = this;
      this.className = this.className.replace(/(?:^|\s)hi-hover(?!\S)/g, "");
        z(function() {
          if(b.className.match(/(?:^|\s)hi-intent(?!\S)/) && !b.className.match(/(?:^|\s)hi-hover(?!\S)/)){
            b.className = b.className.replace(/(?:^|\s)hi-intent(?!\S)/g, "");
          }
        }); 
    });
    
  }
  for (var c = document.getElementsByTagName("li"), d = 0; d < c.length; ++d) b();
  
})();
