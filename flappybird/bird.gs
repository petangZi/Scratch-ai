costumes "assets/bird.svg";

var vy = 0;

proc flap {
    if (game_over == 0) {
        vy = 11;
    }
}

proc play {
    stop_other_scripts;
    goto 0 - 60, 0;
    vy = 0;
    game_over = 0;
    show;
    until (game_over == 1) {
        vy = vy - 1.2;
        if (vy < (0 - 15)) {
            vy = 0 - 15;
        }
        change_y vy;
        if (touching("pipe") or touching("ground")) {
            game_over = 1;
        }
    }
    if (score > high_score) {
        high_score = score;
    }
    until (y_position() < (0 - 150)) {
        vy = vy - 1.2;
        change_y vy;
    }
}

onflag {
    play;
}

onkey "space" {
    flap;
}

onclick {
    flap;
}

onkey "r" {
    broadcast "restart";
}

on "restart" {
    play;
}
