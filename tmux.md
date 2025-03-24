# tmux

TMUX is like a terminal inside a terminal, special for manage sessions and processes.

## Layers
1. SESSION

### Session Commands

- Start a Session- `tmux`
- Detach  - ctrl + b, d
- Reattach to most resent Session - `tmux a`
- Reattach to a target sessuon by index - `tmux a -t 0`
- Create a new labeled Session - `tmux new -s iamalabel`
- list Active tmux Sessions - `tmux ls`
- Kill recent session - `tmux kill-session`
- Kill session by label - `tmux kill-session -t iamalabel`
- Kill all sessions - `tmux kill-server`
 
2. Windows

### Windows Command 

- Create a window - ctrl + b, c 
- Switch between windows: 
  - view as list and select - ctrl + b, w
  - Next window - ctrl + b, n 
  - Previous window - ctrl + b, p 
  - Switch by window index - Ctrl + b, index
- Rename Window - ctrl + b, ,
- Close Window - ctrl + b, &


3. Panes

- Split Pane Vertically - ctrl + b, %
- Split Pane Horizontally - ctrl + b, "
- Switch to another Pane via index - ctrl + b, q, index
- Switch to Another Pane - ctrl + b, direction (multiple)
- Resize Pane - ctrl + b, ctrl + direction (multiple)
- Resize Pane big steps - ctrl + b, alt + direction (multiple)
- Auto resize all pane:
  - Horizontally - ctrl + b, alt + 1
  - Vertically - ctrl + b, alt + 2
  - other alignment - ctrl + b, alt + 3, 4, 5 e.t.c 
- Close pane - ctrl + b, x 

## TMUX Config 

`vi tmux.conf`

~/tmux.conf
```
set -g mouse on 
setw -g mode-keys vi
```

## Copy mode 

1. `ctrl + b`, `[`
2. Move cursor to where you want to begin copying and press the `space` button to begin highlighting (use direction to expand highlighted texts and press `Enter` to copy )
3. ctrl + b, ] to pa