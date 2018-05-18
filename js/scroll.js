var MyLocation=0; 
window.onscroll = function(e){
	MyLocation= window.pageYOffset;
}
function alignView(MyLocation,position){
	if(MyLocation>(position-70)){

		return (position - 70) ;
	} 
	return MyLocation;


}
function scrollWindow(id){
	var element = document.getElementById(id);
	var position = findPosition(element);
	console.log(position)
	if(MyLocation<position){

		var interval = setInterval(function(){

			MyLocation += 30;
			MyLocation = alignView(MyLocation,position);
		
			window.scrollTo(0,MyLocation);
			console.log(MyLocation)
			if(MyLocation == (position-70)){
				clearInterval(interval);
			}
			
		},0)

	} else{
		
		var interval = setInterval(function(){
			MyLocation= MyLocation-30;
				window.scrollTo(0,MyLocation);
				console.log(MyLocation)
				if(position>=MyLocation){
					window.scrollTo(0,position-70)
					clearInterval(interval);
				}
		},0)
	}
}
function findPosition(l){
	if(l.offsetParent){
		return l.offsetTop
	} else {
		return 0;
	}
}