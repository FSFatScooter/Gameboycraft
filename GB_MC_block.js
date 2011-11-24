var bl = "#000";
var dg = "#C2C2C2";
var lg = "#868686";
var wl = "#FFF";

function Fill(a){
	ctx.fillStyle = a;
}

function Rect(x, y, a, b){
	ctx.fillRect(x*sz, y*sz, a*sz, b*sz);
}

function dirt(xof,yof){
	xof = (xof===undefined || xof==null || xof.length<=0) ? 0: xof;
	yof = (yof===undefined || yof==null || yof.length<0) ? 0: yof;
	console.log('+drawing dirt');
	Fill(dg);
	Rect(xof,yof,12,12);
	Fill(lg);
	Rect(xof+1,yof+1,1,1);
	Rect(xof+5,yof+1,1,1);
	Rect(xof+9,yof+2,1,1);
	Rect(xof+2,yof+4,1,1);
	Rect(xof+5,yof+4,1,1);
	Rect(xof+1,yof+7,1,1);
	Rect(xof+9,yof+7,1,1);
	Rect(xof+5,yof+8,1,1);
	Rect(xof+10,yof+10,1,1);
	Rect(xof+4,yof+11,1,1);
}
