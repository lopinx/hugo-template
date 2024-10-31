var vm = new Vue({
	el: '#content',
	data: {
		faIdx: 1, // 方案
		case_item_idx:'5_0'
	},
	created() {
		// if (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i
		// 	.test(navigator.userAgent)) {
		// 	//window.location.href = "/wap/index";
		// }
	},
	mounted () {
		// 页面一加载完成就执行getList方法
		// this.getProductList(); //方案
		// this.getCaseList(); //案例
	},
	methods: {
		// 方案
		clickFa: function(i) {
			this.faIdx = i;
			// $(".scheme_right img.lazyload").lazyload();
		},
		// 案例场景
		clickCase: function(index) {
			this.case_item_idx = index;
			// $(".case-box img.lazyload").lazyload();
		}
	}
});

// 轮播
var swiper = new Swiper('.carousel', {
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		// clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		slideChangeTransitionStart: function(){
			// $("img.lazyload").lazyload();
		},
		slideChangeTransitionEnd: function(){
			$("img.lazyload").lazyload();
		},
	},
});
// swiper.el.onmouseover = function() { //鼠标放上暂停轮播
// 	swiper.autoplay.stop();
// }
// swiper.el.onmouseleave = function() {
// 	swiper.autoplay.start();
// }
swiper.el.onmouseover = function() {
    swiper.navigation.$nextEl.removeClass('swiper-hide');
    swiper.navigation.$prevEl.removeClass('swiper-hide');
}
swiper.el.onmouseout = function() {
    swiper.navigation.$nextEl.addClass('swiper-hide');
    swiper.navigation.$prevEl.addClass('swiper-hide');
}


//服务体系
var galleryThumbs = new Swiper('.gallery-thumbs', {
	slidesPerView: 5,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,

});
var galleryTop = new Swiper('.gallery-top', {
	autoplay: false,
	loopedSlides: 5,
	thumbs: {
		swiper: galleryThumbs,
	},
	on: {
		slideChangeTransitionStart: function(){
			// $("img.lazyload").lazyload();
		},
		slideChangeTransitionEnd: function(){
			$(".ecology-box img.lazyload").lazyload();
		},
	},
});

var caseTab = new Swiper('.case-tab', {
	slidesPerView: 5,
});
var caseContent = new Swiper('.case-content', {
	autoplay: false,
	thumbs: {
		swiper: caseTab,
	}
});

/* *************************************************************************************/

(function () {
	getProvince();
})();

function rightMenuShow(type) {
	$('.rightMenu-show').hide();
	$('.pop-menu0' + type).show();
}

function rightMenuHide() {
	$('.rightMenu-show').hide();
}

//返回顶部效果
function goTopEx(num) {
	var obj = document.getElementById("zhiding");
	function getScrollTop() {
		return $(window).scrollTop();
	}
	function setScrollTop(value) {
		$(window).scrollTop(value);
	}
	//body往上滚动至600的距离 出现指定按钮
	window.onscroll = function () { getScrollTop() > 600 ? obj.style.display = "block" : obj.style.display = "none"; }
	obj.onclick = function () {
		var goTop = setInterval(scrollMove, num);//滚动速度
		function scrollMove() {
			setScrollTop(getScrollTop() / 1.1);
			if (getScrollTop() < 1) clearInterval(goTop);
		}
	}
}

//获取省份
function getProvince() {
	var provinceSelect = $('#area_province');
	for (var key in province) {
		provinceSelect.append('<option value="' + key + '">' + province[key] + '</option>');
	}
}
form.on('select(selctProvinceOnchange)', function (data) {
	var selectId = data.value;
	var citySelect = $('#area_city');
	citySelect.empty();
	var cityList = city[selectId];
	for (var key in cityList) {
		citySelect.append('<option value="' + key + '">' + cityList[key] + '</option>');
	}
	form.render('select');
});

form.on('submit(*)', function (data) {
	var provinceName = $('#area_province').find("option:selected").text();
	var cityName = $('#area_city').find("option:selected").text();
	if (document.getElementById("userCheck").checked == false) {
		layer.msg('请您同意勾选装配狮《用户协议》');
		return false;
	}
	layer.load();
	$.ajax({
		url: 'https://www.wooooden.com/api/home/consultSubmit',
		type: data.form.method,
		data: $(data.form).serialize() + "&provinceName=" + provinceName + "&cityName=" + cityName + "&sourceTxt=JDWY站点",
		success: function (info) {
			if (info.code === 1) {
				layer.msg(info.msg);
				setTimeout(function () {
					window.location.reload()
				}, 1000);
			} else {
				layer.msg(info.msg);
				layer.closeAll('loading');
			}
		}
	});
	return false;
});

//用户注册协议
$('.user-xy').on('click', function () {
	var content = '<div style="padding: 20px;font-size: 14px">' +
		'<div style="font-size: 16px;font-weight:700;text-align: center">装配狮用户注册协议和隐私政策</div>' +
		'<br>' +
		'《个人信息保护政策》<br>' +
		' <br>' +
		'湖南装配狮循环家具有限公司（以下称“我公司）深知认为个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我公司致力于维持您对我公司的信任，在利用我公司装配狮网站（以下称”本网站”）时，您所提供的个人信息，我公司将慎重处理，极力保护您的个人信息。为切实保护您的个人信息，我公司根据现行法律法规，制定了本《个人信息保护政策》。本《个人信息保护政策》将说明本网站在收集、使用、保护、公开披露、删除用户个人信息等方面的措施。<br>' +
		'本《个人信息保护政策》适用于我公司向您提供的所有服务，无论您是通过计算机设备、移动终端或其他设备获得的服务。<br>' +
		'本《个人信息保护政策》是您使用本网站服务及各项功能的基础，请您在使用本网站提供服务前，仔细阅读并明确您已经充分理解、接受本政策的内容，您可以根据自己的需求做出接受与否的选择。具体内容如下：<br>' +
		' <br>' +
		'【关于个人信息的收集】<br>' +
		'您已知悉且同意，在您注册本网站帐号或使用本网站提供服务时，本网站将记录您提供的相关个人信息，如：邮箱、手机号码等，上述个人信息是您获得本网站提供服务的基础。<br>' +
		'另，在您利用本网站时，需要输入个人信息时，本网站必定将收集的目的和方法明确表示，未经您的许可，不会收集您的个人信息。但是如果您不同意提供相关个人信息，您将可能无法使用本网站的全部或部分功能和服务。<br>' +
		' <br>' +
		'【关于个人信息的使用】<br>' +
		'为了向您提供优质服务，我公司会在下述情形使用您的个人信息：<br>' +
		'1）根据相关法律法规的要求；<br>' +
		'2）根据您的授权；<br>' +
		'3）根据本网站相关服务条款等的约定。<br>' +
		'此外，您已知悉并同意：我公司将不定期向您提供广告和促销资料或向您推荐本网站的服务信息。若您拒绝我公司不定期向您提供相关推广服务，您可以根据提示退订相关服务。<br>' +
		'未经您本人允许，我公司不会向任何第三方披露您的个人信息，但下列情形除外：<br>' +
		'1）本网站已经取得您明确的同意；<br>' +
		'2）司法机关或行政机关基于法律程序要求本网站披露的；<br>' +
		'3）本网站在为维护自身合法权益而向用户提起诉讼或仲裁时；<br>' +
		'4）根据您与本网站相关服务条款的约定；<br>' +
		'5）法律法规规定的其他情形。<br>' +
		' <br>' +
		'【关于个人信息的保护】<br>' +
		'我公司将努力保护其获得的用户个人信息，为防止您的个人信息在意外的、未经授权的情况下被非法访问、复制、修改、传送、遗失、破坏、处理或使用，我公司采取以下措施保护您的个人信息：<br>' +
		'<br>' +
		'采取合适的安全措施和技术手段存储及保护你的个人信息，以适当的方式对用户的个人信息进行加密处理，且存储在中国境内服务器上；<br>' +
		'<br>' +
		'在适当的位置使用密码对用户个人信息进行保护；<br>' +
		'<br>' +
		'限制对用户个人信息的访问，仅允许有必要知晓这些信息的人员访问个人信息，并要求他们履行相应的保密义务；<br>' +
		'<br>' +
		'其他的合理措施。<br>' +
		'<br>' +
		'若发生个人信息引发的安全事件，我公司按法律法规的要求，及时向您告知情况及措施。并将第一事件向相应主管机关报备，并即时进行问题排查，开展应急措施或行动。<br>' +
		'尽管已经采取了上述合理有效措施，但我公司仍然无法保证您的个人信息通过不安全途径进行交流时的安全性。因此，您也应采取积极措施保证个人信息的安全，如：定期修改账号密码，不将自己的账号密码等个人信息透露给其他人。<br>' +
		' <br>' +
		'【未成年人个人信息的特别保护】<br>' +
		'本网站的服务主要面向成人。如果没有父母或监护人的同意，未成年人不应创建自己的个人信息主体账户。<br>' +
		'若您是14周岁以下的未成年人，在使用本网站的服务前，应确保事先取得监护人的同意，如果您是已满14不满18岁的未成年人，在使用本网站的服务前，应确保事先取得未成年人本人或监护人的同意。如您本人在本网站上申请注册账号，本网站将默认为您已明示同意。<br>' +
		'对于经14周岁以上的未成年人本人或监护人同意而收集的未成年人个人信息的情况，本网站只会在受到法律允许或监护人明确同意或者保护未成年人所必要的情况下使用或公开披露此信息。<br>' +
		' <br>' +
		'【个人信息主体的权利】<br>' +
		'<br>' +
		'当您完成本网站的帐号注册后，您可以查阅、更正、删除您提交给本网站的个人信息。一般情况下，您可随时浏览、更正、删除自己提交的相关个人信息，但您可能无法修改注册时提供的某些初始注册信息及验证信息。<br>' +
		'<br>' +
		'你可以自主注销本网站的账户，注销后本网站将停止为您提供服务，并根据您的要求，删除您的个人信息，不再收集你的个人信息。<br>' +
		'<br>' +
		' <br>' +
		'【个人信息保护政策的更新】<br>' +
		'我公司将根据法律法规不定期更新本《个人信息保护政策》，更新后将直接在本网站上进行公布，当您继续使用本网站服务的，即视为您同意更新后的《个人信息保护政策的》内容。如果您不同意本网站对本《个人信息保护政策》相关条款所做的修改，您有权要求停止使用本网站的服务。<br>' +
		' <br>' +
		'如果您对本《个人信息保护政策》有任何疑问、意见或建议，请通过以下方式与我公司联系。<br>' +
		'电 话：185-1668-7118<br>' +
		'<br>' +
		'电子邮件：support@lopins.cn ' +
		'</div>';
	layer.open({
		type: 1 //Page 层类型
		, area: ['1200px', '600px']
		, title: '用户协议'
		, shade: 0.6 //遮罩透明度
		, maxmin: true //允许全屏最小化
		, anim: 0 //0-6的动画形式，-1不开启
		, content: content,
		btn: '同意并继续', btnAlign: 'c' //按钮居中
		, yes: function () {
			$("#userCheck").prop("checked", true);
			form.render('checkbox');
			layer.closeAll();
		}
	});
});

(function () {
	$("img.lazyload").lazyload();
	$('.zhiding').hide();//默认隐藏指定按钮
	goTopEx(20);//返回顶部 参数为滚动速度
})();

// 右侧导航
function rightMenuShow(type) {
	$('.rightMenu-show').hide();
	$('.pop-menu0' + type).show();
}

function rightMenuHide() {
	$('.rightMenu-show').hide();
}

//底部二维码
function qrcodeShow(type) {
	$('.qrcode-img').hide();
	$('.pop-img0' + type).show();
}

function qrcodeHide() {
	$('.qrcode-img').hide();
}

//返回顶部效果
function goTopEx(num) {
	var obj = document.getElementById("zhiding");
	function getScrollTop() {
		return $(window).scrollTop();
	}
	function setScrollTop(value) {
		$(window).scrollTop(value);
	}
	//body往上滚动至600的距离 出现指定按钮
	window.onscroll = function () { getScrollTop() > 600 ? obj.style.display = "block" : obj.style.display = "none"; }
	obj.onclick = function () {
		var goTop = setInterval(scrollMove, num);//滚动速度
		function scrollMove() {
			setScrollTop(getScrollTop() / 1.1);
			if (getScrollTop() < 1) clearInterval(goTop);
		}
	}
}

//底部浮层
function showFooterForm() {
	if ($('#colseFrom').hasClass('check-close')) {
		$('#colseFrom').removeClass('check-close');
		$('#colseFrom').addClass('check-open');
		$(".footerForm").animate({ bottom: '-80px' }, 500);

	} else {
		$('#colseFrom').removeClass('check-open');
		$('#colseFrom').addClass('check-close');
		$(".footerForm").animate({ bottom: '0' }, 500);

	}
}

function saveConsult() {
	var userName = $('#userNameFrom').val();
	var userPhone = $('#userPhoneFrom').val();

	if (userName == '') {
		layer.msg('请输入姓名');
		return false;
	}
	if (!/^1[2|3|4|5|6|7|8|9][0-9]\d{8}$/.test(userPhone)) {
		layer.msg('手机号填写错误!');
		return false;
	}

	$.ajax({
		url: 'https://www.wooooden.com/api/home/consultSubmit',
		type: 'post',
		data: {
			sourceTxt: 'Jdwy浮层',
			userName: userName,
			userPhone: userPhone,
		},
		success: function (info) {
			if (info.code === 1) {
				layer.msg('提交成功，专业客服会尽快与您联系');
				setTimeout(function () {
					window.location.reload()
				}, 1000);
			} else {
				layer.msg(info.msg);
			}
		}
	});
	return false;
}