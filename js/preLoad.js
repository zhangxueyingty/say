//预加载
function preLoad(back){
	var preload=document.getElementById('preload');
	var percent=document.getElementById('percent');
	var barPercent=document.getElementById('bar_percent');
	var arr=["img/image1.png","img/image2.png","img/image3.png","img/image4.png","img/image5.png","img/arrow.png"];
	var nums=0;
	for(var i=0;i<arr.length;i++){
		var img=new Image();
		img.onload=function(){
			nums++;
			var percentNum=(nums/arr.length*100).toFixed(0)+"%";
			percent.innerHTML=percentNum;
			barPercent.style.width=percentNum;
			if(nums==arr.length){
				preload.style.display='none';
				$('.page1').css('display','block');
				init();
			}
		}
		img.src=arr[i];
	}
}
