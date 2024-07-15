class Snake {
    _x;
    _y;
    _size;
    _color;
    _speed;
    _ctx;
    _flag;

    constructor(x, y, size, color) {
        this._x = x;
        this._y = y;
        this._size = size;
        this._color = color;
        this._speed = 5;
        this._canvas = document.getElementById("screen-game");
        this._ctx = this._canvas.getContext("2d");
        this._flag = "right";
    }

    draw() {
        this._ctx.beginPath();
        this._ctx.rect(this._x, this._y, this._size, this._size);
        this._ctx.fillStyle = this._color;
        this._ctx.fill();
        this._ctx.closePath();
    }

    move() {
        // Move the snake
        this.clearScreen();
        // handle click events on the keyboard
        this.controlFlag();

        switch (this._flag) {
            case "left":
                this.moveLeft();
                break;
            case "right":
                this.moveRight();
                break;
            case "up":
                this.moveUp();
                break;
            case "down":
                this.moveDown();
                break;

        }
        this.draw();
    }


    controlFlag() {
        window.addEventListener("keydown", (evt) => {
            const keyNumber = evt.keyCode;
            console.log(keyNumber)
            if (keyNumber === 40) {
                this._flag = "down";
            } else if (keyNumber === 39) {
                this._flag = "right";
            } else if (keyNumber === 37) {
                this._flag = "left";
            } else if (keyNumber === 38) {
                this._flag = "up";
            }
        })
    }

    moveRight() {
        this._x += this._speed;
    }

    moveLeft() {
        this._x -= this._speed;
    }

    moveDown() {
        this._y += this._speed;
    }

    moveUp() {
        this._y -= this._speed;
    }

    clearScreen() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    eat(food) {

    }
}