
app.controller('serivertest',function($scope,$location){
	$scope.testUrl=$location.absUrl();
	
})
app.controller('serivertest',function($scope,$http){
	$http.get('index.html').then(function(response){
		$scope.myWelcome=response.data;/*	返回了index.html这页面所有的代码*/
	});
})

app.controller('optiontest',function($scope){
	
	$scope.names=["tf","chanel","JJ"]
	$scope.prices=[
	{name:"ysl",tag:300},
	{name:"tf",tag:150}
	];
	$scope.totals={
		01:100,
		02:200,/*key-value car03 : {brand : "Volvo", model : "XC90", color : "black"}  selectedCar.color*/
		03:300
	};/*只有这种索引从[0]开始*/
})

app.controller('datetest',function($scope){
	
	$scope.tt=new Date();
})


