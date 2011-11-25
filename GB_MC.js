var cvs;
var ctx;
var sz = 4;
Display = {
	scale : 4,
	color : {
		none : "rgba(0,175,0,1)",
		green : "rgba(0,175,0,.35)"
	},
	hue : "rgba(0,175,0,.35)"

};

function init() {
	cvs = document.getElementById('cvs');
	cvs.width = 160*sz;
	cvs.height = 144*sz;
	cvs.style.marginLeft = -(160 * .5 * sz) + "px";
	cvs.style.marginTop = -(144 * .5 * sz) + "px";
	ctx = cvs.getContext('2d');
	ctx.strokeStyle = "#888";
	ctx.beginPath();
	ctx.moveTo(sz * 10, sz * 10);
	ctx.lineTo(sz * 100, sz * 100);
	ctx.closePath();
	ctx.stroke();
//	checker();
}

//console.log("red log, standing by");

/*
 * -0-----0--
 * --0-------
 * ----------
 * ----------
 * ----------
 * ----------
 * ----------
 * ----------
 * ----------
 * ----------
 */


function checker() {
	var pn = 1;
	ctx.fillStyle = "rgb(255,255,255)";
	for(var b = 0; b < 144; b++) {		
		for(var a = -1; a < 160; a++) {
			ctx.fillRect(a * sz, b * sz, sz, sz);
			pn *=(-1);
			ctx.fillStyle = "rgb("+(127.5+(pn*127.5))+","+(127.5+(pn*127.5))+","+(127.5+(pn*127.5))+")"; // (127.5+(pn*127.5))
		}
	}
}