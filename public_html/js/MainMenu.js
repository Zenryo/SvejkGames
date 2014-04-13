Game.MainMenu = function(game) {
};
Game.MainMenu.prototype = {
    create: function() {
        var sharing = 0;
        bg = this.add.sprite(0, 0, 'bg');
        tablet = this.add.sprite(this.world.centerX, this.world.centerY, 'tablet');
        tablet.anchor.setTo(0.5);




        text = this.add.text(this.world.centerX, 200, "Your last profit:\n " + score + " money.", {
            font: "15px \"Press Start 2P\"",
            fill: "#ff0000",
            align: "center"
        });
        text.anchor.setTo(0.5);

        text2 = this.add.text(this.world.centerX, 350, "Click anywhere to START!\n(Except on Share button...)", {
            font: "13px \"Press Start 2P\"",
            fill: "#000",
            align: "center"
        });
        text2.anchor.setTo(0.5);
        text2.alpha = 0;
        this.add.tween(text2).to({alpha: 1}, 1500, Phaser.Easing.Linear.None, true, 0, 1000, true);

        share = this.add.sprite(this.world.centerX, this.world.centerY, 'twitter');
        share.anchor.setTo(0.5);
        share.inputEnabled = true;
        share.events.onInputDown.add(this.shareClicked, this);
    },
    update: function() {
        if (this.input.activePointer.isDown && sharing === 0) {
            this.game.state.start('Game');
        }
        sharing = 0;

    },
    start: function() {
        this.state.start('Game');
    },
    shareClicked: function() {
        sharing = 1;
        window.open("https://twitter.com/intent/tweet?url=http://svejkgames.com/game/protrader3000/&text=I+just+made+" + score + "+profit+on+ProTrader3000!&hashtags=ProTrader3000", "_blank");
    }
};