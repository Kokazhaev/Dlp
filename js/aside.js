function toggleAside(option){
	var aside = document.getElementById('aside');
	var aside__inner = document.getElementById('aside__inner')
	if(option == 'show'){
		aside.style.display = 'block';
	

		setTimeout(function(){
			aside__inner.style.left = '0';
		}, 200)

	} else {
		aside__inner.style.left = '-300px';
		setTimeout(function(){
			aside.style.display = 'none';
		}, 200)


	}
}