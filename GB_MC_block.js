var bl = "#000";
var gd = "#868686";
var gl = "#C2C2C2";
var wl = "#FFF";
var ct = "c11";
var cb = "c0";
var ot = "o11";
var ob = "o0";

var testr = "abcd";

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

function Door(x,y,z){
	x=Real(x);
	y=Real(y);
	
	Fill(wl);
	Rect(x,y,12,12);
	
	if (z.charAt(0)=="c"){
		Fill(gl);
		Rect(x+9,y+Number(z.slice(1)),3)
		Fill(gd);
		Rect(x+10,y,1,12);
	}
	else{
		Fill(wl);
		Rect(x+10,y,1,12);
		Fill(gd);
		Rect(x,y,11,12)
		Fill(gl);
		Rect(x+1,y+Number(z.slice(1)),2);		
		if (z.slice(1)==="11"){
			for(var c=0; c<8; c+=4){
				for(var d=0; d<8; d+=4){
					Fill(wl);
					Rect(x+c+2,y+d+2,3,3);
					Fill(gl);
					Rect(x+c+4,y+d+3,1,2);
					Rect(x+c+3,y+d+4);
				}
			}
		}
	}
}

function Lightning(x,y,z){
	x=Real(x);
	y=Real(y);
	
	
	for(var l=0;l<3;l++){
		switch(l){
		case 1:
			Fill(gl);
			break;
		case 2:
			Fill(wl);
			break;
		default:
			Fill(gd);
			break;
		} 
	Rect(x+3+l,y,6-2*l,2);
	Rect(x+2+l,y+2,6-2*l,2);
	Rect(x+3+l,y+4,6-2*l,2);	
	}
	
	if(z==1){
		Fill(gd);
		Rect(x+2,y+6,9,6);
		Rect(x+1,y+7,1,5);
		Rect(x+11,y+7,1,2);
		Rect(x,y+8);
		Rect(x,y+10)
		Rect(x+11,y+11);
		
		Fill(gl);
		Rect(x+4,y+6,5);
		Rect(x+2,y+7,8,5);
		Rect(x+10,y+7,1,2);
		Rect(x+1,y+8);
		Rect(x+1,y+10);
		Rect(x+10,y+11);
		
		Fill(wl);
		Rect(x+6,y+6,2,6);
		Rect(x+4,y+7);
		Rect(x+5,y+8,1,4);
		Rect(x+3,y+9,6);
		Rect(x+4,y+10,2);
		Rect(x+3,y+11,7);
		Rect(x+2,y+8);
		Rect(x+2,y+10);
		Rect(x+9,y+8);
	}
	else{
		for(var l=0;l<4;l++){
		switch(l){
		case 1:
			Fill(gl);
			break;
		case 2:
			Fill(wl);
			break;
		default:
			Fill(gd);
			break;
		} 
	Rect(x+4+l,y+6,6-2*l,2);
	Rect(x+5+l,y+8,6-2*l,2);
	Rect(x+4+l,y+10,6-2*l,1);
	Rect(x+3+l,y+11,6-2*l,1);	
	}
	}
}
