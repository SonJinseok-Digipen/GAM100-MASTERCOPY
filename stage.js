class stage{
	constructor(){
		this.centipedenum = 12;
		this.stagenum = 1;
	}

	update(){
		if (this.centipedenum == 0){
			this.stagenum +=1;
			this.centipedenum = 12;
		}
	}
	
}