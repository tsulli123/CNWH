app.controller('homeCtrl', function($scope, $http) {
    
    var requestnum = 0;

    $http.get('/data/' + requestnum).then(function(response) {
        $scope.postcodes = response.data;
        requestnum++;
    });

    var position = $("#load-more").offset().top
     var scllwidth = $(window).scrollTop() + $(window).height()
      if ( scllwidth > position) {
            $("#load-more").click();
            console.log('scroll to bottom');
        }

// $('#load-more').morphingButton();

// $('#load-more').morphingButton({
//     action: 'setState',
//     icon: 'fa-check',
//     state: 'success'
// });

$('#load-more').click(function () {

    $("#load-more").text('Loading...');

    $http.get('/data/' + requestnum).then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
            $scope.postcodes.push(response.data[i]);
        }
        requestnum++;
        $('#load-more').text('Load More');
    });

});

}).controller('postcodeCtrl', function($scope, $http, $stateParams) {

    console.log($stateParams);

    $http.get('/data/' + $stateParams.postcode).then(function(response) {
        $scope.postcode = response.data;
    });

});