/**
 * @author FSFatScooter
 */


function fakeMap(){
	Dirt();
	Grass(12);
	Snow(24);
	Sand(36);
	Wood(48);
	Leaves(60);
	Planks(72);
	Stone(84);
	Door(0,12,ct);
	Door(0,24,cb);
	Door(12,12,ot);
	Door(12,24,ob);
	Lightning(24,12);
	Lightning(24,24);
	Lightning(24,36)
	Lightning(24,48,1)
}

function fakeMap2(){
//	Stone(12,132);
//	Stone(12,120);
	Leaves(12);
	Leaves(24);
	Leaves(36);
	
	Leaves(0,12);
	Leaves(12,12);
	Leaves(24,12);
	Leaves(36,12);
	Leaves(48,12);
	
	Leaves(0,24);
	Leaves(12,24);
	Leaves(24,24);
	Leaves(36,24);
	Leaves(48,24);
	
	Leaves(12,36);
	Wood(24,36);
	Leaves(36,36);
	
	Wood(24,48);
	Wood(24,60);
	Wood(24,72);
	
	Planks(72);
	Planks(84);
	Planks(96);
	Planks(72,12);
	Planks(84,12);
	Planks(96,12);
	Planks(72,24);
	Planks(84,24);
	Planks(96,24);
	
}
