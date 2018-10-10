demo.state2 = function() {};

var aim,
  shells,
  shell,
  enemy1,
  enemy2,
  enemy3,
  enemyGroup,
  velocity = 1000,
  nextFire = 0,
  fireRate = 200;

demo.state2.prototype = {
  preload: function() {
    game.load.image('derp', 'assets/sprites/derp.png');
    game.load.image('shell', 'assets/sprites/shell.png');
    game.load.image('tort', 'assets/sprites/tort.png');
    game.load.image('derp', 'assets/sprites/derp.png');
  },
  create: function() {
    game.stage.backgroundColor = '#33ccff';
    addChangeStateEventListeners();
    derp = game.add.sprite(centerX, centerY, 'derp');
    derp.anchor.setTo(1, 1);
    derp.scale.setTo(0.5);
    shells = game.add.group();
    shells.enableBody = true;
    shells.physicsBodyType = Phaser.Physics.ARCADE;
    shells.createMultiple(50, 'shell');
    shells.setAll('checkWorldBounds', true);
    shells.setAll('outOfBoundsKill', true);
    shells.setAll('anchor.y', 0.5);
    shells.setAll('scale.x', 0.4);
    shells.setAll('scale.y', 0.4);

    aim = game.add.sprite(centerX, centerY, 'shell');
    aim.anchor.setTo(0.3, 0.5);
    aim.scale.setTo(0.4);

    enemy1 = game.add.sprite(1300, 150, 'tort');
    game.physics.enable(enemy1);

    enemy2 = game.add.sprite(1300, 350 * 1 + 100, 'tort');
    game.physics.enable(enemy2);

    enemy3 = game.add.sprite(1300, 350 * 2 + 100, 'tort');
    game.physics.enable(enemy3);

    // enemyGroup = game.add.group();
    // enemyGroup.enableBody = true;
    // enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;

    // for (var i = 0; i < 3; i++) {
    //   enemyGroup.create(1300, 350 * i + 100, 'tort');
    // }

    // enemyGroup.setAll('anchor.y', 0.5);
    // enemyGroup.setAll('anchor.x', 0.5);
    // enemyGroup.setAll('scale.y', 0.4);
    // enemyGroup.setAll('scale.x', 0.4);

    enemy1.anchor.setTo(0.5, 0.5);
    enemy1.scale.setTo(0.5, 0.5);
    enemy2.anchor.setTo(0.5, 0.5);
    enemy2.scale.setTo(0.5, 0.5);
    enemy3.anchor.setTo(0.5, 0.5);
    enemy3.scale.setTo(0.5, 0.5);
  },
  update: function() {
    aim.rotation = game.physics.arcade.angleToPointer(aim);
    if (game.input.activePointer.isDown) {
      this.fire();
    }

    game.physics.arcade.overlap(shells, enemy1, this.hitEnemy);
    game.physics.arcade.overlap(shells, enemy2, this.hitEnemy);
    game.physics.arcade.overlap(shells, enemy3, this.hitEnemy);
    // game.physics.arcade.overlap(enemyGroup, shells, this.hitGroup);
  },
  fire: function() {
    if (game.time.now > nextFire) {
      nextFire = game.time.now + fireRate;
      console.log('firing');
      shell = shells.getFirstDead();
      shell.reset(aim.x, aim.y);

      game.physics.arcade.moveToPointer(shell, velocity);
      shell.rotation = game.physics.arcade.angleToPointer(shell);
    }
  },
  hitEnemy: function(e) {
    e.kill();
    shell.kill();
  },
  // hitGroup: function(e) {
  //   e.kill();
  //   console.log(e);
  //   shell.kill();
  // },
};
