Game.Game = function(game) {
};
Game.Game.prototype = {
    create: function() {

        cursors = this.input.keyboard.createCursorKeys();
        key1 = this.input.keyboard.addKey(Phaser.Keyboard.Q);
        key1.onDown.add(this.Buy, this);
        key2 = this.input.keyboard.addKey(Phaser.Keyboard.W);
        key2.onDown.add(this.Sell, this);
        key3 = this.input.keyboard.addKey(Phaser.Keyboard.E);
        key3.onDown.add(this.Short, this);
        
        lastprice = 1000;
        shorting = 0;
        cash = 25000;
        shares = 0;
        mny = 1000;
        time = 540;
        j = 0;
        effect_time = 0;
        signif = 0;
        score = 0;
        sound = this.add.audio('sound');
        gamebg = this.add.sprite(0, 0, 'gamebg');
        arrows = this.add.sprite(204, 182, 'arrows');
        arrows.anchor.setTo(0.5);
        arrows.animations.add('up', [0], 100, true);
        arrows.animations.add('down', [1], 100, true);
        arrows.animations.play('up');
        button = this.add.button(323, 420, 'short_button', this.Short, this);
        button.anchor.setTo(0.5);
        short_text = this.add.text(323, 420, "Short\n@\n" + this.numberWithCommas(mny), {
            font: "15px \"Press Start 2P\"",
            fill: "#ff0000",
            align: "center"
        });
        short_text.anchor.setTo(0.5);
        //
        button = this.add.button(213, 420, 'sell_button', this.Sell, this);
        button.anchor.setTo(0.5);
        sell_text = this.add.text(213, 420, "Short\n@\n" + this.numberWithCommas(mny), {
            font: "15px \"Press Start 2P\"",
            fill: "#ff0000",
            align: "center"
        });
        sell_text.anchor.setTo(0.5);
        //
        button = this.add.button(103, 420, 'buy_button', this.Buy, this);
        button.anchor.setTo(0.5);
        buy_text = this.add.text(103, 420, "Short\n@\n" + this.numberWithCommas(mny), {
            font: "15px \"Press Start 2P\"",
            fill: "#ff0000",
            align: "center"
        });
        buy_text.anchor.setTo(0.5);
        //

        //
        price_text = this.add.text(204, 133, "MNY: " + this.numberWithCommas(mny), {
            font: "15px \"Press Start 2P\"",
            fill: "#ff0000",
            align: "center"
        });
        price_text.anchor.setTo(0.5);
        //
        clock_text = this.add.text(547, 25, "9:00", {
            font: "15px \"Press Start 2P\"",
            fill: "#ff0000",
            align: "center"
        });
        clock_text.anchor.setTo(0.5);
        //
        money_text = this.add.text(542, 309, "Your Cash:", {
            font: "15px Arial",
            fill: "#E3E3E3",
            align: "center"
        });
        money_text.anchor.setTo(0.5);
        short_profit_text = this.add.text(542, 411, "Last Shorting Profit:", {
            font: "15px Arial",
            fill: "#E3E3E3",
            align: "center"
        });
        short_profit_text.anchor.setTo(0.5);
        //
        shares_text = this.add.text(542, 360, "Your MNY Shares:", {
            font: "15px Arial",
            fill: "#E3E3E3",
            align: "center"
        });
        shares_text.anchor.setTo(0.5);
        //
        money_count = this.add.text(542, 335, this.numberWithCommas(cash), {
            font: "25px Arial",
            fill: "#ff0000",
            align: "center"
        });
        money_count.anchor.setTo(0.5);
        //
        shares_count = this.add.text(542, 384, "0", {
            font: "25px Arial",
            fill: "#ff0000",
            align: "center"
        });
        shares_count.anchor.setTo(0.5);
        //
        shorting_profit = this.add.text(542, 435, "0", {
            font: "25px Arial",
            fill: "#ff0000",
            align: "center"
        });
        shorting_profit.anchor.setTo(0.5);
        //
        notes1 = this.add.text(222, 532, "Good luck on the market...", {
            font: "18px \"Press Start 2P\"",
            fill: "#fff000",
            align: "center"
        });
        notes1.anchor.setTo(0.5);
        //
        tv = this.add.text(547, 121, "", {
            font: "20px Sans",
            fill: "#ca0002",
            align: "center"
        });
        tv.anchor.setTo(0.5);
        this.time.events.loop(Phaser.Timer.SECOND / 2, this.updateMny, this);
        this.time.events.loop(Phaser.Timer.SECOND / 35, this.updateNotes, this);
        this.time.events.loop(Phaser.Timer.SECOND, this.updateClock, this);
        this.time.events.loop(Phaser.Timer.SECOND * 8, this.GenNews, this);
    },
    update: function() {},
    GenNews: function() {
        switch (this.rnd.integerInRange(1, 6))
        {
            case 1:
                tv.setText('Money CEO\n resigns!');
                this.newsStory(0, this.rnd.integerInRange(4, 7) * 2);
                break;
            case 2:
                tv.setText('World Government\nis planning to\nuse Dogecoin\ninstead of\nMoney!');
                this.newsStory(0, this.rnd.integerInRange(4, 7) * 2);
                break;
            case 3:
                tv.setText('SELL SELL SELL!!!');
                this.newsStory(0, this.rnd.integerInRange(4, 7) * 2);
                break;
            case 4:
                tv.setText('BUY BUY BUY!!!');
                this.newsStory(1, this.rnd.integerInRange(4, 7) * 2);
                break;
            case 5:
                tv.setText('Money is more\n popular then\n ever!');
                this.newsStory(1, this.rnd.integerInRange(4, 7) * 2);
                break;
            case 6:
                tv.setText('Money will\n be backed\n by BitCoin \ninstead of\nGold!');
                this.newsStory(1, this.rnd.integerInRange(4, 7) * 2);
                break;
            case 7:
                tv.setText('Report: BitCoin is more stable then Money!');
                this.newsStory(0, this.rnd.integerInRange(4, 7) * 2);
                break;
            case 8:
                tv.setText('Breaking: Bill Gates investen in MNY!');
                this.newsStory(0, this.rnd.integerInRange(4, 7) * 2);
                break;
        }
    },
    updateNotes: function() {
        notes1.x = notes1.x + 2;
        if (notes1.x - notes1.width / 2 > this.world.width)
            notes1.x = -notes1.width / 2;
    },
    Short: function() {
        if (shorting === 0 && cash >= mny) {
            sound.play();
            short_start = mny;
            shorting = 1;
            notes1.setText("Shorted @ " + this.numberWithCommas(mny));
        }
    },
    Buy: function() {
        if (mny <= cash) {
            sound.play();
            cash -= mny;
            shares++;
            shares_count.setText(this.numberWithCommas(shares));
            money_count.setText(this.numberWithCommas(cash));
            notes1.setText("Bought MNY @ " + this.numberWithCommas(mny));
        }
    },
    Sell: function() {
        if (shares > 0) {
            sound.play();
            shares--;
            cash += mny;
            shares_count.setText(this.numberWithCommas(shares));
            money_count.setText(this.numberWithCommas(cash));
            notes1.setText("Sold MNY @ " + this.numberWithCommas(mny));
        }
    },
    numberWithCommas: function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    newsStory: function(a, b) {
        j = 0;
        effect_time = b;
        signif = a;
    },
    updateMny: function() {
        if (mny < 15)
            this.bailout();
        j++;
        if (j < effect_time) {
            if (signif === 1)
                rnd = this.rnd.integerInRange(0, 10);
            else
                rnd = this.rnd.integerInRange(-10, 0);
        } else {
            tv.setText('');
            rnd = this.rnd.integerInRange(-10, 10);
        }

        mny = Math.round(mny + (mny * ((0.01) * rnd)));
        price_text.setText('Current Price: ' + this.numberWithCommas(mny));
        if (lastprice <= mny)
            arrows.animations.play('up');
        else
            arrows.animations.play('down');
        lastprice = mny;
        short_text.setText("Short\n@\n" + this.numberWithCommas(mny));
        buy_text.setText("Buy\n@\n" + this.numberWithCommas(mny));
        sell_text.setText("Sell\n@\n" + this.numberWithCommas(mny));
        if (shorting === 1) {
            shorting_profit.setText(this.numberWithCommas(short_start - mny));
            cash += short_start - mny;
            money_count.setText(this.numberWithCommas(cash));
            shorting = 0;
        }
    },
    updateClock: function() {
        time++;
        minutes = Math.floor(time / 60);
        seconds = time - minutes * 60;
        if (seconds < 10)
            extra_zero = '0';
        else
            extra_zero = '';
        if (time > 600)
            this.gameEnd();
        clock_text.setText(minutes + ':' + extra_zero + seconds);
    },
    gameEnd: function() {
        score = (cash + shares * mny) - 25000;
        this.state.start('MainMenu');
    },
    bailout: function() {
        mny += this.rnd.integerInRange(250, 2050);
    }
};