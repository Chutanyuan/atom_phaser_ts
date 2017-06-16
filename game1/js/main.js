var game = new Phaser.Game(480, 320, Phaser.AUTO, 'game1');
var bootstate = new BootState(game);
game.state.add('bootstate', bootstate);
game.state.start('bootstate');
