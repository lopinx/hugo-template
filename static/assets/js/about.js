var vm = new Vue({
	el: '#content',
	data: {
		site_tab_idx:0,
		site_content_sel:[],
		site_content_list:[
			{
				city: "李桥店展厅",
				area: "12000",
				address: "北京市顺义区Y603（沿沙路）楚天子谋大厦",
				url: "https://bj.jdwy.cn/",
				imgs:[
					'https://static.deartree.com/jdwy/images/pc/bj1.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj2.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj3.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj4.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj5.jpg',
				]
			},
			{
				city: "青浦展厅",
				area: "12000",
				address: "上海市青浦区嘉松中路3568号",
				url: "https://sh.jdwy.cn/",
				imgs:[
					'https://static.deartree.com/jdwy/images/pc/sh-qp-1.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-qp-2.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-qp-3.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-qp-4.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-qp-5.jpg',
				]
			},
			{
				city: "浦东展厅",
				area: "5000",
				address: "上海市浦东新区秀沿路128号11号楼3F第二树",
				url: "https://pd.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/shpd01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/shpd02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/shpd03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/shpd04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/shpd05.jpg',
				]
			},
			{
				city: "闵行展厅",
				area: "5000",
				address: "上海市松江区申光路168号6栋115号",
				url: "https://mh.jdwy.cn/",
				imgs:[
					'https://static.deartree.com/jdwy/images/pc/sh-mh-1.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-mh-2.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-mh-3.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-mh-4.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-mh-5.jpg',
				]
			},
			{
				city: "广州展厅",
				area: "11000",
				address: "广州市番禺区丽景路78号",
				url: "https://gz.jdwy.cn/",
				imgs:[
					'https://static.deartree.com/jdwy/images/pc/gz1.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/gz02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/gz03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/gz04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/gz05.jpg',
				]
			},
			{
				city: "深圳展厅",
				area: "8000",
				address: "深圳市南山区麻磡社区奇星路47号",
				url: "https://sz.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/sz01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/sz02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/sz03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/sz04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/sz05.jpg',
				]
			},
			{
				city: "天津展厅",
				area: "7500",
				address: "天津市北辰区青光镇铁锅店村104国道旁",
				url: "https://tj.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/tj01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/tj02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/tj03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/tj04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/tj05.jpg',
				]
			},
			{
				city: "武汉展厅",
				area: "5000",
				address: "武汉市洪山区白沙洲大道2号（华中城物流建材大市场）4栋3楼",
				url: "https://wh.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/wh01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/wh02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/wh03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/wh04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/wh05.jpg',
				]
			},
			{
				city: "杭州展厅",
				area: "6000",
				address: "杭州市萧山区义蓬街道南沙路17号",
				url: "https://hz.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/hz01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/hz02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/hz03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/hz04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/hz05.jpg',
				]
			},
			{
				city: "成都展厅",
				area: "8000",
				address: "成都市双流区西航港大道中三段2667号第二树",
				url: "https://cd.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cd01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cd02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cd03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cd04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cd05.jpg',
				]
			},
			{
				city: "重庆展厅",
				area: "6000",
				address: "重庆市江北区江北城组团A07地块(江北嘴金融城旁)俊豪ICFC，A座305",
				url: "https://cq.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cq01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cq02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cq03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cq04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cq05.jpg',
				]
			},
			{
				city: "香港展厅",
				area: "800",
				address: "香港特别行政区观塘区九龙湾启祥道9号信和工商中心7F",
				url: "https://hk.deartree.com/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/xg01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/xg02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/xg03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/xg04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/xg05.jpg',
				]
			},
			{
				city: "双桥店展厅",
				area: "1200",
				address: "北京市朝阳区豆各庄乡Find未来园区二楼",
				url: "https://bj.jdwy.cn/",
				imgs:[
					'https://static.deartree.com/jdwy/images/pc/bj-sq-1.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj-sq-2.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj-sq-3.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj-sq-4.jpg',
				]
			},
			{
				city: "金桥店展厅",
				area: "750",
				address: "上海市浦东新区金苏路200号金桥万创中心F栋",
				url: "https://sh.jdwy.cn/",
				imgs:[
					'https://static.deartree.com/jdwy/images/pc/sh-jq-1.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-jq-2.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-jq-3.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-jq-4.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-jq-5.jpg',
				]
			},
		],
	},
	created() {
		if (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i
			.test(navigator.userAgent)) {
			//window.location.href = "/wap/about";
		}
		// this.site_content_sel = this.site_content_list[0];
	},
	methods: {
		clickSiteTab: function(idx) {
			this.site_tab_idx = idx;
			// this.site_content_sel = this.site_content_list[idx];
			showSite();
		},

	}
});
showSite();
//展厅
function showSite() {
	var swiperSite = new Swiper('.swiper-site', {
		initialSlide:0,
		observer:true,//修改swiper自己或子元素时，自动初始化swiper
		autoplay: false,
		speed:2000,
		loop: true,
		// slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-next-site',
			prevEl: '.swiper-prev-site',
		},
	});
}



//展厅
// var gallerySite = new Swiper('.gallery-site', {
// 	slidesPerView: 11,
// 	freeMode: true,
// 	watchSlidesVisibility: true,
// 	watchSlidesProgress: true,
// });
// var galleryTop = new Swiper('.gallery-top', {
// 	autoplay: false,
// 	loop: true,
// 	thumbs: {
// 		swiper: gallerySite,
// 	},
// });
//企业文化
var solidQywh = new Swiper('.solid-qywh', {
	slidesPerView: 6,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
var swiperQywh = new Swiper('.swiper-qywh', {
	autoplay: false,
	speed:2000,
	loop: true,
	loopedSlides: 6,
	thumbs: {
		swiper: solidQywh,
	},
});
//荣誉
certifySwiper = new Swiper('#certify .swiper-container', {
	watchSlidesProgress: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	loopedSlides: 5,
	autoplay: false,
	navigation: {
		nextEl: '.swiper-next-certify',
		prevEl: '.swiper-prev-certify',
	},
	pagination: {
		el: '.swiper-pagination-certify',
		clickable :true,
	},
	on: {
		progress: function(progress) {
			for (i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i);
				var slideProgress = this.slides[i].progress;
				modify = 1;
				if (Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				translate = slideProgress * modify * 260 + 'px';
				scale = 1 - Math.abs(slideProgress) / 5;
				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if (Math.abs(slideProgress) > 3) {
					slide.css('opacity', 0);
				}
			}
		},
		setTransition: function(swiper, transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}

		}
	}
})
//里程碑
var proTab = new Swiper('.milestone-tab', {
	speed:1000,
	// spaceBetween: 6,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
});
var swiper = new Swiper(".milestone-content", {
	speed:1000,
	// spaceBetween: 6,
	thumbs: {
		swiper: proTab,
	},
	navigation: {
		nextEl: '.swiper-next-course',
		prevEl: '.swiper-prev-course',
	},
});
//爱心公益
var swiperWelfare = new Swiper('.swiper-welfare', {
    autoplay: false,
    // loop: true,
	slidesPerView: 4,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination-welfare",
		type: "progressbar",
	},
	navigation: {
		nextEl: '.swiper-next-welfare',
		prevEl: '.swiper-prev-welfare',
	},
});
// swiperWelfare.el.onmouseover = function() { //鼠标放上暂停轮播
// 	swiperWelfare.autoplay.stop();
// }
// swiperWelfare.el.onmouseleave = function() {
// 	swiperWelfare.autoplay.start();
// }

/* *********************************************************************************************/ 
var wow = new WOW(
	{
		boxClass: 'wow',      // 需要执行动画的元素的 class(默认是wow)
		animateClass: 'animated', // animation.css 动画的 class(默认是animated)
		offset: 100,          // 距离可视区域多少开始执行动画(默认为0)
		mobile: true,       // 是否在移动设备上执行动画(默认为true)
		live: true,       // 异步加载的内容是否有效(默认为true)
		callback: function (box) {
			// 每次动画启动时都会触发这个回调函数
			//传入的参数是动画DOM节点
		},
		scrollContainer: null // 可选滚动容器选择器，否则使用窗口
	}
);
wow.init();
function playVideo(opt) {
	if (typeof (opt) == "undefined") {
		alert("请传入必要参数！");
		return;
	}
	if (typeof (opt.elemt) == "undefined") {
		alert("请指定播放器要插入的对象！");
		return;
	}
	if (typeof (opt.src) == "undefined") {
		alert("请指定要播放视频的路径！");
		return;
	}
	var _this = this;
	_this.elemt = opt.elemt;                                       //播放器要插入的对象
	_this.src = opt.src;                                           //视频的URL(必设)
	_this.width = opt.width > 0 ? opt.width + "" : "100%";       //宽度(默认100%)
	_this.height = opt.height > 0 ? opt.height + "" : "";    //高度(默认100%)
	_this.autoplay = opt.autoplay == "false" ? "autoplay" : "";     //自动播放（true为自动播放）
	_this.poster = opt.poster;                                     //视频封面，播放时的封面图片
	_this.preload = opt.preload == "true" ? "preload" : "";        //预加载(true时启动加载)
	_this.loop = opt.loop == "false" ? "loop" : "";                 //循环播放(true时循环播放)
	var str = "<video controlslist='nodownload' playsinline -webkit-playsinline id='playVideo' controls ";                   //根据设置的属性的值，拼写video控件
	str += " width='748' height='421' " + _this.autoplay + " " + _this.preload + " " + _this.loop + " ";
	if (typeof (_this.poster) != "undefined") {
		str += " poster='" + _this.poster + "' style='vertical-align: middle;border: 0;outline: none;' >";
	} else {
		str += " > ";
	}
	str += " <source src='" + _this.src + "' width='235' height='133'  type='video/mp4; codecs='avc1.42E01E, mp4a.40.2'' />";
	str += "</video>";
	_this.elemt.innerHTML = str;                                   //将str放到要插入的对象中
	$('video').bind('contextmenu', function () { return false; });
}

$('.videoShow').on('click', function () {
	var video = 'https://cdn.jsdelivr.net/gh/lopinv/wooooden.com@main/docs/assets/images/about.mp4';
	var emhtml = '<div  id="divVideo""></div>';
	emhtml = emhtml + '<script type="text/javascript">';
	emhtml = emhtml + ' playVideo({';
	emhtml = emhtml + '   elemt: document.getElementById("divVideo"),';
	emhtml = emhtml + '   src: "' + video + '",';
	emhtml = emhtml + '   preload: "true",';
	emhtml = emhtml + '   autoplay: "true",';
	emhtml = emhtml + '   poster: "https://cdn.jsdelivr.net/gh/lopinv/wooooden.com@main/docs/assets/images/video.jpg",';
	emhtml = emhtml + '   loop: "true",';
	emhtml = emhtml + '   width: "748",';
	emhtml = emhtml + '   heigth:"421"';
	emhtml = emhtml + ' });';
	emhtml = emhtml + '<\/script>';

	layer.open({
		type: 1,
		title: false,
		area: ['748px', '421px'],
		shade: 0.8,
		closeBtn: 0,
		shadeClose: true,
		content: emhtml
	});
});

var obj1 = {
	el: $(".obj1"),
	max: "90816",
	start: 1 //增加开始的初始值
}
var obj2 = {
	el: $(".obj2"),
	max: "1150334",
	start: 1 //增加开始的初始值
}
var obj3 = {
	el: $(".obj3"),
	max: "27468720",
	start: 1 //增加开始的初始值
}

up(obj1);
up(obj2);
up(obj3);

function up(obj) {
	var item = obj.el;
	var num = obj.max;
	var start = obj.start;

	// 起始值
	countNum: start
	item.animate({
		// 最终值
		countNum: num
	}, {
		// 动画持续时间
		duration: 2000,
		easing: "linear",
		step: function () {
			// 设置每步动画计算的数值
			item.text(Math.floor(this.countNum));
		},
		complete: function () {
			// 设置动画结束的数值
			item.text(this.countNum);
		}
	});
}