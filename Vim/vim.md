# VI

##What is vi
The vi editor is the most popular and commonly used Unix text editor. It is usually available in all Linux Distributions.

## Who is Bill Joy
William Nelson Joy is an American computer engineer and venture capitalist. He co-founded Sun Microsystems in 1982 along with Scott McNealy, Vinod Khosla, and Andy Bechtolsheim, and served as Chief Scientist and CTO at the company until 2003.
Known for: BSD • vi • csh • chroot • TCP/IP driver • co-founder of Sun Microsystems 

## How to start and exit vi
vi [filename]

## What are the command and insert modes, and how to switch from one to the other
`esc` - command mode
`i` or `a` or `o` - insert mode (The difference between them is how they enter insert mode).
`i` - When `i` is pressed it moves the cursor a step/character backward.
`I` - When `I` is pressed, the cursor jump to the beginning of the line.
`a` - When `a` is pressed it moves the cursor a step/character forward.
`A` - When `A` is pressed, the cursor jumps to the beginning of the line.
`o` - When `o` is pressed creates a new line below the current line and moves the cursor to that new line.
`O` - when `O` creates a new line above the current line and moves the cursor to that new line.

## How to cut and paste lines
`dd` - cut
`p` - paste

How to search forward and backward
`/string`	- search forward for occurrence of string in text
`?string`	- search backward for occurrence of string in text
`n`	- move to next occurrence of search string
`N` 	- move to next occurrence of search string in opposite direction

## How to undo
`u` - undo

## How to quit vi
`:q` - quit

## How to save a file
`:x` or `:wq`

## How to quit vi with out saving changes 
`:q!`

## Move cursor to the beginning of the line
`0`

## Move cursor to the end of line
`$`

## Show line numbers
`:set number`


## Hide line numbers
`:set nonumber`

## Moving the cursor with the keyboard
You can use your direction keys
OR
`h` - Left
`l` - Right
`j` - Down
`k` - Up

Number  (N) + Direction or (h, j, k, l) - Moves the cursor in N number of times.
  
## relativnumber
`:set relativenumber`

## tabstop
`:set tabstop=4`

## shiftwidth
`:set shiftwidth=4`

## Activate Mouse
`:set mouse=a`


## colorscheme
`:colorscheme slate`
or `:colorscheme ` press tab to switch available options



## Undoing and Redoing
`u` - Undo 
`ctrl + r` - Redo

## Visual mode (Highligting or selecting)
`v` - Enter visual mode & Leave visual mode

After Highlighting:
`d` - delete (and enter command mode)
`c` - delete (and enter insert mode)
`y` - copy (aka yanking)

## Paste
`p` - Paste (after the cursor)
`P` - Paste (Before the cursor)
Number (N) + `p` - e.g `10 p` to paste 10 times.

## Cutting
`dd` - Cut 
Number (N) + `dd` - e.g. `5 dd` cuts 4 lines and stops on the 5 line.

## Changing a line
`cc` - Change a line (Deletes the content of a line and allow u write a new one the same line)

## Copying (Yanking)
`yy` or `Y` - copys a full line.
Number (N) + `yy` or `Y` - Copys (Yanks) a number of specified lines.
`yt` + `char` - Yank to the first occurance of a specific character.

## Deleting and Changing a line
`D` - Deletes a line from cursor to the end of the line
`C` - @ `D` and enters insert mode immidiately.
`x` - Deletes character from left to right one by one per press.
`X` - Deletes character from right to left one by one per press.

## Replace a character
`r` - Replace a character.
Move the cursor before the line then press the key `r`.

## Move the Cursor Word after Word
`w` - Move the Cursor Word after Word in the forward direction (It also puts - [hypen] seperated text (i.e text surrounded by hyphen) into consideration e.g hello-world).

`W` - Move the Cursor Word after Word in the forward direction (It doesn't put text surounded by hyphen into consideration)
Number (N) + `w` - e.g. `3 w` move the cursor forwards to 3rd word after the cursor.

`b` - Move the Cursor Word after Word in the backward direction (It also puts - [hypen] seperated text (i.e text surrounded by hyphen) into consideration e.g hello-world).

`B` - Move the Cursor Word after Word in the backward direction (It doesn't put text surounded by hyphen into consideration)
Number (N) + `w` - e.g. `3 w` move the cursor to 3rd word after the cursor.

## Deleting a word
`dw` - delete a word after the cursor.
Number (N) + `dw` - deletes a number of words after the cursor.

`db` - deletes a word before the cursor.
Number (N) + `db` - deletes a number of words before the cursor.

when the cursor in between a text, it is unable to delete a full word without leave part of the text behind. The command below solves the problem.
`diw` - (delete inner word) 

`ciw` - (change inner word) deletes word and switch to insert mode.

`yiw` - copy (yank) inner word
``~~~~``
## Move the cursor to the end of a word
`e` - Moves the cursor to the end of a word.
`de` - deletes a word
 
## Move the cursor to the beginning of a line
`0` - Moves the cursor to the beginning of a line.
`d0` - delete (from the current position of the cursor) to the benning of a line.

## Move the cursor to the end of a line
`$` - Moves the cursor to the end of a line.
`d$` - Deletes (from the current position of the cursor) to the end of a line.

## Change/delete sentence within a quotation marks
`ci"` - Changes the text within a quotation mark.
`di"` - Deletes the text within a quote.
`vi"` - Highlights inner quote.

## Change inner parenthesis
`ci)` or `ci(` - Changes the text within a parenthesis.
`di)` or `di(` - Deletes the text within a parenthesis.
`vi)` or `vi(` - highlight the content within a parenthesis.

## Jump between open and closing brackets
place the cursor on either the closing and opening brackets then press the command below.
`%` - Moves cursor to the opening and closing brackets.
`d%` - Deletes the texts within a bracket.
`v%` - Highlights the texts within a bracket.
`c%` - Changes the texts within a bracket.


## Jump to the beginning and end of a text
`[[` or `gg` - Jumps to the beginning of text.
`]]` or `G` - Jumps to the end of text.

`{` - Moves upward between empty paragraphs.
`}` - Moves downward betweeb empty paragrahs.

## Jump to a specific character on the same line
`t` + `char` - Places the cursor before the specified character. (jumps foward)
`dt` + `char` - Deletes from the current cursor position to a character before the specified character.
`vt` + `char` - Highlight from the current cursor position to a character before the specified character.

`T` + `char` - Places the cursor before the specified character. (jumps backward)

## Jumping to a specific line
`Line Number` + `G` or `:` + `line Number`

## Indentation
`>>` - Indent 
`<<` - outdent
In visual mode press `<` to outdent and `>` to indent.

## Other modes
`SHIFT v` - (aka Visual line mode) Can only highlight line by line (cannot highlight parts of a line but only a full line)
`CTRL v` - (aka Visual block mode) is a column based highlight (highlights the same number of columns for all lines)

## Auto indent
`==` - Auto indent a line. (press the command on any line u want to auto indent). 

`gg` + `=` + `G` - auto indent from line one to the last line.

## Search
`/` + `word(s)` - Search forward text within the document
- Use `n` to search forwards.
- Use `N` to search backwards.

`?` + `word(s)` - search backwards.
- Use `n` to search backwards.
- Use `N` to search forwards.

Another approach is to place the text cursor within the word you want to search for and press aby of the commands below. 
`#` - Search backwards.
`*` - Search forwards.

## Mark apart within your document and jump to them
`m` + `char` - to mark (e.g. ma)
`'` + `char` - to jump to marked part (e.g. 'a)

## Center the cursor line at the middle of the screen
`zz` - center cursor line 

## Save and exit vim
`ZZ` - Save and exit.

## Sustituting string
`:%s/char(s) (to be replaced)/ char(s) (new string)/g` - e.g. :%s/korede/dozie/g 
The example above replaces korede with faith.
> % here means entire line

To do this on a single line or highlighted lines.
remove the % symbol
`:s/korede/dozie/g`

## Repeating commands
`.` - Repeats the last command.

## Macros & Register
When ever we yank some text, it is stored in a register.
- To see the content of register in vim, use the command `:reg` (it displays a table)
- Type c means command and type l mean line (copied or cut. 
- Name is the command that can be used to to re-perform `"number` + `p` can paste a line from the register.

##### Types of Registers
"+ - Clipboard 

##### Macros 
It allows you to record a set of commands and apply it multiple times.
`q` + `char` - e.g. qa will begin the recording of macro a. then user can begin to type a set of command that will be performed by the macro.

`ESC` - Escape key to stop recording.

`@` + `char` - e.g. @a to apply macro a on a line (Current).

> Don't limit yourself, you can have a macro implement another macro or multiple macros.

## Move line 
`:m` + `line number` 
-e.g.  :m 1 
moves current active line to line 1a 






