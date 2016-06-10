(function() {
  'use strict';

  function Game() {
    this.player = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.player = this.add.sprite(x, y, 'tiles', 1);
      this.player.tint = 0xc24931;

      this.player.anchor.setTo(0.5, 0.5);

      this.upKey = this.input.keyboard.addKey(Phaser.Keyboard.UP);
      this.downKey = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
      this.leftKey = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
      this.rightKey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    },

    update: function () {
      if (this.upKey.isDown)
      {
          this.player.y -=3;
      }
      else if (this.downKey.isDown)
      {
          this.player.y +=3;
      }

      if (this.leftKey.isDown)
      {
          this.player.x -= 3;
      }
      else if (this.rightKey.isDown)
      {
          this.player.x += 3;
      }
    }
  };

  window['cool-ass-game'] = window['cool-ass-game'] || {};
  window['cool-ass-game'].Game = Game;
}());
