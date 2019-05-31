console.log("加载成功");

require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"parabola": "parabola",
		"index": "index",
		"slide": "slide"
	},
	shim: {
		"jquery-cookie": ["jquery"],
		"index": ["jquery"],
		"parabola": {
			exports: "_"
		}
	}
})

require(["index","slide"], function(index, slide){
	
})