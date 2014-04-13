Game.Preloader = function(game) {
};

Game.Preloader.prototype = {
    preload: function() {
        this.load_1 = this.add.sprite(0, 0, 'load_1');
        this.load_2 = this.add.sprite(0, 0, 'load_2');


        this.load.setPreloadSprite(this.load_2);

        this.load.image('bg', 'assets/background.jpg');
        this.load.image('c2s', 'assets/c2s.png');
        this.load.image('gamebg', 'assets/gamebg.png');
        this.load.image('buy_button', 'assets/green_panel.png');
        this.load.image('sell_button', 'assets/red_panel.png');
        this.load.image('short_button', 'assets/blue_panel.png');
        this.load.image('twitter', 'assets/twitter.png');
        this.load.image('tablet', 'assets/tablet.png');
        this.load.spritesheet('arrows', 'assets/arrows.png', 103, 74);
        this.load.audio('sound', ['assets/sound.wav']);
    },
    create: function() {
        this.state.start('MainMenu');

    }
};