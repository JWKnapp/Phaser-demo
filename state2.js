demo.state2 = function() {};
demo.state2.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#33ccff';
    console.log('state2');
    addChangeStateEventListeners();
  },
  update: function() {},
};
