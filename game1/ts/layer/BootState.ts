class BootState {
    game: Phaser.Game;
    dijis:Phaser.Group;
    constructor(game: Phaser.Game) {
        this.game = game;
    }
    preload() {
        this.game.load.image('diji','res/diji.png');
    }
    create() {
        this.game.scale.pageAlignVertically = true;
        this.game.scale.pageAlignHorizontally = true;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.createDijis();

    }
    update() {
        console.log('preoload update')

    }
    createDijis(){
        this.dijis = this.game.add.group();
        this.dijis.enableBody = true;
        this.dijis.physicsBodyType = Phaser.Physics.ARCADE;
        this.dijis.createMultiple(10,'diji');
        this.dijis.setAll('outOfBoundsKill',true);
        this.dijis.setAll('checkWorldBounds',true);
        //产生敌机的定时器
        this.game.time.events.loop(Phaser.Timer.SECOND*2,this.genDiji,this);
    }
    genDiji(){
        var child_diji = this.dijis.getFirstExists(false);
        if (child_diji){
            //重新设置敌机位置 reset
            child_diji.body.gravity.y = 100;
            child_diji.reset(this.game.rnd.integerInRange(0,this.game.width),this.game.rnd.integerInRange(0,-100));
        }else{
            console.log('cant create');
        }
    }
}
