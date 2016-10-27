			var oDiv1=document.getElementById("div1");
			var imgWidth=280;	//设定图片的宽度
			var cOlumheight=[];		//设置一个空的数组，用来装所有图片的高度
			var index=1;		//用来加载的
			var bWidth=document.body.clientWidth||document.documentElement.clientWidth;		//获取屏幕宽度
			var widthColum=Math.ceil(bWidth/imgWidth);		//设置每行的列数
			for(var i=0;i<widthColum;i++){		
				cOlumheight[i]=0;		//开始的时候先让所有图片的高度都为0
			}
			ajax("JSON/pb1.json");
		
		
		
			function pb(arrjson){
				
				for(var k=0;k<arrjson.length;k++){
					var oImg=document.createElement("img");// 创建img标签
					oImg.src="img/"+arrjson[k].url;		//给img标签设置src  循环
					var temp1=minHeight();			//这个用来接受minHeight()里面的最小高度的下标
					oImg.style.width=imgWidth+"px";
					oImg.style.position="absolute";
					oImg.style.left=temp1*imgWidth+"px";
					oImg.style.top=cOlumheight[temp1]+"px";
					oDiv1.appendChild(oImg);
					cOlumheight[temp1]+=arrjson[k].Height;		
					//每添加一张图片，就把他所在列数的总高度加上新添加图片的高度
				}
				
				
			}
			
			function minHeight(){//找到每列最小高度下标的函数
				var temp=0;
				for(var i=0;i<cOlumheight.length-1;i++){
					if(cOlumheight[i]<cOlumheight[temp]){
						temp=i;
					}
				}return temp
			}
			function maxHeight(){//找到哪列最大高度的函数
				var count=0;
				for(var i=0;i<cOlumheight.length-1;i++){
					if(cOlumheight[i]>cOlumheight[count]){
						count=cOlumheight[i];
					}
				}return count
			}
			
			function ajax(url){
				var xhr=new XMLHttpRequest();
				xhr.open("GET",url,true);
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4){
						if(xhr.status==200){
							var arrjson=JSON.parse(xhr.responseText);
							pb(arrjson);
						}
					}
					
				}
				xhr.send();
			}
			function failload(){
				if(index>4){
					alert("没了")
				}
			}
			window.onscroll=function(){
				var screenwidth=document.body.scrollTop||document.documentElement.scrollTop;
				var screenheight=document.body.clientHeight||document.documentElement.clientHeight;
				var count=maxHeight();//用来接收最大高度
				if(screenwidth+screenheight>=count){
					index++;
					ajax("JSON/pb"+index+".json");
				}
//				failload();
			}
			

			window.onresize=function(){
				var bWidth=document.body.clientWidth||document.documentElement.clientWidth;	//获取屏幕宽度
				var newColumn=Math.ceil(bWidth/imgWidth);		//设置每行的列数
				if(newColumn!=widthColum){
					widthColum=newColumn;
					cOlumheight=[];
					for(var i=0;i<widthColum;i++){		
						cOlumheight[i]=0;		//开始的时候先让所有图片的高度都为0
					
					}
					Refsest();
				}
			}
			
			function Refsest(){//定义一个新的函数，不重新加载页面  只改变布局
				var oImglist=oDiv1.getElementsByTagName("img");
				for(var k=0;k<oImglist.length;k++){
					var temp2=minHeight();			//这个用来接受minHeight()里面的最小高度的下标
					var oImg=oImglist[k];
					oImg.style.left=temp2*imgWidth+"px";
					oImg.style.top=cOlumheight[temp2]+"px";
					cOlumheight[temp2]+=oImglist[k].offsetHeight;		
					//每添加一张图片，就把他所在列数的总高度加上新添加图片的高度
				}
				
				
			}
