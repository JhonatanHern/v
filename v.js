function v_js_elementInViewport(el) {
	var top = el.offsetTop;
	var left = el.offsetLeft;
	var width = el.offsetWidth;
	var height = el.offsetHeight;
		while(el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}
	return (
		top < (window.pageYOffset + window.innerHeight) &&
		left < (window.pageXOffset + window.innerWidth) &&
		(top + height) > window.pageYOffset &&
		(left + width) > window.pageXOffset
	);
}
var v_js_targets = document.getElementsByClassName('j-animate')
function v_js_check() {
	for (var i = v_js_targets.length - 1; i >= 0; i--) {
		if(v_js_elementInViewport(v_js_targets[i]))
			v_js_targets[i].classList.add('j-animated')
		else
			v_js_targets[i].classList.remove('j-animated')
	}
}
document.addEventListener("scroll",v_js_check)
document.addEventListener("DOMContentLoaded",v_js_check)