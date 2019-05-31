$(function(){
	//手机数据
	$.ajax({
		url:"../data/phone_hot.json",
		success:function(arr){
			for(var i = 0; i< arr.length; i++){
				$(`<li class = 'normalgoods'>
					<a href="">
						<div class = 'figure'>
							<img src="${arr[i].img}" alt="">
							<div class = 'figure-info'>
								${arr[i].title}
							</div>
						</div>
						<div class="price">
							${arr[i].price}
						</div>
						<div class="btnBox">
							<a href="#" class="btn-info">查看详情</a>
							<a href="#" class="btn-sell">立即购买</a>
						</div>
					</a>
				</li>`).appendTo($(".nbc-new1-box .cl"));
			}
		},
		error: function(msg){
			alert("请求错误：" + msg);
		}
	})

	//product数据
	$.ajax({
		url:"../data/phone_pro.json",
		success:function(arr){
			for(var i = 0; i< arr.length; i++){
				$(`<li class="phonePro">
						
							<a href="">
								<img src="${arr[i].img}" alt="">
								<div class="product-info">
									<h2>${arr[i].txt}</h2>
									<p>${arr[i].ads}</p>
								</div>
							</a>
						
						</li>`).appendTo($(".productBox .hotre"));
			}
		},
		error: function(msg){
			alert("请求错误：" + msg);
		}
	})


	//视频数据
	$.ajax({
		url:"../data/vedio.json",
		success:function(arr){
			for(var i = 0; i< arr.length; i++){
				$(`<li class="phonePro">
						
							<a href="">
								<img src="${arr[i].img}" alt="">
								<div class="product-info">
									<h2>${arr[i].txt}</h2>
									<p>${arr[i].ads}</p>
								</div>
							</a>
						
						</li>`).appendTo($(".vedioBox .ul-vedio"));
			}
		},
		error: function(msg){
			alert("请求错误：" + msg);
		}
	})
})