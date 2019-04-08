(function () {
    var elements = [];
    function Food() {
        this.x = 0;
        this.y = 0;
        this.width = 20;
        this.height = 20;
        this.color = "green";
    }

    Food.prototype.initialize = function (map) {

        remove();

        var food = document.createElement("div");
        map.appendChild(food);
        food.style.width = this.width + "px";
        food.style.height = this.height + "px";
        food.style.background = this.color;

        food.style.position = "absolute";

        this.x = parseInt(Math.random() * (map.offsetWidth / this.width - 1)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height - 1)) * this.height;
        food.style.left = this.x + "px";
        food.style.top = this.y + "px";
        elements.push(food);
    };

    function remove() {
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];

            ele.parentNode.removeChild(ele);

            elements.splice(i, 1);
        }
    }

    window.Food = Food;
}());