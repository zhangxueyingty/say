function init(){
	//获取page元素
	var pages=document.querySelectorAll('.page');
	var arrow=document.querySelectorAll('.arrow');
	//获取屏幕宽高
	var sw=window.screen.width;	
	var sh=window.screen.height;
	var scale=1;
	if(sw>=720){
		sw=720;
	}else{
		scale=sw/720;
	}
	
	//设置页面的缩放比例和宽高
	$('.page').css({
		'-webkit-transform':'scale('+scale+')',
		'transform':'scale('+scale+')',
		'-webkit-transform-origin':'left top',
		'transform-origin':'left top'
	});
	for(var i=0;i<pages.length;i++){
		pages[i].style.width=720+'px';
		pages[i].style.height=sh/scale+'px';
	}
	
	
	//向上，向下滑动翻页
	var startX,startY,
		moveX,moveY,
		endX,endY;
		
	for(var i=0;i<pages.length;i++){
		pages[i].index=i;
		pages[i].addEventListener('touchstart',touchFun,false);
		pages[i].addEventListener('touchmove',touchFun,false);
		pages[i].addEventListener('touchend',touchFun,false);
	}
	
	function touchFun(event){
		var ev=event||window.event;
		switch (ev.type){
			case 'touchstart':
				startX=ev.touches[0].clientX;
				startY=ev.touches[0].clientY;
				console.log('startX:'+startX+','+'startY:'+startY);
				break;
			case 'touchmove':
				ev.preventDefault();
				moveX=ev.touches[0].clientX;
				moveY=ev.touches[0].clientY;
	//				console.log(moveX+','+moveY);
				break;
			case 'touchend':
				endX=ev.changedTouches[0].clientX;
				endY=ev.changedTouches[0].clientY;
				console.log('endX:'+endX+','+'endY:'+endY);
				
				if(startY-endY>30){
					console.log('向上翻页');
					for(var i=0;i<pages.length;i++){
						pages[i].style.display='none';
					}
					if(this.index>=(pages.length-1)){
						this.index-=1;
					}
					pages[this.index+1].style.display='block';
				}else if(endY-startY>30){
					console.log('向下翻页');
					for(var i=0;i<pages.length;i++){
						pages[i].style.display='none';
					}
					if(this.index<=0){
						this.index+=1;
					}
					pages[this.index-1].style.display='block';
				}
				
				break;
			default:
				break;
		}
		
	}
	

	//点击音乐按钮
	var aud=document.getElementById('audio');
	var music=document.querySelector('.music');
	music.addEventListener('touchstart',function(){
		$(this).toggleClass('music_mute');
		
	    if(aud.paused){
	        aud.play();
	    }else{
	       aud.pause();
	    }
	},false);

}
