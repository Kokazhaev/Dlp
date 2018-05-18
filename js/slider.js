var slider = document.getElementById('words__slider');
var move=0;
function slide(side){
	
	if(side ==='right'){
		if(move!= -200){
			move= move - 100;
		} else {
			move = 0;
		}
	} else{  
			if( move!=0){
			move=move+100;
			} else{
				move = -200;
			}
	}
	words__slider.style.left= move + "%"

}