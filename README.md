# Scratch-AI

Scratch projects generated with [goboscript](https://github.com/aspizu/goboscript) via the [scratch-mcp](https://github.com/uukelele/scratch-mcp) server.

## Projects

### `flappybird/`

A Flappy Bird clone built with goboscript.

- **Play:** open `flappybird/flappybird.sb3` in the [Scratch editor](https://scratch.mit.edu/projects/editor) or [TurboWarp](https://turbowarp.org/editor) (File → Load from computer).
- **Controls:** `Space` or mouse click to flap, `R` to restart.
- **Sprites:** `bird` (physics + input), `pipe` (clone-based obstacle spawner), `ground` (collision), `stage` (backdrop + global variables `score`, `high_score`, `game_over`).
- **Build:** `goboscript build` inside `flappybird/` produces `flappybird.sb3`.

Tuning lives in the `.gs` files:

| File | What it controls |
|------|------------------|
| `bird.gs` | gravity, flap power, terminal velocity, game-over |
| `pipe.gs` | spawn interval, pipe speed, gap position, scoring |
| `goboscript.toml` | frame rate, sprite layer order |
