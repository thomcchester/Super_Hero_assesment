myApp.controller("AddController", ["$scope", "$http", "HeroService", "$location", function($scope, $http, HeroService, $location){
    $scope.heroes = {};
    $scope.data = [];

    $scope.addHero = function(data){
        console.log(" in",data);
        var postObject = {};
        postObject.Alias = data.Alias;
        postObject.FirstName = data.FirstName;
        postObject.LastName = data.LastName;
        postObject.City = data.City;
        postObject.PowerName = data.PowerName;

        HeroService.postHero(postObject);
        $location.url('/view');
    };
}]);

myApp.controller("ShowController", ["$scope", "HeroService", function($scope, HeroService){
    console.log("in ShowController");

        $scope.deleteHero = function(heroId){
            console.log("dropping", heroId);
            var dropId = {"heroId": heroId};
            HeroService.dropHero(dropId);

        };

    HeroService.getHeroes();

    $scope.data = HeroService.data;
}]);
