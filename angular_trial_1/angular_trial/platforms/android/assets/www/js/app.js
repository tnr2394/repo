/*var items=[
			{
				name:'Bottle' , 
				rating:9.8,
				description:'The bottle is blue in color.. made up of plastic and last for a long time.. it doesn\'t keep the water cool.!'
			},
			{
				name:'T.V.' , 
				rating:5.0,
				description:'TV is television. It is a colored tv.'
			},
			{
				name:'Deodrant' , 
				rating:4.3,
				description:'Nivea men body deodorizer.'
			},
			{
				name:'Hand Sanitizer' , 
				rating:7.5,
				description:'Hand Sanitizer cleans up the hands and removes the oiliness from hands aswell.'
			},
			{
				name:'Camera' , 
				rating:3.0,
				description:'The Camera is useful to capture the pictures.'
			},
			{
				name:'Shampoo' , 
				rating:8.36,
				description:'Tresemme shampoo is used by professionals.'
			},

			];*/
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var json;
function getFile(callback){
	$.getJSON('js/MOCK_DATA.js',function(njson){
		json=njson;
		callback(json);

	});
}

function loadArray(callback){
	getFile(function(json){
		console.log('getFile callback function called');
		var data=[];
		for (var key in json) {
			    if (json.hasOwnProperty(key)) {
			        var item = json[key];
			        data.push({
			            name: item.name,
			            rating: item.rating,
			            description: item.description
			        });     
		        	console.log(data.length);
		    	}
			}
			console.log('Size while callback='+data.length);
			callback(data);
	});

}


var app=angular.module('adder',[]);
app.controller('myController',["$scope","$http",function($scope,$http){
	$scope.myVal="name";
	$scope.newname="tirth";
	 $scope.loadProducts = function(val) {
	 	console.log('loadProducts called');
	 	$scope.myVal=val;
        var httpRequest = $http({
            method: 'POST',
            url: 'js/MOCK_DATA.js'

        }).success(function(data, status) {
            $scope.products = data;
            console.log('Success '+data.length);
            $scope.loaded=true;
        });

    };

}]);
	/*loadArray(function(x){
		this.products=x;

		console.log('After Callback function '+this.products.length);
	});
	sleep();
*/