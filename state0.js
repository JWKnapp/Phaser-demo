var demo = {},
  centerX = 1500 / 2,
  centerY = 1000 / 2,
  derp,
  speed = 6;
demo.state0 = function() {};
demo.state0.prototype = {
  preload: function() {
    game.load.spritesheet(
      'derp',
      'assets/spriteSheets/derpSheet.png',
      500,
      500
    );
    game.load.image('city', 'assets/backgrounds/city_street.png');
  },
  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = '#DDDDDD';
    console.log('state0');
    addChangeStateEventListeners();
    game.world.setBounds(0, 0, 2813, 1000);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    var cityBG = game.add.sprite(0, 0, 'city');
    derp = game.add.sprite(centerX, centerY, 'derp');
    derp.anchor.setTo(0.5, 0.5);
    derp.scale.setTo(0.7, 0.7);
    game.physics.enable(derp);
    derp.body.collideWorldBounds = true;
    derp.animations.add('walk', [0, 1, 2, 3, 4]);

    game.camera.follow(derp);

    game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
  },
  update: function() {
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      derp.scale.setTo(0.7, 0.7);
      derp.x += speed;
      derp.animations.play('walk', 14, true);
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      derp.scale.setTo(-0.7, 0.7);
      derp.x -= speed;
      derp.animations.play('walk', 14, true);
    } else {
      derp.animations.stop('walk');
      derp.frame = 0;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      derp.y -= speed;
      derp.animations.play('walk', 14, true);
      if (derp.y < 422) {
        derp.y = 422;
      }
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      derp.y += speed;
      derp.animations.play('walk', 14, true);
    }
  },
};

function changeState(i, stateNum) {
  console.log('sate' + stateNum);
  game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args) {
  game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners() {
  addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
  addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
  addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
  addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
  addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
  addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
  addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
  addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
  addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
  addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}
