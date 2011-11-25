var bl = "#000";
var gd = "#868686";
var gl = "#C2C2C2";
var wl = "#FFF";

function Fill(a){
	ctx.fillStyle = a;
}

function Rect(x, y, a, b){
	a = Real(a,1);
	b = Real(b,1);
	ctx.fillRect(x*sz, y*sz, a*sz, b*sz);
}

function Real(a,b){
	if (b===undefined || b==null || b.length<=0){
		b = 0;
	}
	if (a===undefined || a==null || a.length<=0){
		a = b;
	}
	console.log('An undefined variable has been asigned a value');
	return a; 
}

function Dirt(x,y){
	x=Real(x);
	y=Real(y);
	
	Fill(gd);
	Rect(x,y,12,12);
	Fill(bl);
	
	Rect(x+1,y+1);
	Rect(x+5,y+1);
	Rect(x+9,y+2);
	Rect(x+2,y+4);
	Rect(x+5,y+4);
	Rect(x+1,y+7);
	Rect(x+9,y+7);
	Rect(x+5,y+8);
	Rect(x+10,y+10);
	Rect(x+4,y+11);
}

function Grass(x,y,s){
	x=Real(x);
	y=Real(y);
	
	Fill(gd);
	Rect(x,y,12,12);
	Fill(bl);
	
	Rect(x+2,y+4);
	Rect(x+5,y+4);
	
	Rect(x+1,y+7);
	Rect(x+9,y+7);
	
	Rect(x+5,y+8);
	
	Rect(x+10,y+10);
	Rect(x+4,y+11);
	
	if (s==1){Fill(wl);}
	else{Fill(gl);};
	Rect(x,y,12);
	
	Rect(x,y+1,3);
	Rect(x+4,y+1);
	Rect(x+6,y+1,2);
	Rect(x+9,y+1,2);
	
	Rect(x+1,y+2);
	Rect(x+7,y+2);
	Rect(x+9,y+2);
}

function Snow(x,y){
	Grass(x,y,1);
}

function Sand(x,y){
	x=Real(x);
	y=Real(y);
	
	Fill(gl);
	Rect(x,y,12,12);
	
	Fill(gd);
	Rect(x,y);
	Rect(x+8);
	
	Rect(x+5,y+1);
	Rect(x+8,y+1);
	
	Rect(x+2,y+2);
	Rect(x+11,y+2);
	
	Rect(x+6,y+3);
	Rect(x+9,y+3);
	
	Rect(x+4,y+4);
	
	Rect(x+2,y+5);
	Rect(x+8,y+5);
	
	Rect(x+1,y+7);
	Rect(x+6,y+7);
	Rect(x+11,y+7);
	
	Rect(x+3,y+8);
	
	Rect(x+9,y+9);
	
	Rect(x+2,y+10);
	Rect(x+6,y+10);
	
	Rect(x+10,y+11);
}

function Wood(x,y){
	x=Real(x);
	y=Real(y);
	
	Fill(gd);
	Rect(x,y,12,12);
	
	Fill(bl);
	Rect(x,y,1,12);
	Rect(x+11,y,1,12);
	
	Fill(gl);
	Rect(x+1,y);
	Rect(x+1,y+9,1,3);
	
	Rect(x+2,y+4,1,2);
	
	Rect(x+3,y+2,1,2);
	Rect(x+3,y+8,1,3);
	
	Rect(x+4,y+7,1,2);
	
	Rect(x+5,y,1,2);
	Rect(x+5,y+11);
	
	Rect(x+6,y+3,1,3);
	Rect(x+6,y+9,1,2);
	
	Rect(x+7,y,1,2);
	
	Rect(x+8,y+2);
	Rect(x+8,y+5,1,4);
	
	Rect(x+9,y);
	Rect(x+9,y+10,1,2);
	
	Rect(x+10,y+3,1,5);
}

function Leaves(x,y){
	x=Real(x);
	y=Real(y);
	
	Fill(gl);
	Rect(x,y,12,12);
	
	Fill(gd);
	Rect(x+1,y);
	Rect(x+3,y,2);
	Rect(x+8,y);
	Rect(x+10,y);
	
	Rect(x,y+1);
	Rect(x+2,y+1,1,2);
	Rect(x+5,y+1);
	Rect(x+7,y+1);
	Rect(x+11,y+1);
	
	Rect(x+4,y+2);
	Rect(x+6,y+2);
	Rect(x+8,y+2);
	Rect(x+10,y+2);
	
	Rect(x,y+3,2);
	Rect(x+3,y+3);
	Rect(x+5,y+3);
	Rect(x+7,y+3);
	Rect(x+9,y+3);
	Rect(x+11,y+3);
	
	Rect(x+1,y+4);
	Rect(x+3,y+4,2);
	Rect(x+7,y+4,2);
	Rect(x+10,y+4);
	
	Rect(x,y+5);
	Rect(x+2,y+5);
	Rect(x+5,y+5,2);
	Rect(x+9,y+5,1,2);
	
	Rect(x+3,y+6,2);
	Rect(x+7,y+6);
	Rect(x+11,y+6);
	
	Rect(x,y+7);
	Rect(x+2,y+7);
	Rect(x+4,y+7);
	Rect(x+6,y+7);
	Rect(x+8,y+7);
	
	Rect(x+1,y+8);
	Rect(x+3,y+8);
	Rect(x+5,y+8);
	Rect(x+7,y+8,1,2);
	Rect(x+9,y+8);
	Rect(x+11,y+8);
	
	Rect(x,y+9);
	Rect(x+4,y+9);
	Rect(x+10,y+9);
	
	Rect(x+1,y+10);
	Rect(x+3,y+10);
	Rect(x+5,y+10,2);
	Rect(x+8,y+10);
	Rect(x+11,y+10,1,2);
	
	Rect(x,y+11);
	Rect(x+2,y+11);
	Rect(x+4,y+11);
	Rect(x+7,y+11);
	Rect(x+9,y+11);
}

function Planks(x,y){
	x=Real(x);
	y=Real(y);
	
	Fill(gd);
	Rect(x,y,12,12);
	
	Fill(gl);
	Rect(x,y,12);
	Rect(x,y+4,12);
	Rect(x,y+8,12);
	
	Rect(x+7,y+1,2);
	Rect(x+2,y+2);
	Rect(x+5,y+2);
	Rect(x+10,y+3);
	Rect(x,y+5);
	Rect(x+9,y+6);
	Rect(x+4,y+7,2);
	Rect(x+2,y+10);
	Rect(x+7,y+10);
	Rect(x+4,y+11);
	Rect(x+9,y+11,2);
}

function Stone(x,y){
	x=Real(x);
	y=Real(y);
	
	Fill(gd);
	Rect(x,y,12,12);
	Fill(bl);
	
	Rect(x,y);
	Rect(x+2,y)
	Rect(x+6,y,1,2);
	Rect(x+9,y,1,3);
	Rect(x+11,y);
	
	Rect(x+3,y+1);
	
	Rect(x,y+2);
	Rect(x+2,y+2);
	Rect(x+4,y+2, 2);
	Rect(x+8,y+2);
	Rect(x+11,y+2);
	
	Rect(x+1,y+3);
	Rect(x+3,y+3,1,4);
	Rect(x+5,y+3, 3);
	Rect(x+10,y+3,1,2);
	
	Rect(x+6,y+4,1,2);
	
	Rect(x+8,y+5,2,1);
	Rect(x+1,y+5);
	
	Rect(x,y+6);
	Rect(x+3,y+6,5,1);
	Rect(x+10,y+6,1,2);
	
	Rect(x+2,y+7);
	Rect(x+7,y+7,1,2);
	
	Rect(x,y+8,2);
	Rect(x+3,y+8);
	Rect(x,y+8);
	Rect(x+9,y+8,1,2);
	Rect(x+11,y+8);
	
	Rect(x+4,y+9, 3);
	
	Rect(x,y+10);
	Rect(x+3,y+10);
	Rect(x+7,y+10,2);
	Rect(x+10,y+7,2);
	
	Rect(x+1,y+11,2)
	Rect(x+5,y+11);
	Rect(x+7,y+11);
	Rect(x+9,y+11);
/*
	Rect(x,y);
*/	

}
