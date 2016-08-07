
var game = new Phaser.Game(400, 400, Phaser.AUTO, '');

game.state.add('play', playState);
game.state.add('puzzle', puzzleState);

game.state.start('play');