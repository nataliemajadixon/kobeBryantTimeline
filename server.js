(function (){
    
    var items = document.querySelectorAll(".kbtimeline li");
    function Element(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
    
      function recall() {
        for (var i = 0; i < items.length; i++) {
          if (Element(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      }
    
      // listen for events
      window.addEventListener("load", recall);
      window.addEventListener("resize", recall);
      window.addEventListener("scroll", recall);
    })();