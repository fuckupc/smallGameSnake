(function () {
    var elements = [];

    function Snake() {
        this.width = 20;
        this.height = 20;
        this.body = [
            { x: 2, y: 2, color: "red" },
            { x: 1, y: 2, color: "orange" },
            { x: 0, y: 2, color: "orange" }
        ];
        this.direction = "right";
    }

    Snake.prototype.initialize = function (map) {
        remove();

        for(var i = 0; i < this.body.length; i++) {
            var block = this.body[i];
            var snake = document.createElement('div');
            map.appendChild(snake);

            snake.style.position = "absolute";
            snake.style.width = this.width + 'px';
            snake.style.height = this.height + 'px';

            snake.style.left = block.x * this.width + 'px';
            snake.style.top = block.y * this.height + 'px';

            snake.style.backgroundColor = block.color;

            elements.push(snake);
        }
    };

    Snake.prototype.move = function (food, map) {
        var i = this.body.length - 1;

        //think about why use reverse loop?
        for(; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        switch (this.direction) {
            case 'right':
                this.body[0].x += 1;
                break;
            case 'left':
                this.body[0].x -= 1;
                break;
            case 'up':
                this.body[0].y -= 1;
                break;
            case 'down':
                this.body[0].y += 1;
                break;
        }
        console.log(this.direction + "" + this.body[0].y + this.body[0].x);

        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;

        if(headX == food.x && headY == food.y) {
            var lastBlock = this.body[this.body.length - 1];

            this.body.push({
                x: lastBlock.x,
                y: lastBlock.y,
                color: lastBlock.color
            });

            food.initialize(map);
        }
    }

    function remove() {
        var i = elements.length - 1;
        for(; i >= 0; i--) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    }

    window.Snake = Snake;
}());