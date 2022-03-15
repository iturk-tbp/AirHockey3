class Player{
    constructor(){
        this.name = null,
        this.poisitionX = 0,
        this.positionY = 250,
        this.dangerGoal = null,
        this.Score = 0,
        this.dXL = 0,
        this.dXH = 0
  }
    addPlayer(){
        var playerIndex  = "players/player" + this.index;
        if(playerCount === 1){
            this.positionX = 500;
            this.dangerGoal = "goal1";
            this.Score = 0;
            this.dXH = 1400;
            this.dXL = 1390;
        }
        else{
            this.positionX = 900;
            this.dangerGoal = "goal2"
            this.Score = 0;
            this.dXH = 10;
            this.dXL = 0;
        
        }
        database.ref(playerIndex).set({
            Name: this.name,
            PositionX: this.positionX,
            PositionY: this.positionY,
            Danger: this.dangerGoal,
            Score: this.Score,
            DXL: this.dXL,
            DXH: this.dXH
        })
    }
    getCount(){
        var countref = database.ref("playerCount")
        countref.on("value",data => {
          playerCount = data.val()
        })
      }
    updateCount(count){
    database.ref("/").update({
      playerCount: count
    })
  }
  update(){
    var playerIndex = "players/player" + this.index
    database.ref(playerIndex).update({
      PositionX: this.positionX,
      PositionY: this.positionY,
      Score: this.Score
    })
  }
  static getPlayersInfo(){
    var playerInforef = database.ref("players")
    playerInforef.on("value",data =>{
      allPlayers = data.val();
    })
  }
}