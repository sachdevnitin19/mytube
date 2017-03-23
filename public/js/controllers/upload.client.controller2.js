app.controller('UploadController',function(filepickerService,$http,$localStorage){

	var appl=this;
	appl.obj={};
	appl.upload=function(){
		filepickerService.pick(
				{
					//mimetype:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
					extensions:'.mp4,.3gp,.avi,.wmv',
					language:'en',
					service:'COMPUTER',
					openTo:'COMPUTER'
				},
				function(up){
					appl.obj.video=up;	
		});
	};

	appl.golive=function(video){
		this.video.video=appl.obj.video;
		this.video.uploaded_by=$localStorage.email;
		var date=new Date();
		date=Date.parse(date);
		this.video.public_id=date;
		console.log(this.video);
        $http.post('/api/upload2',this.video).then(function(data){
        	console.log(data);
        	$location.path('/');
        })
	};

});