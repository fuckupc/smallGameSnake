(function () {
    var that = null;

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.initialize = function () {
        this.food.initialize(this.map);
        this.snake.initialize(this.map);
        this.startMove(this.food, this.map);
        this.bindKey();
    };

    Game.prototype.startMove = function (food, map) {
        var timeId = setInterval(function () {
            this.snake.move(food, map);
            this.snake.initialize(map);

            var maxX = map.offsetWidth / this.snake.width;
            var maxY = map.offsetHeight / this.snake.height;

            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;

            if (headX < 0 || headX >= maxX) {
                clearInterval(timeId);
                alert("Game Over!");
            }
            if (headY < 0 || headY >= maxY) {
                clearInterval(timeId);
                alert("Game Over!");
            }
        }.bind(that), 150);
    };

    Game.prototype.bindKey = function () {
        document.addEventListener('keydown', function (e) {
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = 'left';
                    break;
                case 38:
                    this.snake.direction = 'up';
                    break;
                case 39:
                    this.snake.direction = 'right';
                    break;
                case 40:
                    this.snake.direction = 'down';
                    break;
            }
        }.bind(that), false)
    };

    window.Game = Game;
}());