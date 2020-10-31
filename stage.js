class stage{
	constructor(){
		this.centipedenum = 12;
		this.stagenum = 1;
		this.max_hit_count_wall = 10;
	}

	update(){
		if (this.centipedenum == 0){
			this.stagenum +=1;
			this.centipedenum = 12;
		}else if(this.max_hit_count_wall == 0){
			this.stagenum +=1;
		}
	}
	
}