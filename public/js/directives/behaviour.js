var app = angular.module("angularViews")

app.directive("enter", function() {
  return function(scope, element) {
    element.bind("mouseenter", function() {
      console.log("EW! I'm inside of you!");
    });
  };
});

app.directive("leave", function() {
  return function(scope, element) {
    element.bind("mouseleave", function() {
      console.log("Freedom!!!");
    });
  };
});