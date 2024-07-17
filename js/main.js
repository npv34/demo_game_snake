const snake = new Snake(30, 30, 20, "red");
const food = new Food(100, 100, 10, "green");
const score = new Score();

function play() {

    snake.move();
    food.draw();
    snake.eat(food, score);
    score.draw();
    requestAnimationFrame(play)
}


play();

