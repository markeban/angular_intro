(function() {
  "use strict";

  angular.module("app").controller("bioCtrl", function($scope) {

    $scope.bios = [
      {
        name: "Johnnie Walker",
        bio: "Prior to 1860, it was illegal to sell blended whisky.[where?][3] During that time John Walker sold a number of whiskies—notably his own Walker's Kilmarnock. In 1865, John's son Alexander produced their first blend, Walker's Old Highland. Alexander Walker introduced the iconic square bottle in 1870. This meant more bottles fitting the same space and resulted in fewer broken bottles. The other identifying characteristic of the Johnnie Walker bottle is the label, which is applied at an angle of 24 degrees and allows text to be made larger and more visible.[4]",
      visible: false
      },
      {
        name: "Suze Orman",
        bio: "Susan Lynn 'Suze' Orman (born June 5, 1951) is an American author, financial advisor, motivational speaker, and television host.[3] Orman was born in Chicago and received her B.A. in social work. She worked as a financial advisor for Merrill Lynch. In 1983 she became the vice-president of investments at Prudential Bache Securities and in 1987 founded the Suze Orman Financial Group. Her program The Suze Orman Show began airing on CNBC in 2002. In 2006 she won a Gracie Award for Outstanding Program Host on the The Suze Orman Show on CNBC.[4] She has written several books on the topic of personal finance.",
        visible: false
      },
      {
        name: "Karl Malone",
        bio: "Karl Anthony Malone (born July 24, 1963), nicknamed 'The Mailman' is a retired American professional basketball power forward. He spent his first 18 seasons (1985–2003) in the National Basketball Association (NBA) with the Utah Jazz and formed a formidable duo with his teammate John Stockton. Malone was a two-time NBA Most Valuable Player, a 14-time NBA All-Star, and an 11-time member of the All-NBA first team. He scored the second most career points in NBA history (36,928), and holds the records for most free throws attempted and made. He is considered among the greatest power forwards in NBA history.",
        visible: false
      }
    ];

    $scope.toggleVisible = function(bio) {
      bio.visible = !bio.visible;

    };

    $scope.deleteBio = function(bio) {
      var bioIndex = $scope.bios.indexOf(bio);
      $scope.bios.splice(bioIndex, 1);
    };


    window.scope = $scope;

  });
}());