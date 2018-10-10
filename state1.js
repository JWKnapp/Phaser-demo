demo.state1 = function() {};

var cursors;
var vel = 500;
var garbage;

demo.state1.prototype = {
  preload: function() {
    game.load.tilemap(
      'field',
      'assets/tilemaps/field.json',
      null,
      Phaser.Tilemap.TILED_JSON
    );
    game.load.image(
      'concreteStreetTile',
      'assets/tilemaps/concreteStreetTile.png'
    );
    game.load.image('garbage', 'assets/tilemaps/garbage.png');
    game.load.image('derp', 'assets/sprites/derp.png');
  },
  create: function() {
    game.stage.backgroundColor = '#33cc33';
    addChangeStateEventListeners();

    var map = game.add.tilemap('field');
    map.addTilesetImage('concreteStreetTile');
    map.addTilesetImage('garbage');

    var concrete = map.createLayer('concrete');
    garbage = map.createLayer('garbage');

    map.setCollisionBetween(1, 8, true, 'garbage');

    derp = game.add.sprite(200, 200, 'derp');
    derp.scale.setTo(0.2, 0.2);
    game.physics.enable(derp);

    cursors = game.input.keyboard.createCursorKeys();
  },
  update: function() {
    game.physics.arcade.collide(derp, garbage, function() {
      console.log('hit some trash');
    });
    if (cursors.up.isDown) {
      derp.body.velocity.y = -vel;
    } else if (cursors.down.isDown) {
      derp.body.velocity.y = vel;
    } else {
      derp.body.velocity.y = 0;
    }
    if (cursors.left.isDown) {
      derp.body.velocity.x = -vel;
    } else if (cursors.right.isDown) {
      derp.body.velocity.x = vel;
    } else {
      derp.body.velocity.x = 0;
    }
  },
};
