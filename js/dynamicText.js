var words = ["Try Design, You Will like it","Do you want to have something like this?","Then call us"];
var i=0;
var j=0;
var title = document.getElementById('main__title');
function inputText(){
	var str=""; 
	var interval = setInterval(function(){
		
		if(str.length == words[i].length){

			clearInterval(interval);
			setTimeout(function(){
				eraseText();
			},500)

		} else{
			str = str + words[i][j];
			title.innerHTML = str + '<span style="color:#a8b9c0;">|</span>';
			j++;
		}
	},80);
}
function eraseText(){
	var str= words[i];
	var interval = setInterval(function(){
		if(str.length == 0 ){
			if(i== words.length-1){
				i=0;
			}else{
				i++
			}
			j = 0;
		 	clearInterval(interval);
		 	inputText();
		}
		str = str.substring(0,str.length - 1); 
		title.innerHTML = str + '<span style="color:green;">|</span>';
	},20)
}

inputText();
// var a= 0;
// var b= 0;

// var title = document.getElementById('main__title');
// function inputText(){
// 	var str='';

// 	var intrval = setInterval(function(){
		
// 		if(a < words[a].length ){


// 		str = str + words[a][b];
// 		title.innerHTML= str ;
// 		b++;
// 		} else	{
// 			clearInterval(intrval);
// 			setTimeOut(function(){
// 				erasetext(b);
// 			},400)
// 		}  
		
// 	},80)
// }
// function erasetext(b){
// 	console.log('ff')
// 	var str= words[b];

// 	var interval = setInterval(function(){
// 		str = str.substring(0,str.length - 1)
// 		title.innerHTML = str;
// 	},15)
// }
// inputText();