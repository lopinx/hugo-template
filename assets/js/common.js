// 客服链接
$(function() {
	//点击按钮时判断 百度商桥代码中的“我要咨询”按钮的元素是否存在，存在的话就执行一次点击事件
	$(".shangqiao").click(function(event) {
		// 跳转到kefu页面
		window.location.href = "/kefu/";
	});
});

// 所有链接都跳转到kefu页面
document.addEventListener('DOMContentLoaded', function() {
    const excludePrefixes = [
        'javascript:', 'mailto:', '#', 'tel:', 'sms:', 'callto:', 'data:', 'intent:', 'geo:',
		'.', '/index.html', '/product/', '/case/', '/kefu/', '/help/', '/news/', '/posts/', '/esg/', '/about/', '/contact/',
        'https://www.wooooden.com', 'https://www.issem.cn', 'https://beian.miit.gov.cn', 'https://www.dosprings.com', 'https://www.lopins.cn'
    ];
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const href = link.getAttribute('href');
		if (href && !excludePrefixes.some(prefix => href.startsWith(prefix))) {
            const url = new URL(href, window.location.href);
            const path = url.pathname;
            if (path && path != '/' && !excludePrefixes.some(prefix => href.startsWith(prefix))) {
                link.setAttribute('href', '/kefu/');
                console.log(path + '跳转到' + '/kefu/');
            }
        }
    });
});

/*
var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?566b31777728579c3005d1e6318bdbae";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();

$(function() {
	//点击按钮时判断 百度商桥代码中的“我要咨询”按钮的元素是否存在，存在的话就执行一次点击事件
	$(".shangqiao").click(function(event) {
		var api = $53.createApi();
		api.push('cmd', 'kfclient');
		api.push('type', 'popup');
		api.query();
	});
});
*/

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