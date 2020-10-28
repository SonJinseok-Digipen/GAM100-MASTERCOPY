class score{
	constructor(){
		this.score1 = 0;
	}
	update(){
		this.score1 = flea1.flscore + scolpion1.scscore + spider1.spscore;
	}
	draw(){
		push();
		textSize(20);
		fill(0, 102, 153);
		text(this.score1,25,25);
		pop();
	}
}