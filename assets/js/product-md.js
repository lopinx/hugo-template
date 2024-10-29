var vm = new Vue({
	el: '#content',
	data: {
		brandShowIdx:0,
	},
	created() {
		if (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i
			.test(navigator.userAgent)) {
			//window.location.href = "/wap/product";
		}
		setInterval(this.scroll, 4000);
	},
	methods: {
		isBrandShow: function(idx) {
			this.brandShowIdx = idx;
		},
	}
})

// 轮播
// var swiper = new Swiper('.carousel', {
// 	autoplay: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	}
// });
// swiper.el.onmouseover = function() { //鼠标放上暂停轮播
// 	swiper.autoplay.stop();
// }
// swiper.el.onmouseleave = function() {
// 	swiper.autoplay.start();
// }

/* *************************************************************************************** */
layui.use(['laypage', 'layer'], function () {
	var laypage = layui.laypage
		, layer = layui.layer;

	//分页
	laypage.render({
		elem: 'goods-page'
		, curr: getUrlParam('page')    // 从网址获取当前
		, count: "345"
		, limit: 30
		, theme: '#50972c'
		, layout: ['count', 'prev', 'page', 'next', 'skip']
		, jump: function (obj, first) {
			if (!first) {
				window.location.href = "product.html?page=" + obj.curr;
			}
		}
	});
})

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return decodeURI(r[2]); return null;
}

form.on('submit(search)', function (data) {
	var keyWord = $('#keyWord').val();
	layer.load();
	window.location.href = "/product/?isSpecial=0&keyWord=" + keyWord;
});

/*每次刷新随机排列产品*/
document.addEventListener('DOMContentLoaded', function() {
	const ul = document.querySelector('.scheme_right > ul');
	let liElements = Array.from(ul.querySelectorAll('li'));
	let fixedLiElements = [];
	let randomLiElements = [];
	liElements.forEach((li, index) => {
		if ((index + 1) % 5 === 0) {
			fixedLiElements.push({ index: index, element: li });
		} else {
			randomLiElements.push(li);
		}
	});
	randomLiElements.sort(() => Math.random() - 0.5);
	let finalLiElements = [];
	let fixedIndex = 0;
	let randomIndex = 0;
	for (let i = 0; i < liElements.length; i++) {
		if (fixedIndex < fixedLiElements.length && fixedLiElements[fixedIndex].index === i) {
			finalLiElements.push(fixedLiElements[fixedIndex].element);
			fixedIndex++;
		} else {
			finalLiElements.push(randomLiElements[randomIndex]);
			randomIndex++;
		}
	}
	ul.innerHTML = '';
	finalLiElements.forEach(li => ul.appendChild(li));
});