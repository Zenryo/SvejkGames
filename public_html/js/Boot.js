var Game = {
};

Game.Boot = function(game) {
        score=0;
};

Game.Boot.prototype = {
    preload: function() {
        this.load.image('load_1', 'assets/load_1.png');
        this.load.image('load_2', 'assets/load_2.png');
    },
    create: function() {
        this.state.start('Preloader');
    }
};