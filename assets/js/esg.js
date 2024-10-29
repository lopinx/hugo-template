var vm = new Vue({
	el: '#content',
	data: {

	},
	created() {
		if (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i
			.test(navigator.userAgent)) {
			//window.location.href = "/wap/esg";
		}
		setInterval(this.scroll, 4000);
	},
	methods: {

	}
});


// 轮播
var swiperBanner = new Swiper('.swiper-banner', {
	autoplay: true,
	loop: true,
});

// 案例
var caseContent = new Swiper('.case-content', {
	autoplay: true,
	loop: true,
	loopedSlides: 5, //looped slides should be the same
	navigation: {
		nextEl: '.case-next',
		prevEl: '.case-prev',
	},
});

var certifySwiper = new Swiper('.certify', {
	slidesPerView: 3,
	centeredSlides: true,
	loop: true,
	autoplay: true,
	pagination: {
		el: '.swiper-pagination-certify',
		clickable :true,
	},
	navigation: {
		nextEl: '.certify-next1',
		prevEl: '.certify-prev1',
	}

});

/* ************************************************************************************************/
(function () {
	window.scrollReveal = new scrollReveal({ reset: true, move: '50px' });
})();