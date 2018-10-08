demo.state9 = function() {};
demo.state9.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#ff9999';
    console.log('statep9');
    addChangeStateEventListeners();
  },
  update: function() {},
};
