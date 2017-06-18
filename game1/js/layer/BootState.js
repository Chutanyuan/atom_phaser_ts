var BootState = (function () {
    function BootState(game) {
        this.game = game;
    }
    BootState.prototype.preload = function () {
        this.game.load.image('diji', 'res/diji.png');
    };
    BootState.prototype.create = function () {
        this.game.scale.pageAlignVertically = true;
        this.game.scale.pageAlignHorizontally = true;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.createDijis();
    };
    BootState.prototype.update = function () {
        console.log('preoload update');
    };
    BootState.prototype.createDijis = function () {
        this.dijis = this.game.add.group();
        this.dijis.enableBody = true;
        this.dijis.physicsBodyType = Phaser.Physics.ARCADE;
        this.dijis.createMultiple(10, 'diji');
        this.dijis.setAll('outOfBoundsKill', true);
        this.dijis.setAll('checkWorldBounds', true);
        this.zidans = this.game.add.group();
        this.game.time.events.loop(Phaser.Timer.SECOND * 2, this.genDiji, this);
    };
    BootState.prototype.genDiji = function () {
        var child_diji = this.dijis.getFirstExists(false);
        if (child_diji) {
            child_diji.body.gravity.y = 100;
            child_diji.reset(this.game.rnd.integerInRange(0, this.game.width), this.game.rnd.integerInRange(0, -100));
        }
        else {
            console.log('cant create');
        }
    };
    return BootState;
}());
