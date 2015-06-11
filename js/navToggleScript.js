$(document).ready(function() {
  // var firstScroll = false;

  function toggleNavigation(isNavClosed) {
    $(".navItem").each(function(index) {
      if (isNavClosed === true) {
         $(this).css("opacity", 1.0);
         $("#logoAnchor").removeClass("closed");
      } else {
         $(this).css("opacity", 0.0);
         $("#logoAnchor").addClass("closed");
      }
    });
    $(".navItem").each(function(index) {
      if (isNavClosed === true) {
         $(this).css("visibility", "visible");
      } else {
         $(this).css("visibility", "hidden");
      }
    });
    if (isNavClosed === true) {
      $("#header").css("background-image", 'url("css/images/bright_squares.png")');
    } else {
      $("#header").css("background-image", 'url("css/images/Blank.png")');
    }
  };

  $("#logoAnchor").click(function(evt) {
    var navState = $("#logoAnchor").attr("class");
    if (navState === "closed") {
      toggleNavigation(true);
    } else {
      toggleNavigation(false);
    }
  });

  // $(window).scroll(function() {
  //   var scrollHeight = $(document).scrollTop();
  //   if (scrollHeight === 0) {
  //     toggleNavigation(false);
  //     firstScroll = false;
  //   } else {
  //     if (firstScroll === false) {
  //       toggleNavigation(true);
  //       firstScroll = true;
  //     }
  //   }
  // });
});