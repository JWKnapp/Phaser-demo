demo.state5 = function() {};
demo.state5.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#3366ff';
    console.log('state5');
    addChangeStateEventListeners();
  },
  update: function() {},
};
