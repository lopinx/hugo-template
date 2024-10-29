var vm = new Vue({
	el: '#content',
	data: {
		caseTjIdx:1,
		isCaseShow:false,
		caseTjItemIdx:-1,
		caseTjIData:[],
		faIdx: 1, // 方案
		case_item_idx:'5_0',//案例轮播
		case_new:0, //案例新品
		case_old:0 //案例回收
	},
	created() {
		if (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i
			.test(navigator.userAgent)) {
			//window.location.href = "/wap/case";
		}
		setInterval(this.scroll, 4000)
	},
	mounted () {
		this.getCaseJpList();
	},
	methods: {
		// 精品推荐
		clickTjTab: function(idx) {
			this.caseTjIdx = idx;
			this.getCaseJpList();
		},
		enter:function(id){
			this.caseTjItemIdx = id;
		},
		leave:function(id){
			this.caseTjItemIdx = id;
		},
		getCaseJpList(){
			axios({
				method: 'get',
				url: '/api/Cases/getCaseJpList',
				headers: {
					'Content-Type': "application/json;charset=UTF-8",
				},
				params: {
					type:this.caseTjIdx,
				}
			}).then(res=>{                    //请求成功后执行函数
				if(res.data.code === 200){
					//定义从后端获取的joblist
					var res = res.data
					this.caseTjIData = res.data;
					console.log(this.caseTjIData)
				}else{
					console.log("获取失败")
				}
			})
				.catch(err=>{                   //请求错误后执行函
					console.log("请求错误")
				});
		},
		// 案例场景
		clickCase: function(index) {
			this.case_item_idx = index;
			// $(".case-box img.lazyload").lazyload();
		},
		// 安装案例
		clickCaseNew: function(idx) {
			this.case_new = idx;
			$(".case-list img.lazyload").lazyload();
		},
	}
})

// 轮播
var swiper = new Swiper('.carousel', {
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});
swiper.el.onmouseover = function() { //鼠标放上暂停轮播
	swiper.autoplay.stop();
}
swiper.el.onmouseleave = function() {
	swiper.autoplay.start();
}

// 客戶
var caseClient = new Swiper('.caseClient', {
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
caseClient.el.onmouseover = function() { //鼠标放上暂停轮播
	caseClient.autoplay.stop();
}
caseClient.el.onmouseleave = function() {
	caseClient.autoplay.start();
};

// 案例切换
var caseTab = new Swiper('.case-tab', {
	slidesPerView: 5,
});
var caseContent = new Swiper('.case-content', {
	autoplay: false,
	thumbs: {
		swiper: caseTab,
	}
});

/* ********************************************************************************************/
