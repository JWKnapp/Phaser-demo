demo.state3 = function() {};
demo.state3.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#ff9966';
    console.log('state3');
    addChangeStateEventListeners();
  },
  update: function() {},
};
