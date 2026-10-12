costumes "assets/pipe.svg";

hide;

var scored = 0;
var is_clone = 0;

proc spawn_loop {
    hide;
    wait 1;
    until (game_over == 1) {
        clone;
        wait 1.5;
    }
}

onflag {
    is_clone = 0;
    spawn_loop;
}

on "restart" {
    if (is_clone == 1) {
        delete_this_clone;
    } else {
        stop_other_scripts;
        spawn_loop;
    }
}

onclone {
    is_clone = 1;
    scored = 0;
    set_x 320;
    set_y random(0 - 70, 90);
    show;
    until (x_position() < (0 - 320) or game_over == 1) {
        change_x (0 - 5);
        if (scored == 0 and x_position() < (0 - 120)) {
            scored = 1;
            score++;
        }
    }
    delete_this_clone;
}
